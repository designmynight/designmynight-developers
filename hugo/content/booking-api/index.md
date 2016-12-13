---
date: 2016-04-29T20:18:48+01:00
title: Booking API
---

The DesignMyNight Booking API can be used to check venue availability and create a booking, and is suitable for clients who would prefer to implement their own booking process rather than using the [Booking Widget](/booking-widget).

## Before you begin

Refer to the [API Basics](/api-basics) section to ensure you are familiar with the essentials of how to interact with the API.


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

**Note**: some bookings require additional details from the customer before they can be completed - for example, some bookings will require a payment to be made in order to secure the booking, and others provide the ability to choose and pay for pre-order items before submitting the booking. 

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
