---
date: 2018-08-02T11:44:48+01:00
title: Venues API
---

## Getting Venues

You can use the Venues API to grab all venues that match a criteria, for example all venues in a venue group.

```bash
$ curl -X GET https://api.designmynight.com/v4/venues?venue_group=5524371d0df690ad7156f2ea
```

You'll receive a response similar to this, containing an array of each venue in the venue group.

```json
{
  "payload": {
    "pages": [
      {
        "_id": "552435790df6902b7256f237",
        "path": "/london/bars/angel/bar-collins"
      },
      {
        "_id": "552446f62b588fe4207fabfb",
        "path": "/bar-designmynight"
      }
    ]
  },
  "status": 200,
  "requestTime": "2018-08-10T16:50:40",
  "responseTime": "2018-08-10T16:50:40",
  "statusText": "OK",
  "url": "/v4/venues",
  "method": "GET",
  "params": {
    "venue_group": "5524371d0df690ad7156f2ea"
  }
}
```

## Getting the Collins Settings

The following fields will be included in the venue response. 

Field| Collins Setting|Example| Can be set up at venue group level|
---|---|---|---
booking_labels| [Booking Labels](https://collins.uservoice.com/knowledgebase/articles/478042-labels-colours-adding-editing-booking-action-l)| `[{"colour": "f7c6c7", "id": "chase_deposit", "label": "Chase Deposit"}]` | Yes
booking_stages| [Booking Stages](https://collins.uservoice.com/knowledgebase/articles/1867465-diary-floorplan-booking-stages?utm_source=Collins+Subscribers+%28Feb+2017%29&utm_campaign=ce30cb069f-EMAIL_CAMPAIGN_2018_07_12_09_14&utm_medium=email&utm_term=0_16f0ace514-ce30cb069f-61017549)| `[{"colour": "6633b7", "id": "arrived", "label": "Arrived"}]` | Yes
customer_labels| [customer Labels](https://collins.uservoice.com/knowledgebase/articles/478041-labels-colours-adding-editing-customer-labels)| `[{"colour": "d4c5f9", "id": "cancelled", "label": "cancelled", "type": "no_show"}]` | Yes
booking_types| [Booking Types](https://collins.uservoice.com/knowledgebase/articles/477999-booking-types-adding-editing-your-booking-type) | `[{ "id": "58d122ba566b8a3c198b45aa", "name": "Brunch"}]` | No
bookable_areas | [Tables](https://collins.uservoice.com/knowledgebase/articles/478009-tables-areas-adding-new-tables) | `[{ "id": "55243ccd787279304031501d", "name": "1"}]` | No
bookable_area_zones| [Zones](https://collins.uservoice.com/knowledgebase/articles/478013) | `[{"id": "55243d292b588f381e7fac23", "name": "Restaurant"}]` | No
packages |[Pre-Orders Items](https://collins.uservoice.com/knowledgebase/articles/893736-pre-orders-adding-editing-packages-and-pre-order)| `[{"id": "5613f2a525020ec148a111a1", "name": "Bottle of White Wine", "price": 0.3, "type": "drink"}]` | Yes
preorder_menus| [Preorder Menus](https://collins.uservoice.com/knowledgebase/articles/1175845-collins-pre-orders-how-to-setup-guide) | `[{"id": "5ae18fc4dfd9f90645043348", "name": "Brunch Menu"}]` | Yes
opening_times| [Opening Times](https://collins.uservoice.com/knowledgebase/articles/822606-4-setting-editing-your-opening-times) |`[{"monday": {"status": true, "open": "09:00", "close": "04:00", "private_hire": false}]` | No
booking_unavailable| [Unavailable Dates](https://collins.uservoice.com/knowledgebase/articles/478006-unavailable-dates-how-to-shut-the-booking-widget) | `[{ "id": "5ab0f0f252550c03b07ca63a", "unavailable_from": "2018-03-31", "unavailable_to": "2018-03-31", "unavailable_message": "closed", "close_admin": true}` | No

You will be able to use a `GET` request to return an array of the settings for a venue. Replace the ID in the URL with your [Venue ID](https://developers.designmynight.com/api/venues-api/#getting-venues).

For example if you wanted to return all the booking types for a venue, you would make the following `GET` request

```bash
$ curl -X GET https://api.designmynight.com/v4/venues/552435790df6902b7256f237?fields=booking_types
```

For the settings that can be set up at venue group level, you would be able to use a `GET` request to return an array of the settings for the venue group. Replace the ID in the URL with your Venue Group ID. 

## Getting Packages

The following `GET` request will return an array of packages that have been set up for a venue/venue group. Replace the ID in the URL with your Venue ID.

```bash
$ curl -X GET https://api.designmynight.com/v4/venues/552435790df6902b7256f237?fields=packages
```

You'll receive a response similar to this:

```json
{
  "payload": {
    "venue": {
      "packages": [
        {
          "id": "5613f2a525020ec148a111a1",
          "name": "Bottle of White Wine",
          "price": 0.3,
          "type": "drink"
        },
        {
          "id": "5613f26472838b3f5323a5ca",
          "name": "Bottle of Red Wine",
          "price": 12,
          "type": "drink"
        },
        {
          "id": "5613f2b325020eee48a1124b",
          "name": "Bottle of Sol",
          "price": 4.5,
          "type": "drink"
        },
        {
          "id": "5613f27372838b2d5323a615",
          "name": "Smoked Salmon",
          "price": 4.5,
          "description": "Cream cheese, dill and spring onions on crisp bread",
          "type": "food",
          "sub_type": "starter"
        },
        {
          "id": "5613f27972838b1d5323a603",
          "name": "Turkey",
          "price": 12.5,
          "description": "Stuffing, Roast Potatoes, Steamed Carrots and green beans",
          "type": "food",
          "sub_type": "main",
          "diet_types": [
            "Halal"
          ]
        }
      ]
    }
  }
}
```
