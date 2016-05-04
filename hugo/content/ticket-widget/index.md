---
date: 2016-04-29T13:42:29+01:00
title: Ticket widget
---

The ticket widget lists events, dates and tickets.  If a single event is listed with a single date it will only show the tickets. If an event with multiple dates is listed then it will show the calendar first.  If multiple events/event brands (item-ids) are listed then the events list will be displayed first.

## Customising the widget

The widget is included using javascript.  Below is a list of valid attributes for the script tag in order to customise it.  You can also use self-hosted CSS to change the look and feel of the form.


Attributes | Possible values | Default value | Description
----- | ----- | ----- | -----
src | //partners.designmynight.com/pw?v=2 | The source
item-ids | \<Event Id\> \| \<Event Brand Id\> | N/A | The event or event brand (list of events) for the widget 
affiliate-id | \<Affiliate Id\> | N/A | The affiliate id for tracking purposes
enable-animations | yes \| no | yes | Enable or disable the fade in effect when a stage is loaded
show-content | yes \| no | no | Show or hide the event descriptions on the 'event-picker' screen
show-header | yes \| no | yes | Show or hide the header of the form
border | yes \| no | yes | Show or hide the border of the form
show-event-title | yes \| no | yes | Show or hide the event title
background-colour | \<HTML Colour\> | transparent | Any valid HTML colour
theme | theme-default \| theme-light | theme-default | Use theme-default for light backgrounds and theme-dark for dark backgrounds (affects fonts colours)
fixed-height | yes \| no | no | Setting this to a value e.g. 200px will set the widget to that height and it will become scrollable
title | \<String\> | “Buy Tickets” | Override the title of the form
date-display | calendar \| list | calendar | Show a calendar or a list on the date page
show-ticket-description | yes \| no | toggle | no | Show or hide the ticket descriptions. Setting this to 'toggle' will hide by default but now a "show more" button to show the description
show-not-on-sale | yes \| no | yes | Show not on sale tickets on the form
show-sold-out | yes \| no | yes | Show sold out tickets on the form
buy-now-action | modal \| current \| blank | modal | When buy now is clicked either open in a modal, current window or a new window (most browsers use a new tab by default)
mode | form \| button | form | Display either a form or a button. In order to use this you must add &mode=button to the src attribute
button-title | \<String\> | n/a | If the mode is set to button you can change the title


## Purchase process 

When the form is submitted it will open up a modal by default. This behaviour can be customised with the buy-now-action attribute.


## Examples

The following example sample below will display a basic widget:

```html
<!-- START DesignMyNight event widget -->
<script src="//partners.designmynight.com/pw?v=2" item-ids="546a14bc0df690b92489b1a7" ></script>
<!-- END DesignMyNight event widget -->
```

The following example sample below will display a buy now button:

```html
<!-- START DesignMyNight event widget -->
<script src="//partners.designmynight.com/pw?v=2" item-ids="546a14bc0df690b92489b1a7&mode=button" mode=”button”></script>
<!-- END DesignMyNight event widget -->
```