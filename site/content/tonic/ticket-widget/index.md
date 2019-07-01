---
date: 2018-07-23T13:13:29+01:00
title: Ticket widget
---

The ticket widget lists events, dates and tickets.  If a single event is listed with a single date it will only show the tickets. If an event with multiple dates is listed then it will show the calendar first.  If multiple events/event brands (item-ids) are listed then the events list will be displayed first.

## Setting up the ticket widget

The widget is included using javascript.  You can also use self-hosted CSS to change the look and feel of the form.  You can also customise the widget further with certain attributes that are listed below.

An example of how your script tag should look:

```html
<script src="https://widgets.designmynight.com/tonic/ticket-widget.min.js?item-ids=<EVENT_ID>"></script>
```

## Customising the Ticket Widget
The URL for the ticket widget can take multiple parameters to allow further customisation and turning on/off features.

The following table shows options available to the ticket widget.

Option | Possible values | Default value | Description
----- | ----- | ----- | -----
affiliate-id | \<Affiliate Id\> | N/A | The affiliate id for tracking purposes
tracking-id | \<Tracking Id\> | N/A | Tracking ids set up in the Sales Tracking menu
theme | light/inverse | light | Use light for light backgrounds and inverse for dark backgrounds (affects fonts colours)
hideTicketDesc | true/false | false | Hide or show the description of the tickets |
isModalMode | true/false | false | Show the widget as a "Buy Now" button which opens the widget in a popup |
checkoutMode | modal/dmn/blank | false | How the checkout will open on your website |
occurrence | YYYYMMDD | empty | Force the ticket widget to open on a specific date |

The following table shows more customisable options available for widgets with multiple events on display

Option | Possible values | Default value | Description
----- | ----- | ----- | -----
hideEventPhotos | true/false | false | Shows or hides the lead photo for each event on the widget|
widgetMode | default-view/list-view | default-view | Changes the view of the widget from the default to a more compact, list view |
listViewOpen | true/false | false | When list-view is selected, should the ticket widget load opened or closed |
sortBy | next-date/title | next-date | What order should events appear on the ticket widget |
## Examples

The following example sample below will display a basic widget:

```html
<!-- START DesignMyNight event widget -->
<script src="https://widgets.designmynight.com/tonic/ticket-widget.min.js?item-ids=546a14bc0df690b92489b1a7"></script>
<!-- END DesignMyNight event widget -->
```

The following example sample below will display a buy now button:

```html
<!-- START DesignMyNight event widget -->
<script src="https://widgets.designmynight.com/tonic/ticket-widget.min.js?item-ids=546a14bc0df690b92489b1a7&hideTicketDesc=true&theme=inverse&isModalMode=true"></script>
<!-- END DesignMyNight event widget -->
```