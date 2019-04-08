---
date: 2016-04-29T20:18:48+01:00
title: Booking API
---

{{<note title="Before you begin">}}
Refer to the [API Basics](/api/api-basics) section to ensure you are familiar with the essentials of how to interact with the API.
{{</note>}}

The DesignMyNight Booking API can be used to check venue availability and create a booking, and is suitable for clients who would prefer to implement their own booking process rather than using the [Booking Widget](/booking-widget).

## Overview

Creating a booking through the API consists of two stages:

1. Use the `venues` API endpoint to check the types of booking that are available and the restrictions for this booking type, and to build up the details of a booking that would be accepted
2. a) Submit the booking using the `bookings` API endpoint, *or*
<br>b) Redirect the customer to the DesignMyNight website to complete their booking


## Checking availability

The `venues` API endpoint provides you with all that you need to present valid booking choices to your users and then check the venue's availability based on those choices. You can post to this endpoint multiple times until you have a booking that would be able to be accepted.

Start by sending a POST request using the ID of the venue you wish to book:

```bash
$ curl -X POST https://api.designmynight.com/v4/venues/552435790df6902b7256f237/booking-availability
```

You'll get a response like this:
```json
{
  "payload": {
    "valid": false,
    "validation": {
      "type": {...},
      "num_people": {...},
      "date": {...},
      "time": {...},
      "duration": {...}
    },
    "action": "reject",
    "depositRequired": false,
    "preordersAvailable": false,
    "bookingDetails":{
      "venue_id": "552435790df6902b7256f237",
      "venue_group": "5524371d0df690ad7156f2ea"
    }
  },
  "status": 200,
  "requestTime": "2016-04-29T10:06:01",
  "responseTime": "2016-04-29T10:06:01",
  "statusText": "OK",
  "url": "/v4/venues/552435790df6902b7256f237/booking-availability",
  "method": "POST",
  "params": []
}
```

You can use the responses from this endpoint to construct a valid booking in whatever order you prefer. Each time you post to it, the response will let you know whether the given booking details are valid, and it will contain details on how to guide your user towards selecting details for a valid booking.


### Booking format

A valid booking should contain the following fields:

Field | Description
----- | -----
`type` | The ID of the booking type as a string
`num_people` | The number of guests in the booking as an integer
`date` | The date of the booking, in the format YYYY-MM-DD
`time` | The time of the booking in 24-hour format, eg 19:00
`duration` | The duration of the booking in hours as a decimal, eg 1.5


### Validation

The `validation` key in the returned JSON contains validation details for each required field. For each field, you get an object that consists of the following keys:

Key | Description 
--- | -----
valid | `Boolean`: whether the field is valid for the given booking
errors | `Error<>` If the field is not valid, contains an array of error details
suggestedValues | `Array` of potential values for the field
rules: | `Object` describing the validation rules for the field


### Suggested values

With every request, the `suggestedValues` object within a field's validation details will contain further details of potential values for that field, given the current booking details. For example, if you post a booking type but no other details, the `time` field will contain possible times for that booking type on any date. If you then post a booking type and a date, the `time` field will contain suggested values for a booking of that type on that date.

Suggested values contains an array of objects, each describing a potential value for the field. The object contains the following keys:

Key | Description 
--- | -----
`value` | `object` or `string` with the suggested value of the field
`valid` |`boolean` describing whether this value would be valid given the current booking details
`message` | `string` providing further information on the field's restrictions
`action` | `string` (only for `time`) describing the how the booking would be handled after submission - see [Submitting the booking](#submitting-the-booking)
`offers` | `array` (only with `getOffers=true`) See [Offers in Booking Availability](/offers-api/#offers-in-booking-availability)


### Validation rules

If returned within the `validation` object, the `rules` object contains further details on the validation rules that apply for the given field. For example, the `num_people` field will return a `rules` object containing a `min` and a `max` permitted for this field. These values may be `null` if no min or max is set.


## Submitting the booking

Once you have booking details that pass the validation, the `action` key in the availability response will contain a string letting you know what will happen if the booking is submitted. The action may be one of the following:

Action| Description
----- | -----
accept | The booking will be accepted and automatically confirmed
enquire | The booking will be processed as an enquiry, and the customer will have to wait for confirmation
may_enquire | The venue appears to have no availability, but the customer may choose to submit an enquiry anyway
reject | The booking cannot be accommodated

### Submitting through the API or through a web redirect

If a booking is valid to be submitted, the response from the `booking-availability` endpoint will contain a `next` key, with an object containing web and API URLs that may be used to submit the booking.

**Note**: some bookings require additional details from the customer before they can be completed - for example, some bookings will require a payment to be made in order to secure the booking, and others provide the ability to choose and pay for pre-order items before submitting the booking. To store these bookings, you can make a `POST` request to the /bookings endpoint. [Read more](#submitting-to-the-bookings-endpoint)

Where these additional details apply, you will not be able to submit the booking through the API, and will instead need to redirect the customer to the given URL in order to complete their booking. Where this applies you can supply a return URL for the customer to be redirected to after their booking has been submitted. 

### Submitting through the API

If an API URL is provided for in the 'next' object, you will need to construct a booking object that contains all of the fields in the `bookingDetails` object of the successful `booking-details` API response, as well as the following details:

Field | Description
----- | -----
`source` | (optional) `string` representing the source of the booking: should be 'partner' for any booking from a venue's own app.
`first_name` | `string` the customer's first name
`last_name` | `string` the customer's last name
`email` | `string` the customer's email address
`phone` | `string` the customer's phone number
`dob` | (optional) `string` the customer's date of birth, in the format YYYY-MM-DD
`newsletter_signup` | (optional) `boolean` whether the customer opted in to marketing communications
`marketing_preferences` | (optional) `array` An array of marketing preference IDs the user has agreed to. See [Marketing Preferences](#marketing-preferences) for further details

### Submitting to the /bookings endpoint

Alternatively you can store bookings and enquiries by making a POST request to the `/bookings` endpoint. This method will bypass the availability check, allowing you to capture enquiries. This method can also be used for when additional details are required

The following fields should be passed:

Field | Required | Description
--- | --- | ---
`source` | Yes | `string` Where the booking is coming from. In most cases, this should be `partner`
`first_name` | Yes | `string` The first name for the booking
`last_name` | Yes | `string` The last name for the booking
`num_people` | Yes | `integer` The number of people the booking is for
`type` | Yes | `string` The ID of the booking type
`venue_id` | Yes | `string` The ID of the venue
`date` | Yes | `string` The date of the booking, in the format YYYY-MM-DD
`time` | Yes | `string` The time of the booking, in the format HH:mm
`duration` | No | `integer` The duration of the booking in minutes
`email` | No | `string` The guest's email address
`dob` | No | `string` The guest's date of birth, in the format YYYY-MM-DD
`phone` | No | `string` The guest's phone number
`offer` | No | `string` The ID of an offer that should be associated with this booking
`notes` | No | `string` Any additional booking notes or special requests
`package` | No | `string` The ID of the booking package this booking has
`newsletter_signup` | No | `boolean` If the customer has agreed to sign up to the DMN newsletter
`marketing_preferences` | No | `array` An array of marketing preference IDs the user has agreed to. See [Marketing Preferences](#marketing-preferences) for further details
`custom_field_value` | No | `string` The value for the custom field

Here's an example request of storing an enquiry for 4 people on the 16th March 2018 at 16:00

```bash
$ curl -X POST https://api.designmynight.com/v4/bookings
    -d "source=partner&first_name=Dan&last_name=Johnson&num_people=4&venue_id=5853b29b12f78aa33f8b54b6&type=58c927215ee246985eb91b8e&date=2018-03-16&time=16:00"
```

The response will look like this:

```json
{
  "payload": {
    "booking": {
      "_id": "5aaaf965addee7655b15ace4",
      "created_date": "2018-03-15T22:53:25",
      "created_by": "58bd9a16dd7d97ef54cef63f",
      "last_updated": "2018-03-15T22:53:25",
      "reference": "DMN-9980140810",
      "venue_id": "5853b29b12f78aa33f8b54b6",
      "date": "2018-04-19T00:00:00",
      "time": "13:00",
      "type": {
        "guestlist": false,
        "id": "5922c9ee93f8d541531a49b3",
        "name": "Lunch",
        "private_hire": false
      },
      "num_people": 8,
      "first_name": "Dan",
      "last_name": "Johnson",
      "email": null,
      "notes": null,
      "source": "partner",
      "packages": null,
      "offer": null,
      "deposits": []
    },
    "bookingStatus": "received",
    "venue": {
      "type": "venue",
      "title": "Test Venue",
      "path": "\/london\/bars\/shoreditch\/test-venue",
      "page_type": "venue"
    }
  },
  "status": 200,
  "requestTime": "2018-03-15T22:53:24",
  "responseTime": "2018-03-15T22:53:40",
  "statusText": "OK",
  "url": "\/api\/v4\/bookings",
  "method": "POST",
  "params": []
}
```


### Submitting through the web

If you want or need to submit a booking through the web URL, you should direct the customer to the **web** part of the `next` object, optionally appending a `return_url` field containing a URL that the customer should be directed to once their booking has been submitted.

If this is used, the following details of the submitted booking will be appended to the return URL, and you should handle displaying the confirmation to the customer. 

Field | Description
----- | -----
reference | The booking reference
status | The status of the booking: 'complete' for confirmed bookings; otherwise this is an enquiry
`first_name` | `string` the customer's first name
`last_name` | `string` the customer's last name
`email` | `string` the customer's email address

## Updating an existing booking

An existing booking can be updated by making a `POST` request to the bookings API using the `/bookings/BOOKING_ID` endpoint, providing you have the ID of the booking you wish to update. The following example will update the status of a booking to `in_progress`.

```bash
$ curl -X POST https://api.designmynight.com/v4/bookings/5b7e8070addee7612f456972
  -d "status=in_progress"
```

You will receive a response with the newly updated booking, similar to this:

```json
{
  "payload": {
    "booking": {
      "_id": "5b7e8070addee7612f456972",
      "created_date": "2018-08-23T10:37:52",
      "last_updated": "2018-08-28T21:19:32",
      "booking_id": 123456,
      "source": "admin",
      "created_by": "5b7c2ba5addee77dbd517012",
      "assigned_to": "5b7c2ba5addee77dbd517012",
      "completed_by": "5b7c2ba5addee77dbd517012",
      "completed_date": "2018-08-23T10:37:52",
      "status_changed_date": "2018-08-28T21:19:32",
      "managed_by_venue": true,
      "invoiced": false,
      "reconciled": false,
      "status": "in_progress",
      "walk_in": true,
      "venue_id": "5596b23a0c23efff286f2b29",
      "venue_group": "55a810f1c087b36d316e7f4b",
      "region": "512b1ebad5d190d2978c277e",
      "date": "2018-08-23T00:00:00",
      "time": "14:30",
      "duration": 90,
      "num_people": 3,
      "type": {
        "guestlist": false,
        "id": "58c927215ee246985eb91b8e",
        "name": "Drinks",
        "value": 0,
        "private_hire": false
      },
      "value": 0
    }
  },
  "status": 200,
  "requestTime": "2018-08-28T21:19:32",
  "responseTime": "2018-08-28T21:19:32",
  "statusText": "OK",
  "url": "\/v4\/bookings\/5b7e8070addee7612f456972",
  "method": "POST",
  "params": []
}
```

The supported statuses are described [here](/api/bookings-search#status-filter-format)

## Marketing Preferences

The marketing preferences defined for a venue/venue group can be retrieved using the venues endpoint. Each preference has a unique ID.

### Getting marketing preferences

The following `GET` request will return an array of marketing preferences that have been defined on the venue/venue group. Replace the ID in the URL with your Venue ID.

```bash
$ curl -X GET https://api.designmynight.com/v4/venues/552435790df6902b7256f237/marketing-preferences
```

If the venue has marketing preferences defined, you will receive a response similar to this:

```json
{
  "payload": {
    "marketing_preferences": [
      {
        "id": "486847581541665",
        "created_date": "2018-05-29T10:57:00",
        "name": "Email",
        "description": "I am happy to be contacted by email for promotions"
      },
      {
        "id": "864778487282768",
        "created_date": "2018-05-29T10:57:00",
        "name": "SMS",
        "description": "I am happy receive special offers by SMS"
      },
      {
        "id": "5878286768853523",
        "created_date": "2018-05-29T10:57:00",
        "name": "Post",
        "description": "I am happy to be sent marketing information in the post"
      }
    ]
  }
}
```

### Setting marketing preferences for a booking

When sending a new booking to the API, you can pass in the ID of each marketing preference the user has consented to.

For example, if a user has agreed to receive marketing via Email and Post:

```bash
$ curl -X POST https://api.designmynight.com/v4/bookings
    -d "source=partner&first_name=Dan&last_name=Johnson&num_people=4&venue_id=552435790df6902b7256f237&type=58c927215ee246985eb91b8e&date=2018-05-30&time=16:00&marketing_preferences[]=486847581541665&marketing_preferences[]=5878286768853523"
```

## Assigned area information

### Getting assigned area details

The following `GET` request will return an array of areas assigned to the booking. Replace the ID in the URL with your Booking ID.

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings/5b7e8070addee7612f456972/areas
```

If the booking has assigned areas, you will recieve a response like this

```json
{
  "payload": {
    "areas": [
      {
        "id": "5b4766db8264ee22a13db576",
        "name": "Table 4",
        "zone": "5b4766e58264ee22a13db583"
      }
    ]
  }
}
```

### Setting assigned areas

You can update the assigned areas of a booking by posting an array of area ids to assign the booking to. This will overwrite any previously assigned areas.

```bash
$ curl -X POST https://api.designmynight.com/v4/bookings/5b7e8070addee7612f456972/areas \
  -H "Content-Type: application/json" \
  -d '{"areas": ["5b4766db8264ee22a13db573", "5b4766db8264ee22a13db574"]}'
```

## Checking Booking Rules

The `booking-rules` endpoint will provide the rules for a booking for a specified date and booking type.
The following details must be passed in as a URL parameter:

Field | Required | Description
--- | --- | ---
`type` | **Yes** | The ID of the booking type as a string
`date` | **Yes** | The date of the booking in YYYY-MM-DD format

The following fields will be provided, based on the date and booking type passed in:

Field | Description
--- | ---
`bookings_from` | `string` the earliest time bookings are allowed, in 24 hour format eg `09:00`
`bookings_to` | `string` the latest time bookings are allowed, in 24 hour format eg `23:00`
`booking_available` | `boolean` Whether or not a booking would be allowed, based on the `Can Book` checkbox in Collins
`max_duration` | `integer` The maximum duration for a booking in minutes *
`booking_notes` | `string` The 'Bookings Policy' message
`min_people` | `number` The minumum number of guests allowed *
`max_people` | `number` The maximum number of guests allowed *
`bookings_shut` | `string` The time when same day bookings close *

<small> \* These fieldswill only be present when they have been set in Collins</small>

For example, to check the rules for a Brunch booking type on the 8th March 2018, the request would look like this:

```bash
$ curl -X POST https://api.designmynight.com/v4/venues/552435790df6902b7256f237/booking-rules?type=58d122ba566b8a3c198b45aa&date=2018-03-08
```

and the response would look like this

```json
{
  "payload": {
    "bookings_from": "08:00",
    "bookings_to": "21:00",
    "booking_available": true,
    "booking_notes": "Please read the terms and conditions",
    "bookings_shut": "09:00",
    "min_people": 2,
    "max_people": 6,
    "max_duration": 90
  },
  "status": 200,
  "requestTime": "2016-04-29T10:06:01",
  "responseTime": "2016-04-29T10:06:01",
  "statusText": "OK",
  "url": "/v4/venues/552435790df6902b7256f237/booking-availability",
  "method": "POST",
  "params": []
}
```
