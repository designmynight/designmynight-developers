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


TODO:
- Setting vars (`DMN.val()`)
- Passing a redirect URL?