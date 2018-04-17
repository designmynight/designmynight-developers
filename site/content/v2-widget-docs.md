# Booking Widget Documentation

# Introduction

The `BookingFormHelper` class is attached to `window.DMN`, and provides you with methods for interacting with any widgets on a page independently.

`window.DMN.BookingFormHelper.widgets` will return an array of `Widget` objects - one for each widget placed on the page.

The `Widget` object contains the methods listed below which can be used for interacting with a single widget.

When only one widget is used on a page, you can easily get the `Widget` object with the following code:

```javascript
var widget = window.DMN.BookingFormHelper.widgets[0];
```

# Reference Docs

## Setting and Getting Booking Details

The following methods can be used to set the booking details, or see what booking details have been selected by the user before they submit the booking. Setting booking details using these methods will **not** advance the widget to the next stage - see the [Controlling the active stage](#controlling-the-active-stage) for instructions on how to advance to other stages.

### `getSelectableVenueIds(): string[]`

Returns an array of venue IDs which the user can choose from. These venues would have been specified when the widget was installed.

### `getSelectableBookingTypeIds(): string[]`

Returns an array of booking type IDs for the selected venue. A venue must be selected (`setVenueById()`) before running this.

### `setVenueById(venueId)`

Sets the venue which the booking will be made for. The venue ID is a required parameter, and must be one of the IDs specified when the widget was installed. You can use the [`getSelectableVenueIds()`](#getSelectableVenueIds()) method to get an array of venue IDs you can use.

### `setNumberOfGuests(number)`

Sets the number of guests for the booking. The user will still have the ability to modify this. The parameter is required and should be an integer.

### `setDate(date)`

Sets the date the booking will be made for. The user will still have the ability to modify this. The parameter is required, and should be a javascript `Date` object. Only the date segment is used - the time part will be disregarded.

### `setTypeById(typeId)`

Sets the booking type. The user will still have the ability to modify this. The parameter is required, and must be one of the type IDs for the selected venue. An array of selectable type IDs can be found by using `getSelectableBookingTypeIds()`

## Setting the user details

Setting the user details programatically means that their details will already be prefilled by the time they get to the final Details stage.

### `setEmailAddress (emailAddress)`

Sets the email address of the user. The parameter is required and should be a string.

### `setFirstName (firstName)`

Sets the first name of the user. The parameter is required and should be a string.

### `setLastName (lastName)`

Sets the last name of the user. The parameter is required and should be a string.

### `setDateOfBirth (date, month, year)`

Sets the date of birth of the user. This information will only be sent to Collins if the *Birthday* field is not set as *hidden* in Collins. All three parameters are required, and they should all be integers. Here are some examples of the expected format:

```javascript
widget.setDateOfBirth(13, 1, 1995); // 13th January 1995
widget.setDateOfBirth(1, 12, 1990); // 1st December 1990
widget.setDateOfBirth(13, 4, 2000); // 13th April 2000
```

### `setMobileNumber (mobileNumber)`

Sets the user's mobile number. The parameter is required and should be a string.


## Controlling the active stage

The following methods can be used to control which stage the widget is currently on. By default, the widget will launch:

- The *Venue Selection* stage if there are more than 1 venue to select from
- --- **OR** ---
- The *Date/Number of Guests* stage if there is only 1 venue to select from

### `goToVenueStage()`

Jumps to the Venue selection stage.

### `goToDateAndGuestSelectionStage()`

Jumps to the Date/Number of Guests stage.

### `goToTypeSelectionStage()`

Jumps to the Booking Type selection stage.

### `goToTimeSelectionStage()`

Jumps to the Time selection stage.

### `goToDetailsStage()`

Jumps to the Details stage, where a user enters their information.

# Examples

## Pre-selecting booking information

### Valentines Day example

In this example, we're going to be placing the widget on a Valentines Day page. The widget will provide a convenient way for guests to make a booking for:

* *Cocktail Bar* venue (Venue ID: 123456)
* 2 people
* 14th February 2019

We'll use the Javascript API to preset this information, meaning all the user needs to specify is their desired booking type, preferred time and their contact details. When the page loads, the widget will be displaying the Booking Type selection stage.

```javascript
const helper = window.BookingFormHelper;
const widgets = helper.widgets; // [Widget]

// We'll assume there's only one widget on the page for this example.
const widget = widgets[0];

const desiredVenueId = '123456';
const desiredNumGuests = 6;
const desiredDate = new Date('2019-02-14T00:00:00');

widget.setVenueById(desiredVenueId)
    .setNumberOfGuests(desiredNumGuests)
    .setDate(desiredDate)
    .goToTypeSelectionStage();
```
