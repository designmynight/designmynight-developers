---
date: 2018-07-23T13:13:29+01:00
title: Ticket widget
---

The ticket widget lists events, dates and tickets.  If a single event is listed with a single date it will only show the tickets. If an event with multiple dates is listed then it will show the calendar first.  If multiple events/event brands (item-ids) are listed then the events list will be displayed first.

## Setting up the ticket widget

The widget is included using javascript.  Below is a list of valid attributes for the script tag in order to customise it.  You can also use self-hosted CSS to change the look and feel of the form.


Attributes | Possible values | Default value | Description
----- | ----- | ----- | -----
src | //partners.designmynight.com/pw?v=3&r=10000 | The source, `r` should be unique to each ticket widget on the page
item-ids | \<Event Id\> \ \<Event Brand Id\> | N/A | The event or event brand (list of events) for the widget 

## Customising the Ticket Widget
By adding a json source the ticket widget can be customised.  The id of the json source should match the `r` id on the ticket widget itself. See examples below.

The following table shows options available to the ticket widget.

Option | Possible values | Default value | Description
----- | ----- | ----- | -----
affiliate-id | \<Affiliate Id\> | N/A | The affiliate id for tracking purposes
theme | light/inverse | light | Use light for light backgrounds and inverse for dark backgrounds (affects fonts colours)
hideTicketDesc | true/false | false | Hide or show the description of the tickets |
isModalMode | true/false | false | Show the widget as a "Buy Now" button which opens the widget in a popup |

## Examples

The following example sample below will display a basic widget:

```html
<!-- START DesignMyNight event widget -->
<script src="//partners.designmynight.com/pw?v=3&r=10000" item-ids="546a14bc0df690b92489b1a7" ></script>
<!-- END DesignMyNight event widget -->
```

The following example sample below will display a buy now button:

```html
<!-- START DesignMyNight event widget -->
<script src="//partners.designmynight.com/pw?v=3&r=10000" item-ids="546a14bc0df690b92489b1a7"></script>
<script type="text/json" id="tonic-widget-config-10000">{"hideTicketDesc":true,"theme":"inverse","isModalMode":true}</script>
<!-- END DesignMyNight event widget -->
```