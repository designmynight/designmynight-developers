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

Each user object will contain the following keys:

Field | Type | Description
--- | --- | ---
_id | `string` | The ID of the user
created_date | `string` | The date and time of when the user was created, in ISO 8601 format
last_updated | `string` | The date and time of when the user was last updated, in ISO 8601 format
first_name | `string` | The user's first name
last_name | `string` | The user's last name
username | `string` | The user's username*
email | `string` | The user's email address
phone | `string` | The user's phone number
dob | `string` | The user's date of birth, in ISO 8601 format*
gender | `string` | The user's gender*
company | `string` | The company name*
status | `string` | The user status
wishlist | `object` | Object containing items added to the user's wishlist
associated_venues | `array` | An array of venue IDs that this user is associated with**
marketing_permission | `boolean` | Marketing permission for the venue group*

<small> \* These fields will only appear if we have data for them<br>
** To get the venue IDs, please speak to your Account Manager for details</small>

To only request specific fields back, you can use the `fields` url parameter. This parameter accepts a comma separated string of fields. For example, the following request will only retrieve the first name and email address.

```bash
$ curl -X GET https://api.designmynight.com/v4/users/<user_id>?fields=first_name,email
```

## Getting a user

### Getting a user by ID

If the user ID is known, the user can be found using their ID. For example:

```bash
$ curl -X GET https://api.designmynight.com/v4/users/<user_id>
```

This will return a `user` object containing one user if the request was successful, or a [404 status code](/api-basics/#status-codes) if the user was not found.

### Getting a user by searching

A user can be found by sending a `search` query. Below are the fields which will be used for searching:

Field | Type | Description
--- | --- | ---
email | `string` | The email of the user
phone | `string` | The phone number used in the booking
last_name | `string` | The user's last name

For example, the following request will find users with the last name 'Johnson':

```bash
$ curl -X GET https://api.designmynight.com/v4/users/?search=johnson
```

This will return three keys in the `payload` object:

Field | Type | Description
--- | --- | ---
`users` | `array` | An array of users found. This array will be empty if none were found.
`start` | `int` | The starting position for pagination of this request. [Learn more about pagination &raquo;](#pagination)
`numFound` | `int` | The total number of users found matching this search query

Here's an example response:

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
        "last_name": "User",
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

## Pagination

When searching for users, results are always limited to no more than 30 results per page. You'll know if your results have been trimmed when the `numFound` key is more than 30.

To retrieve the next set of data, use the `start` url parameter. The `start` parameter is used to specify the offset of records, and the default value is 0.

For example, let's say you've made the following search request:

```bash
$ curl -X GET https://api.designmynight.com/v4/users/?search=johnson&start=0
```

and 90 users were found. The `users` array will only contain 30 users. To get the next 30 users, make another request but increment the `start` parameter to 30.

```bash
$ curl -X GET https://api.designmynight.com/v4/users/?search=johnson&start=30
```

## Sorting

By default, users will be sorted by their last name in ascending order. You may optionally specify a field to sort users by using the `sort` url parameter. The fields which can be sorted by are listed in the [User format table](#user-format).

For example, to sort by email address, the request would look like this:

```bash
$ curl -X GET https://api.designmynight.com/v4/users/?sort=email
```

## Output as CSV

By default, the response will be formatted in JSON. However, by using the URL parameter `output=csv`, you will receive the response in a CSV format.

The following example will return a CSV format of all users you have permission to view:

```bash
$ curl -X GET https://api.designmynight.com/v4/users/?output=csv
```

Results for CSV output are always limited to a maximum of 25000 results per page.

Sorting results is not currently supported when outputting as a CSV.