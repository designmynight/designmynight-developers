---
date: 2016-12-13T10:11:48+01:00
title: Bookings Search API
---

{{<note title="Before you begin">}}
Refer to the [API Basics](/api-basics) section to ensure you are familiar with the essentials of how to interact with the API.
{{</note>}}

The DesignMyNight Booking search can be used to list and search through a venue's bookings.

## Overview

Queries are carried out as GET requests to the bookings API endpoint. To start with, you can try this with no parameters:

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings
```

You'll get a response like this, containing a list of bookings.
```json
{
  "payload": {
    "bookings": [
      {
        ...
      },
      {
        ...
      }
    ],
    "start": 0,
    "numFound": 105320
  },
  "status": 200,
  "requestTime": "2016-04-29T10:06:01",
  "responseTime": "2016-04-29T10:06:01",
  "statusText": "OK",
  "url": "/v4/bookings",
  "method": "GET",
  "params": []
}
```


## Booking fields

The following fields may be included in a booking:

Field | Type | Description | Example
----- | ------ | ----- | -----
_id | Hex ID | An internal unique ID for the booking | 57cfefdbc71620410eeae96b
admin_notes | Array | A list of internal (booking manager) notes added about the booking | `[{"note": "Need to contact"}]`
assigned_to | Hex ID | The unique ID of the user who this booking is currently assigned to | 54b4e1060df690cd5f0b033f
booking_id  | Integer | A booking reference, which the customer sees as DMN-XXXXXXX | 11771898986
comments | Array | A list of notes about the booking to be used by venue staff (AKA 'run sheet notes') | `[{"comment": "Returning visitor"}]`
created_by | Hex ID | The unique ID of the user who created the booking | 54b4e1060df690cd5f0b033f
created_date | Date/Time (UTC) | The time and date that the booking was created | 2016-09-07T11:45:47
date | Date/Time (UTC) | The date (not time) that the booking is taking place | 2015-12-05T00:00:00
deposits | Array | A list of deposits added to the booking, with amounts as a decimal | `[{"amount": 10}`
duration | Decimal | The duration of the booking in minutes, or -1 for 'until close' | 120
email | String | The customer's email address | jane@example.com
first_name | String | The customer's first name | Jane
follow_up | Date/Time (UTC) | A date that has been set for the Collins user to follow up on this booking | 2016-09-19T00:00:00
labels | Array | A list of labels that may have been added to the booking | need_to_chase
last_name | String | The customer's last name | Bloggs
last_updated | Date/Time (UTC) | The time and date that the booking was last updates | 2016-09-08T15:13:40
managed_by_venue | Boolean | True if this booking is managed by the Collins venue (as opposed to DesignMyNight) | true
num_people | Integer | The number of guests in the booking | 4
partner_source | String | A partner-defined string representing the source of the booking | DesignMyNight
phone | String | The customer's phone number |07123 456789
region | Hex ID | The ID of the DesignMyNight region this venue belongs to | 512b1ebad5d190d2978c277e
source | String | Where the booking was created | admin
status | String | The current status of the booking - new, in_progress, complete | in_progress
time | String | The time in 24-hour format that the booking is taking place, in local time | 18:00
type | Map | A map of details about the type of the booking, with a 'name' key for the friendly name | `{"name": "Drinks Table"}`
user_id | Hex ID | The ID of the customer | 57cfefdbc71620410eeae962
venue_group | Hex ID  |The ID of the venue group for this booking | 54b438182b588feb7337c5be
venue_id | Hex ID | The ID of the venue for this booking | 5255230b0df690b914ca1ff5

For example, the following request will only output the labels and status of bookings:

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings?fields=labels,status
```

## Pagination

The response from each request includes a `numFound` property that tells you the total number of matching bookings for the given query. By default, the API will start at 0 (the first matching result) and will return 30 results per request. This can be changed using the following parameters:

Parameter | Description
----- | -----
`start` | The zero-based index of the first result to be included in the results. Default: 0
`limit` | The maximum number of results to be included in the results. Default: 30

For example, to include the third 'page' of results with 50 per 'page', you would use:

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings?start=100&limit=50
```

## Sorting

The response can be sorted using the `sort` parameter, using one of the allowed sorting options:

Option | Description | Direction
--- | --- | ---
`date_asc` | The date of the booking | Ascending
`date_desc` | The date of the booking | Descending
`created_date_asc` | The date the booking was made | Ascending
`created_date_desc` | The date the booking was made | Descending
`status_changed_date` | The date the status was last changed | Descending
`date_desc,time_desc` | The date and time of the booking | Descending

For example, the following request would sort bookings in order of the date their status was last changed, in descending order:

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings?sort=status_changed_date
```

## Filtering results

You can search and filter through the entire list of bookings by passing additional parameters. The following search parameters are currently available:

Field | Filter parameter format
----- | ------
assigned_to | Hex ID
booking_id | Number-only ID
created_date | Date range ([see below](#date-filter-format))
date | Date range ([see below](#date-filter-format))
email | A full email address
follow_up  | Date range ([see below](#date-filter-format))
has_preorders | Boolean: true or false
labels | One or more comma-separated labels
last_updated | Date range ([see below](#date-filter-format))
notifications | A single user notification ([see below](#notification-filter-format))
num_people | A number range, eg '1 TO 5' or '10 TO *'
phone | A customer's phone number
private_hire | Boolean: true or false
query | Free text - will search customer name, email and company
start_time | A time range in 24 hour format, eg '12:00 TO 17:00' or '* TO 10:00'
status | One or more comma-separated values ([see below](#status-filter-format))
time | A time range in 24 hour format, eg '12:00 TO 17:00' or '* TO 10:00'
type | One or more comma-separated hex IDs
venue_id | One or more comma-separated hex IDs

For example, to search for bookings that have a *VIP* and *Birthday* label:

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings?labels=vip,birthday
```

or to search for private hire bookings which that take place in February 2018:

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings?private_hire=true&date=2018-02-01%20TO%202018-02-28
```

### Date filter format
Dates may be filtered by providing a range, optionally using an asterisk to carry out an open-ended search. A number of date formats are supported, but to ensure accuracy the recommended date format is YYYY-MM-DDTHH:mm:ss, eg 2017-02-15T13:45:00. If the time is omitted, midnight (the start of the day) will be assumed.

Examples:

Parameter | Description
----- | -----
date=2017-02-15 | Match bookings with this exact date
last_updated=2016-12-15T13:45:00 TO * | Match bookings that have been updated since this time
created_date=* TO 2016-12-31T23:59:59 | Match bookings that were created before this time


### Status filter format
The following values may be provided with the `status` parameter to filter on the status of the bookings that are returned.

Value | Description
----- | -----
new | New bookings (not yet assigned to a Collins user)
in_progress | Enquiries that have been received and assigned but are not yet confirmed
complete | A confirmed booking
rejected | A rejected or cancelled booking
deleted | A booking that has been deleted from Collins
lost | A booking that was lost: its date passed without it being completed
all | Include new, in progress and complete bookings
include_rejected | Include new, in progress, complete and rejected bookings


### Notifications filter format
The following values may be provided with the `notifications` parameter to filter on notifications against the booking:

Value | Description
----- | -----
follow_up | All bookings that have been marked for follow-up today or earlier
for_today | All bookings that are not yet confirmed but have a date of today
untaken_two_hours | All new (unassigned) bookings that were received over 2 hours ago
messages | All bookings with unread received messages from the customer
customer_notes | Bookings that were auto confirmed and have unread customer requests
packages_requested | Bookings where the customer requested (but did not pay for) packages when booking online
deposit_authenticated | Bookings where card details have been taken
deposit_paid | Bookings where a deposit has been paid
customer_preorder_added | Bookings where a customer has added a pre-order
customer_preorder_complete | Bookings where a customer has marked their pre-orders as complete
email_delivery_failed | Bookings where an email sent through Collins Mail was unable to be delivered
customer_change | Bookings where the customer has made changes online
customer_cancelled | Bookings where the customer has cancelled (also requires the status parameter to be set to 'rejected')

## Output as CSV

By default, the response will be formatted as JSON. However, by using the url parameter `output=csv`, you will receive the response in a CSV format.

The following example will return a CSV format of all new bookings.

```bash
$ curl -X GET https://api.designmynight.com/v4/bookings?status=new&output=csv
```

Results for CSV output are always limited to a maximum of 25000 results per page. Unlike with JSON output, the `limit` parameter is not supported for CSV requests, so the limit cannot be changed.

The `sort` parameter is also not supported for CSV requests. Results will be sorted by in ascending order of the date and time of the booking.
