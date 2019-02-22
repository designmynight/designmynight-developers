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
