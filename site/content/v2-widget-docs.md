# Booking Widget Documentation

## Introduction

The widget is applied to a page by including the `<script>` tag. This can be generated using the *Widget Wizard* within Collins, or you can manually piece the tag together.

Attributes on the `<script>` tag allow you to specify options at run time, but you can also use the Javascript API to set options and control state.

The stylesheet must be included as well as the script tag to style the widget. We recommend using our hosted version of the CSS.

```html
<link rel="stylesheet" href="//onsass.designmynight.com">
```

A widget will be rendered inside the parent element of where the `<script>` tag is located. The root element of the widget will have an ID of `dmn-partner-widget`.

You can insert as many widgets on one page as you need, and the `BookingFormHelper` class makes it easy to manage individual widgets.

## Attributes

The following attributes can be used to customise the functionality of the widget. When the value is omitted, it will be assumed `true`.

| Attribute Name     | Required | Description                                                  |
| ------------------ | -------- | ------------------------------------------------------------ |
| `src`              | Yes      | This must point to the JS source hosted on our CDN, `//widgets.designmynight.com/bookings-partner.min.js` |
| `venue`            | No       | A string containing the venue ID this widget will be used for. If you require multiple venues, you can comma separate the IDs |
| `affiliate-id`     | No       | The Affiliate ID which can be used to mark bookings in Collins as from the specified affiliate. |
| `dmn-booking-form` | Yes      | This tells us that the script tag is intended for use as a Booking Widget. The widget will not render without this attribute present. |
| `hide-offers`      | No       | Whether or not you would like to surface offers on this widget. Regardless of the state of this attribute, offers will always be selectable on the final stage. When present, the value must be `true` or `false` |
| `search-venues`    | No       | Whether or not you would like a search bar at the top of the Venue Selection stage, to allow users to quickly find the venue by name or address. When present, the value must be `true` or `false` |
| `ref`              | No       | This can be any string, and is used to identify the widget when retrieving it using the `getWidgetByRef()` method of the `BookingFormHelper` class. |

### Examples

#### Hiding offers

```html
<link rel="stylesheet" href="//onsass.designmynight.com">
<script
   src="//widgets.designmynight.com/bookings-partner.min.js"
   dmn-booking-form
   venue="1234567890"
   hide-offers>
</script>
```

#### Using multiple venues

```html
<link rel="stylesheet" href="//onsass.designmynight.com">
<script
    src="//widgets.designmynight.com/bookings-partner.min.js"
    dmn-booking-form
    venue="1234567890,55667722334,7593759211">
</script>
```

#### Referencing a widget

```html
<link rel="stylesheet" href="//onsass.designmynight.com">
<script
    src="//widgets.designmynight.com/bookings-partner.min.js"
    dmn-booking-form
    ref="foo">
</script>
```

## Appearance Customisation

The stylesheet URL accepts parameters to customise the appearance of the widget.

Parameter Name | Expected Value | Description
--- | --- | ---
`theme` | `default`, `dark` | When using a dark background colour, we recommend using the `dark` theme
`primary-color` | A hexadecimal colour code | Usage of your primary colour depends on your theme.
`background-color` | A hexadecimal colour code | The background colour of the widget
`body-text-color` | A hexadecimal colour code | The text colour used on the widget

### Examples

#### Dark grey background with a red primary colour

```html
<link rel="stylesheet" href="//onsass.designmynight.com?theme=dark&primary-color=#ff0000">
<script
   src="//widgets.designmynight.com/bookings-partner.min.js"
   dmn-booking-form
   venue="1234567890">
</script>
```

#### Light green background with dark green text

```html
<link rel="stylesheet" href="//onsass.designmynight.com?background-color=#c6fbcd&body-text-color=#316d35">
<script
   src="//widgets.designmynight.com/bookings-partner.min.js"
   dmn-booking-form
   venue="1234567890">
</script>
```

## Javascript API

This section details the public methods you can use to control widgets on a page. The reference documentation describes methods, their parameters and their return types in TypeScript syntax, however this is purely for descriptive purposes.

### `BookingFormHelper`

The `BookingFormHelper` is used to retrieve `Widget` objects from the page. It's stored on the `window`, in the `DMN` object. It can be accessed using `window.DMN.BookingFormHelper`.

#### `findBookingFormScriptTags(): Widget[]`

Traverses through the DOM to find `<script>` elements containing the `dmn-booking-form` attribute, and renders them using the options provided on the attribute. It then returns an array of `Widget`s that have been rendered. 

This method is run automatically when the page is loaded with at least one `dmn-booking-form` `<script>` element on the page.

#### `getWidgets(): Widget[]`

Returns an array of `Widget`s that have been rendered on this page.

#### `renderBookingWidget (tag: HTMLScriptElement): Widget | null`

Takes a `HTMLScriptElement` as a parameter, and renders that particular script tag into a `Widget`. Returns the `Widget`, or `null` if the widget could not be rendered.

> The `HTMLScriptElement` passed must contain the `dmn-booking-form` attribute to render.

#### `getWidgetByRef (ref: string): Widget | null`

Takes a `string` as a parameter. If a rendered `Widget` containing the corrosponding `ref` is found on the page, this will be returned. Otherwise, `null` is returned.

#### `isValidTag (tag: HTMLScriptElement): boolean`

Determines if the given `HTMLScriptElement` contains all the required attributes and is suitable for rendering.

#### `isTagRendered (tag: HTMLScriptElement): boolean`

Determines if the given `HTMLScriptElement` tag has been rendered into a widget or not.

### `Widget`

Each rendered widget is represented as a `Widget`, which contains methods for controlling its state and functionality. 

#### `setSelectableVenuesById (venueIds: string[]): Widget`

Sets the venues which a user can select from. An array of venue IDs strings must be passed in. This is an alternative to specifying the `venue` attribute on the `<script>` tag.

#### `showOffers (): Widget`

Shows available offers on the widget. This includes a summary of all available offers at the top, as well as an offer icon next to booking types and times where they are eligible. The default behaviour is for offers to be shown.

#### `hideOffers (): Widget`

Hides available offers on the widget. Eligible offers will still be selectable by the user from the final details stage. This is an alternative to setting the `hide-offers` attribute on the `<script>` tag.

#### `showVenueSearch (): Widget`

Shows the venue search bar on the Venue Selection stage, to allow users to filter selectable venues by name or address. This is an alternative to setting the `search-venues` attribute on the `<script>` tag.

#### `hideVenueSearch (): Widget`

Hides the venue search bar on the Venue Selection stage. This is the default behaviour.

#### `getSelectableVenues (): Venue[]`

Returns an array of `Venue`s which the user can select from. These venues would have been specified from the `venue` attribute on the script tag, or from `setSelectableVenuesById()`.

#### `setVenue (venue: Venue): Widget`

Sets the venue which this booking will be made for. The user will still have the ability to modify this. The parameter must be a `Venue` object which can be retrieved using the `getSelectableVenues()` method.

#### `setVenueById (venueId: string): Widget`

Similar to the `setVenue()` method, this sets the venue which this booking will be made for, however the parameter must be the ID of the desired venue. The user will still have the ability to modify this.

#### `setNumberOfGuests (guests: Number): Widget`

Sets the number of guests which this booking will be made for. The user will still have the ability to modify this. The parameter must be a `Number`.

#### `setDate (date: Date): Widget`

Sets the date the booking will be made for. The user will still have the ability to modify this. The parameter must be a Javascript `Date` object. Only the date segment is used - the time part will be disregarded.

#### `getSelectableTypes (): BookingType[]`

Returns an array of `BookingType`s which the user can select from. This method will only return `BookingType`s when a `Venue`, Date and number of guests have been set.

#### `setType (type: BookingType): Widget`

Sets the booking type which this booking will be made for. The user will still have the ability to modify this. The parameter must be a `BookingType` object which can be retrieved using the `getSelectableTypes()` method. This method will only set the type when a `Venue`, Date and number of guests have been set.

#### `setTypeById (typeId: string): Widget`

Similar to the `setType()` method, this sets the booking type which this booking will be made for, however the parameter must be the ID of the desired booking type. The user will still have the ability to modify this. This method will only set the type when a `Venue`, Date and number of guests have been set.

#### `setEmailAddress (emailAddress: string): Widget`

Sets the email address of the user, so it is prefilled when the user reaches the Details stage. The user will still have the ability to modify this. The parameter must be a string.

#### `setFirstName (firstName)`

Sets the first name of the user, so it is prefilled when the user reaches the Details stage. The user will still have the ability to modify this. The parameter must be a string.

#### `setLastName (lastName)`

Sets the last name of the user, so it is prefilled when the user reaches the Details stage. The user will still have the ability to modify this. The parameter must be a string.

#### `setDateOfBirth (date: Number, month: Number, year: Number)`

Sets the date of birth of the user. This information will only be sent to Collins if the *Birthday* field is not set as *hidden* in Collins. All parameter must be `Number`s. Here are some examples of the expected format:

```javascript
widget.setDateOfBirth(13, 1, 1995); // 13th January 1995
widget.setDateOfBirth(1, 12, 1990); // 1st December 1990
widget.setDateOfBirth(23, 4, 2000); // 23rd April 2000
```

#### `setMobileNumber (mobileNumber: string)`

Sets the user’s mobile number. The user will still have the ability to modify this. The parameter must be a string.

#### `setNotes (notes: string)`

Sets the booking notes. The user will still have the ability to modify this. The parameter must be a string.





