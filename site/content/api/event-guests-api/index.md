---
date: 2016-04-29T20:18:48+01:00
title: Event Guests API
---

{{<note title="Before you begin">}}
Refer to the [API Basics](/api/api-basics) section to ensure you are familiar with the essentials of how to interact with the API.
{{</note>}}

## Overview

The `guests` API endpoint provides you with all that you need to retrieve guest information for events.

## Listing guests

Start by sending a GET request with the ID of the event you wish to get the information for:

```bash
$ curl -X GET https://api.designmynight.com/v4/events/<event_id>/guests?occurrence=<date>
$ curl -X GET https://api.designmynight.com/v4/events/5a8c0ca4cb554029f55bbb9c/guests?occurrence=2020-06-28
```

### URL format
The URL contains the `<event_id>` which is tied to your event.  To get this do the following:

1. Log onto your Event admin
2. Go to the dashboard
3. Look at the URL and copy the long id

The URL also takes `occurrence` as a parameter.  This is the date the event takes place in the format YYYY-MM-DD.  For more information on obtaining event dates please contact your account manager.



You'll get a response like this:

```javascript
{
    "payload": {
        "guests": [{
            "rep_commission": 0,
            "discount": 0,
            "unitPrice": 0,
            "repId": "",
            "source": "designmynight-admin",
            "comments": "",
            "purchaseCheckoutQuestions": [],
            "productItems": [],
            "email": "support@designmynight.com",
            "phone": "",
            "checkedInGuests": 0,
            "checkedInTickets": [],
            "checkedIn": false,
            "purchaseId": "5a8c0d1e3a28a23624250dea",
            "purchaseRef": "EXT-3743990665",
            "subType": "5a8c0c7dc13ec64ef040ef38",
            "subTypeName": "Test Ticket",
            "firstName": "Sterling",
            "lastName": "Archer",
            "numPeople": 1,
            "ticketList": [{
                "_id": "5a8c0d1e3a28a23624250de8",
                "ticket_ref": 1,
                "reference": 651,
                "checked_in": false,
                "checked_in_by": "",
                "guest_name": "",
                "guest_email": "",
                "refunded": false,
                "item_id": "5a8c0ca4cb554029f55bbb9c",
                "item_name": "Tonic Party",
                "sub_type_id": "5a8c0c7dc13ec64ef040ef38",
                "sub_type_name": "Test Ticket"
                }
            ]
        }]
    },
    "status": 200,
    "requestTime": "2018-02-20T11:59:32",
    "responseTime": "2018-02-20T11:59:32",
    "statusText": "OK",
    "url": "/v4/events/5a8c0ca4cb554029f55bbb9c/guests",
    "method": "GET",
    "params": {
    "occurrence": "20200628"
    }
}
```

## Guests format

Each guest object will contain the following keys:

Field | Type | Description
--- | --- | ---
rep_commission | `integer` | the amount of commission the rep will receive (if any)
discount | `integer` | the discount amount applied to the tickey via a discout code
unitPrice | `integer` | the unit price of a ticket
repId | `string` | the rep id (id any)
source | `string` | string representing the source of the guest purchase
comments | `string` | comments a guest has made during the checkout
purchaseCheckoutQuestions | `array` | questions a guest has answered during the checkout
productItems | `array` | Product Items
email | `string` | customer email
phone | `integer` | customer phone
checkedInGuests | `integer` | number of checked in guests
checkedInTickets | `array` | list of the checked in tickets
checkedIn | `boolean` | if the guest is fully checekd in
purchaseId | `string` | the purchase id (internal to DMN)
purchaseRef | `string` | the purchase ref
subType | `string` |  ticket sub type id
subTypeName | `string` | ticket sub type name
firstName | `string` | first name of the customer
lastName | `string` | last name of the customer
numPeople | `integer` | the number of people
ticketList | `array` | the tickets in the guest purchase

Each ticket in the ticket list will contain the following keys

Field | Type | Description
--- | --- | ---
_id | `string` | the id of the ticket (internal)
ticket_ref | `string` | the reference of the ticket (deprecated)
reference | `int` | the reference of the ticket
checked_in | `boolean` | if the ticket is checked in
checked_in_by | `string` | who checked the ticketi n
guest_name | `string` | the guest name
guest_email | `string` | the guest email
refunded | `boolean` | if the ticket has been refunded
item_id | `string` | the event id
item_name | `string` | the event name
sub_type_id | `string` | the ticket id
sub_type_name | `string` | the ticket name
