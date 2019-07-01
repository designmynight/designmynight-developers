---
date: 2017-10-23T16:41:48+01:00
title: Venue Groups API
---

{{<note title="Before you begin">}}
Refer to the [API Basics](/api/api-basics) section to ensure you are familiar with the essentials of how to interact with the API.
{{</note>}}

## Overview

The venue groups API endpoint provides Collins users with the ability to manage aspects of their account, including adding and removing users permissions.


## User management

You can add, remove and edit users in your account using the users edge within the venue groups API endpoint.

### Adding users

To add a user, make a POST request to /venue-groups/YOUR_VENUE_GROUP_ID/users with a JSON body including the user's email address and the capabilities (permissions) that should be granted to that user. Email is the only required field to add a user to your account.

```
POST https://api.designmynight.com/v4/venue-groups/{venue_group_id}/users

{
  "email": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Smith",
  "capabilities": [
    "manage_venue_bookings_{venue_id}"
  ]
}
```

### Editing users

As above, but POST to an endpoint with the ID of the user to be modified.

```
POST https://api.designmynight.com/v4/venue-groups/{venue_group_id}/users/{user_id}

{
  "capabilities": [
    "manage_venue_group_bookings_{venue_group_id}"
  ]
}
```

### Removing users

Make a DELETE request to an endpoint with a specific user ID to remove them from your account.

```
DELETE https://api.designmynight.com/v4/venue-groups/{venue_group_id}/users/{user_id}
```

### Capabilities

Capabilities are strings that provide a short-hand mapping into the Collins internal permissions management system. They consist of a descriptive string followed by the ID of a venue group or venue to which that string should apply. See the [Collins success portal]](https://collins.uservoice.com/knowledgebase/articles/942757-user-permissions-explained-and-how-to-change-them) for more details on the different permissions levels. Potential values are:

Capability | Description
----- | -----
Bookings | 
`access_venue_bookings_{venue_id}` | Read only permission for a single venue
`access_venue_group_bookings_{venue_group_id}` | Read only permission for all venues in the group
`confirm_venue_bookings_{venue_id}` | Restricted user permission for a single venue
`confirm_venue_group_bookings_{venue_group_id}` | Restricted user permission for all venues in the group
`manage_venue_bookings_{venue_id}` | Manage bookings for a single venue
`manage_venue_group_bookings_{venue_group_id}` | Manage bookings for all venues in the group (includes those with no venue)
`manage_no_venue_bookings_{venue_group_id}` | Manage bookings that have no venue against them
`manage_venue_refunds_{venue_id}` | Manage refunds for a single venue
`manage_venue_group_refunds_{venue_group_id}` | Manage refunds for all venues in the group
Customers | 
`view_venue_customers_{venue_id}` | View customer details for a single venue
`view_venue_group_customers_{venue_group_id}` | View customer details for all venues in the group
`download_venue_customers_{venue_id}` | Download customer details for a single venue
`download_venue_group_customers_{venue_group_id}` | Download customer details for all venues in the group
Reports | 
`view_venue_reports_{venue_id}` | View reports for a single venue
`view_venue_group_reports_{venue_group_id}` | View reports for all venues in the group
`download_venue_reports_{venue_id}` | Download reports for a single venue
`download_venue_group_reports_{venue_group_id}` | Download reports for all venues in the group
Venues | 
`manage_venue_booking_rules_{venue_id}` | Manage booking rules for a single venue
`manage_venue_group_booking_rules_{venue_group_id}` | Manage booking rules for all venues in the group
`manage_page_{venue_id}` | Manage the DesignMyNight venue page for a single venue
`manage_venue_group_venues_{venue_group_id}` | Manage the DesignMyNight venue page for all venues in the group
Users |
`manage_venue_permissions_{venue_id}` | Manage user permissions for a single venue
`manage_venue_group_permissions_{venue_group_id}` | Manage user permissions for all venues in the group