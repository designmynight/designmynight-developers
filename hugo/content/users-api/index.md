---
date: 2017-05-09T20:18:48+01:00
title: Users API
---

{{<note title="Before you begin">}}
Refer to the [API Basics](/api-basics) section to ensure you are familiar with the essentials of how to interact with the API.
{{</note>}}

## Overview

The DesignMyNight Users API can be used to retrieve user information and create users, and is suitable for clients who require user information.

You will only be able to retrieve user information based on your permissions.

## User format

The `users` API endpoint 

Field | Type| Description
----- | -----|-----|
first_name|`string`| The first name|
last_name |`string`| The last name|
email |`string`| The email address|
phone |`string`| The phone number|
dob |`string`| The date of birth|
associated_venues|`array`| A list of venue IDs that this user is associated with**|
marketing_permission|`boolean`|Marketing permission for the venue group*

*Only appears if marketting permission has been granted<br>
**To get the venue IDs please speak to your Account Manager for details

## Getting a user

**Getting a user by ID**

If the user ID is known the a user can be found using their ID.

i.e

```bash
$ curl -X GET https://api.designmynight.com/v4/users/<user_id>
```

**Getting a user by searching**

A user can be found by sending a `search` query.  This can one one of the following

Field | Type| Description
----- | -----|-----|
email|`string`| The email of the user|
phone |`string`| The phone number used in the booking|

e.g

```bash
$ curl -X GET https://api.designmynight.com/v4/users/?search=<search_string>
```

**Response**

You'll get a response like this:

```json
{
  "payload": {
    "users": [
      {
        "_id": "58ec803aeda4c345932a49f0",
        "created_date": "2017-04-11T08:05:30",
        "last_updated": "2017-05-05T12:00:11",
        "email": "test-user@designmynight.com",
        "status": "inactive",
        "first_name": "Test",
        "last_name": "Yser",
        "phone": "000000000",
        "marketing_permission": true,
        "associated_venues": [
          "559fb07dc087b3be148b457b"
        ]
      }
    ],
    "start": 0,
    "numFound": 1
  },
  "status": 200,
  "requestTime": "2017-05-09T14:17:34",
  "responseTime": "2017-05-09T14:17:34",
  "statusText": "OK",
  "url": "\/v4\/users\/",
  "method": "GET",
  "params": {
    "search": "test-user@designmynight.com"
  }
}
```