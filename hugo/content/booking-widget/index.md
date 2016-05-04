---
date: 2016-04-29T13:32:57+01:00
title: Booking widget
---

The booking widget is the easiest way to allow customers to book through your website. You simply add a small piece of JavaScript to your page and the booking form will display, allowing customers to select the details of the booking they wish to make.

With the booking widget, the customer journey will take place in two parts:

1. The customer selects the type of booking, date, number of guests, time and (optionally) a duration for the booking. This part of the process takes place within the form that is embedded in your site.

2. The customer clicks to continue, and will be shown a form with the following stage(s) of the booking, including collecting their contact details and optionally taking payment or allowing pre-orders to be added to the booking. This part of the process takes place on the DesignMyNight website, either
<br>a) **For small screens** (e.g mobile phones) - in a new tab, or
<br>b) **For regular screens** - inside a popup on your website. In this case the customer will not be aware that they are using a different website to complete their booking


## Embedding the form

You can add the form to your page with a simple script tag, which you can get from the venue rules section of Collins. The script tag will look like this:

```html
<script src="//partners.designmynight.com/pf/js?venue_id=YOUR_VENUE_ID"></script>
```


## Multiple venues on a single form

You can take bookings for several venues on a single form by modifying the URL of the script tag above so that `venue_id` contains a comma-separated list of venue IDs. You can also choose this option when generating your form code in Collins.

If you have multiple venues on a single form, you can also choose to allow customers to choose a 'not sure' option by adding `&allow_any=true` to the end of the script URL.


## Restricting the form to a single booking type

You can restrict the booking form to only display specified booking types by adding a `type` parameter to the script URL:

- Set to **guestlist** to only show booking types that you have specified as guest list types
- Set to **private_hire** to only show booking types you have set up as private hire types
- Set to a single booking type ID (available in Collins) to only show a single booking type
- Set to multiple booking type IDs separated with a comma to only show specified booking types


## Styling the form

Since the booking form is inserted into your own website, it will automatically pick up any applicable CSS, so it can completely match the look and feel of your website.

If you want to further customise the appearance of the form, you can add specific CSS rules that apply to the booking form. The following table lists the main elements of the form and their CSS selectors:

Element | CSS Selector | Notes
--------|------|-----
Whole form | `.dmn-form`
'Make an Enquiry' header | `.dmn-form h1`
Input labels | `.dmn-form label`
Form components | `.dmn-form input, .dmn-form select`
Booking type section | `.dmn-form .dmn-type-container`
Number of people section | `.dmn-form .dmn-num-people-container`
Date section | `.dmn-form .dmn-date-container`
Time section | `.dmn-form .dmn-time-container`
Duration section | `.dmn-form .dmn-duration-container` | Class `disabled` is added if duration is not required
Submit button | `.dmn-form button.submit`

### Example
```css
.dmn-form {
  background-color: #000;
}

.dmn-form input {
  border: 1px solid #fff;
}

.dmn-form button.submit {
  background-image: url('https://example.com/path/to/image.png');
}
```


## Form API
After the form has been written to the web page, you can interact with it using JavaScript. 

- Use `dmn.val()` to set the value of one of the fields on the form
- Use `dmn.hideInput()` to hide a field on the form
- Use `dmn.showInput()` to show a field on the form

Field | Description
----- | -----
venue_id | The ID of the venue (only if multiple venues on the form)
type | The name of the booking type to be selected
num_people | The number of guests in the booking
date | The date of the booking, as a JavaScript date object
time | The time of the booking, in 24-hour format HH:MM
duration | The duration of the booking, as a decimal number of hours, eg 1.5

Examples:
```javascript
DMN.val('venue_id', 'YOUR_VENUE');  // Set the currently selected venue
DMN.val('type', 'Dinner').hideInput('type');  // Set the booking type to 'Dinner' and hide the booking type field
```