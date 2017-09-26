---
date: 2017-09-26T10:39:00+01:00
title: Offers API
---

The DesignMyNight Offers API can be used to check which offers are eligible for a given booking.

## Overview

The Offers API can be accessed with a `GET` request to the `/venues/VENUE_ID/offers` endpoint. Replace with the venue ID you wish to check offers for.

```shell
$ curl -X GET https://api.designmynight.com/v4/venues/552435790df6902b7256f237/offers
```

## Visibility

Offers can optionally be defined to be `visible_from` and `visible_to` a specified date range. This endpoint will only return offers where any of the conditions below are met:

* The `visible_from` and `visible_to` are both set, and the time* is between these dates 
* The `visible_from` *and* `visible_to` dates have not been specified
* The `visible_from` is in the past*, and the `visible_to` is not set
* The `visible_from` is not set, and the `visible_to` is in the future*

*<small>Using the time the request was made, in London time</small>

## Request Parameters

You can apply parameters to the request to filter out offers which would not be eligible. For example, if an offer only applied to parties larger than 5, appending `num_people=2` would mean the response would not return that offer.

The parameters are the same as the ones used in the [Bookings API](/booking-api/#booking-format).

Field | Description
----- | -----
`type` | The ID of the booking type as a string.
`num_people` | The number of guests in the booking as an integer
`date` | The date of the booking, in the format YYYY-MM-DD
`time` | The time of the booking in 24-hour format, eg 19:00
`duration` | The duration of the booking in hours as a decimal, eg 1.5

All parameters are optional. When a request is made with no parameters, the response will contain all visible offers for the specified venue.

## Response Format

Inside the `payload` key of the response will be an array of offers, and these offers will contain the following keys:

Key | Type | Description
--- | --- | ---
`_id` | `string` | The ID of the offer
`page_id` | `string` | The ID of the venue in which the offer applies to
`page_status` | `string` | The visibility status of the venue
`page_can_book` | `boolean` | Whether the venue can be booked online
`region_id` | `string` | The ID of the region this venue is located in
`title` | `string` | The title of the offer
`type_of_offer` | `array` | Currently unused, but may be used in the future
`type_of_venue` | `array` | An array of objects describing the type of venue
`availability` | `string` | The source where bookings will be eligible to use this offer. Possible values are {{<br>}}&bullet; `""` - All bookings{{<br>}}&bullet; `partner` - Only bookings from your website{{<br>}}&bullet; `designmynight` - Only bookings from DesignMyNight{{<br>}}
`description` | `string` | A description of the offer
`start_date` | `string` | When this offer is valid from, in ISO 8601 format
`expiry_date` | `string` | When this offer will expire, in ISO 8601 format
`visible_from` | `string` | When this offer will be visible from, in ISO 8601 format
`visible_to` | `string` | When this offer will be visible until, in ISO 8601 format
`rules` | `object` | An object containing rules for this offer. See [#offer-rules]()
`restrict_offer_to_types` | `boolean` | Whether this offer only applies to specific booking types
`booking_types` | `array` (only present if `restrict_offer_to_types` is true) | An array of booking types which this offer is eligible for

## Booking Types

When a `type` parameter is not specified in the request, the API will not filter offers based on the booking type they apply to.

Be aware that this will return offers that only apply to specific booking types. You can determine whether an offer applies to *all* booking types with the `restrict_offer_to_types` key in the response.

## Example Request

In this example, we will be requesting offers which are:

* Valid for a group of 6 people
* Will be valid on the 26th September 2017

```shell
$ curl -X GET https://api.designmynight.com/v4/venues/552435790df6902b7256f237/offers?date=2017-09-26&num_people=6
```

And your response will look like this:

```json
{
    "payload": [
        {
            "_id": "123456789",
            "page_id": "552435790df6902b7256f237",
            "page_status": "inactive",
            "page_can_book": false,
            "region_id": "512b1ebad5d190d2978c277e",
            "title": "Happy Hour!",
            "type_of_offer": [],
            "type_of_venue": [
                {...}
            ],
            "availability": "designmynight",
            "description": "Two for one cocktails from 5pm - 8pm on weekdays",
            "start_date": "2016-10-03T00:00:00",
            "expiry_date": "2017-09-30T00:00:00",
            "visible_from": "2016-09-01T00:00:00",
            "visible_to": "2017-09-30T00:00:00",
            "rules": {...},
            "restrict_offer_to_types": false
        }
    ],
    "status": 200,
    "requestTime": "2017-09-26T10:42:37",
    "responseTime": "2017-09-26T10:42:37",
    "statusText": "OK",
    "url": "/v4/venues/552435790df6902b7256f237/offers",
    "method": "GET",
    "params": []
}
```

## Offer Rules

If an offer has rules applied to it, these rules will be returned in the `rules` key.

Key | Type | Description
--- | --- | ---
`min_people` | `integer` | The minimum number of people required in a booking for this offer. `null` if the rule has not been set.
`max_people` | `integer` | The maximum number of people allowed in a booking for this offer. `null` if the rule has not been set.
`monday` | See [#day-rules]() | Rules specific to bookings on a Monday
`tuesday` | See [#day-rules]() | Rules specific to bookings on a Tuesday
`wednesday` | See [#day-rules]() | Rules specific to bookings on a Wednesday
`thursday` | See [#day-rules]() | Rules specific to bookings on a Thursday
`friday` | See [#day-rules]() | Rules specific to bookings on a Friday
`saturday` | See [#day-rules]() | Rules specific to bookings on a Saturday
`sunday` | See [#day-rules]() | Rules specific to bookings on a Sunday

### Day Rules

Each day of the week contains an object with the following keys

Key | Type | Description
--- | --- | ---
`available` | `boolean` | Whether this offer is available on this day of the week
`from` | `string` | The time this offer is valid from on this day of the week, in `HH:MM` format
`to` | `string` | The time this offer is valid until on this day of the week, in `HH:MM` format*

*<small>If the duration of the booking exceeds the `to` time, the offer will still be returned. The `to` time is for bookings that *start after* this time.</small>

## Offers in booking-availability

The [Booking API](/booking-api/#checking-availability) has the functionality to get offers which are valid for the specified offer. To enable this, append the `getOffers=true` parameter to your booking availability request.

```shell
$ curl -X GET https://api.designmynight.com/v4/venues/552435790df6902b7256f237/booking-availability?num_people=2&date=2017-09-26&getOffers=true
```

The response will contain an array of eligible *Offer IDs* in the `suggestedValues` fields under the following keys:

* `type`
* `time`
* `duration`

```json
{
    "time": {
        "suggestedValues": [
            {
                "time": "17:30",
                "offers": [
                    "57973d38ffe4fb53448b45d5"
                ]
            }
        ]
    }
}
```

<small>Some keys omitted for brevity</small>

