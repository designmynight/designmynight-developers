# Collins Booking Widget

The booking widget is the easiest way to allow customers to book through your website. You simply add a small piece of JavaScript to your page and the booking form will display, allowing customers to select the details of the booking they wish to make.

With the booking widget, the customer journey will take place in two parts:

1. The customer selects the type of booking, date, number of guests, time and (optionally) a duration for the booking. This part of the process takes place within the form that is embedded in your site.

2. The customer clicks to continue, and will be shown a form with the following stage(s) of the booking, including collecting their contact details and optionally taking payment or allowing pre-orders to be added to the booking. This part of the process takes place on the DesignMyNight website, either
<br>a) **For small screens** (e.g mobile phones) - in a new tab, or
<br>b) **For regular screens** - inside a popup on your website. In this case the customer will not be aware that they are using a different website to complete their booking

## Accessing your Collins booking widget code

You can access your booking widget code in the venue settings of your Collins admin: 

1. Log onto your [Collins admin](https://admin.designmynight.com/collins)
2. Settings
3. Venues
4. Select your venue name
5. Booking Widget
6. Widget Code

The script tag will look like this:

```html
<script src="//partners.designmynight.com/pf/js?venue_id=YOUR_VENUE_ID"></script>
```

By default, the script in the grey box will be the booking widget for the specific venue. You just need to copy and paste this code and send over to your web developer. 

This section will also allow you to [generate booking widget codes for a specific booking type or to list multiple venues within your Venue group](https://collins.uservoice.com/knowledgebase/articles/893919-widget-codes). 

**Please note:** please only add the booking widget to your website once your Collins settings have been checked and your team has completed their training with a member of our Collins Customer Success Team. Otherwise you may start getting bookings/enquiries in that your team are unable to manage!

## Embedding the form

Once your team has received training and your settings have had a final health-check, you are ready to go-live and add the widget to your own website. 

You simply add the small piece of JavaScript to your page and the booking form will display, allowing customers to select the details of the booking they wish to make.

* **Please note:** your Collins booking widget will only ever display booking types that have availability for the customer to book. If none of your booking types currently have availability to book, your Collins booking widget will **not** appear. 

## How to add the widget to Wordpress
Here’s a guide to help you [Add the booking widget to your Wordpress site](https://en.support.wordpress.com/widgets/custom-html-widget/)

**_Please note:_** you will need to upgrade to the Business Plan to be able to add the widget code to your site. 

Examples of partners using a Wordpress site:

[Humble Grape Battersea](https://www.humblegrape.co.uk/wine-bar/battersea/)

[The Stable](https://stablepizza.com/book-a-table/)

## How to add the widget to Squarespace
Here’s a guide to help you [Add the booking widget to your Squarespace site](https://support.squarespace.com/hc/en-us/articles/205815928-Adding-custom-HTML-CSS-and-JavaScript)

**_Please note:_** you need to add a **Code Block**, not an Embed Block.

Examples of partners using a Squarespace site:

[Dokke](https://www.dokke.co.uk/private-bookings/)

[Little Nan's](https://www.littlenans.co.uk/make-a-booking/)

[Novi Cambridge](http://novicambridge.co.uk/reservations/)

## How to add the widget to Wix
Here's a guide to help you [Add the booking widget to your Wix site](https://support.wix.com/en/article/adding-html-code)

Example of partners using a Wix site:

[Duck Duck Goose](https://www.duckduckgooselondon.com/)

## How to add the widget to Facebook
Here's a guide to help you [Add the booking widget to your Facebook page](https://collins.uservoice.com/knowledgebase/articles/478066-facebook-widget-set-up)

Examples of partners using the Facebook Widget:

[Andina London](https://www.facebook.com/AndinaLondon/app/668769669862814/)

[The Gentlemen Baristas](https://www.facebook.com/thegentlemenbaristas/app/668769669862814/)

Please note that you will never be charged for covers booked this way (the source will count as your own website).

## How to add a 'Book Now' button to Facebook

Here's a guide to help you [add a 'Book Now' button to your Facebook page])https://www.facebook.com/help/977869848936797?helpref=related).

For the URL, you can either direct customers to the Reservations page on your own website or to your [Collins Booking URL](http://developers.designmynight.com/collins/booking-url/#booking-url-for-a-specific-venue).

Please note that you will never be charged for covers booked this way (the source will count as your own website).

## Multiple venues on a single form

You can take bookings for several venues on a single form by modifying the URL of the script tag above so that `venue_id` contains a comma-separated list of venue IDs. You can also choose this option when generating your form code in Collins.

If you have multiple venues on a single form, you can also choose to allow customers to choose a 'not sure' option by adding `&allow_any=true` to the end of the script URL.

## Restricting the form to a single booking type

You can restrict the booking form to only display specified booking types by adding a `type` parameter to the script URL:

- Set to **guestlist** to only show booking types that you have specified as guest list types
- Set to **private_hire** to only show booking types you have set up as private hire types
- Set to a single booking type ID ([available in Collins](https://collins.uservoice.com/knowledgebase/articles/893919-widget-codes)) to only show a single booking type
- Set to multiple booking type IDs separated with a comma to only show specified booking types

## Customising your Collins booking widget

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

You can also have a look through these [examples](https://docs.google.com/document/d/1VJ4sdW05MMdq1vGnEkFq2A2HQ2LjKzl3315Pu1hLBmI/edit) of what other venues have done (to get an idea of what can be done). 

## How to customise your widget on Squarespace
In the Code Block that you added to create your widget, you can add in specific rules to the CSS that applies to the booking form. 

To add CSS code, you will have to surround your CSS code with ```<style></style>``` tags.

## How to customise the wording of the "Make an Enquiry" header and "Enquire Now" button

As standard, the widget comes with "Make an Enquiry" as the header and "Enquire Now" on the button. Your web developer will be able to amend the wording of these should you wish (for example, if all your booking types are set to [auto-confirm only](https://collins.uservoice.com/knowledgebase/articles/973384-booking-types-setting-up-an-auto-confirm-only-bo), you may wish to have the button say "Book Now"). 

Your web developer will need to create images that you would like to replace the Header/Button with. Your web developer will then need to override the CSS of the specific [form element](http://developers.designmynight.com/collins/booking-widget/#customising-your-collins-booking-widget). 


If you are replacing the image of the header:

```
.dmn-form h1 {
  background-image: url('https://example.com/path/to/image.png');
}
```

If you are replacing the image of the button:

```
.dmn-form button.submit {
  background-image: url('https://example.com/path/to/image.png');
}
```

Here are some great examples of customised headers/buttons that our partners have created:

[Wahaca](http://www.wahaca.co.uk/locations/covent-garden/)

[Buffalo & Rye](http://www.buffaloandrye.co.uk/)

## Setting and Hiding Fields on your Widget

After the form has been written to the web page, you can interact with it using JavaScript. This can help you set, hide and show specific fields on the form

- Use `DMN.val()` to set the value of one of the fields on the form
- Use `DMN.hideInput()` to hide a field on the form
- Use `DMN.showInput()` to show a field on the form

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

**_Please note:_** You should only hide a field from your widget if it is not a **required** field needed for making an enquiry/booking. For example if you have removed the [duration field](https://collins.uservoice.com/knowledgebase/articles/803139-booking-types-how-do-i-remove-the-duration-field) in your Collins Settings, you will be able to remove the duration field from your widget. 

Otherwise, the customer will still  be prompted to fill in the field on the second iFrame before they are able to proceed with making their enquiry/booking. 

## Setting up Multilingual Widgets

Collins gives you the option to display your booking widget in the following additional languages:

* Dutch
* French
* German
* Spanish

If you would like your booking widget to display in multiple languages , you will have to first set up the [translations in your Collins settings](https://collins.uservoice.com/knowledgebase/articles/1829417-widget-setting-up-multi-lingual-widgets-transla)  

Once your Translation has been set up in Collins, your web developer will have to add an extra piece of code to your widget script.

After your Venue ID, please add `&locales=` followed by the code for the language that you wish to add to your widget. Add multiple languages separated by a comma.  

English `en-GB`

Dutch `nl-NL`

French `fr-FR`

German `de-DE`

Example: this widget will display both English and German options:

```
<script
 src="//partners.designmynight.com/pf/js?venue_id=59d759f1cf53f24ceb4fbff0&locales=en-GB,de-DE" id="dmn-js">
</script>
```

Example of a partner with a German booking widget: [Petit Chef Berlin](https://bookings.designmynight.com/book?venue_id=59d759f1cf53f24ceb4fbff0&venue_group=5744696d426ba10256c7a50e&type=&num_people=&date=&time=&duration=&notes=&locale=de-DE&format=modal&source=partner)

**_Please note:_** Your web developer may need to edit the size of the widget to accommodate the change in the language. Guide to help them [customise the size of the widget](http://developers.designmynight.com/collins/booking-widget/#customising-your-collins-booking-widget).    

## Multiple Booking Widgets
If you have added multiple Collins booking widgets to your website but are looking to target each specific form (for example so that you can use Google Analytics for both widgets).  

Forms are accessed by their ID, but there's currently no way to set the ID for a particular form. Instead, you'd need to retrieve the numerical ID from the form's ID attribute once it's been written to the page, using something like this, changing the `getElementById` part to something that identifies a container of the form you want to target:

```var formId = document.getElementById('form-container').getElementsByClassName('dmn-form')[0].getAttribute('id').substr('dmn-form-'.length);```

Once you have the ID you can then set values on that particular form by passing an object to `DMN.val()` like this:

```
DMN.val({field: 'time', value: '22:00', formId: formId})
```

## Troubleshooting

If your booking widget is not appearing as expected, we recommend that you test your widget codes on [Plunker](https://plnkr.co/edit/?p=catalogue) (this is a website to test codes). To test your widget code:

1. Copy your widget code (this can be found in your [Collins admin settings](https://collins.uservoice.com/knowledgebase/articles/893919-widget-codes))
1. Go to [Plunker](https://plnkr.co/edit/?p=catalogue)
1. Paste your widget code
1. Click Run

You should then see the widget on the right side of the screen which you can make a test booking for/play around with. 

If the widget is appearing and working correctly on Plunker, this means that the issue is isolated to your own website. This means that the issue will be caused by conflicting styles on your website and your web developer will need to take a closer look at your CSS or Javascript.

## Booking Widget FAQs

**1. Is it possible to add Placeholder Text in the fields?**

You wouldn't be able to add placeholder text through our JS API. However, you could change it using a library like jquery or vanilla JS to add a placeholder to the element. 

Alternatively, you could set the background image of an input with CSS - guide here to help you [style the booking widget](http://developers.designmynight.com/collins/booking-widget/#customising-your-collins-booking-widget). 

**2. The dates on my calendar are not showing correctly!**

If you have tested the widget code on [Plunker](https://plnkr.co/edit/?p=catalogue) and the issue is isolated to your website, your web developer will have to look at the CSS styling or Javascript on your page which is interfering with the code. 

**3. The drop down options on my widget fields are only visible when you hover over them. How do I  get all available drop down options to be visible for the customer to select?**

If the colour of the **Form Components** is too similar a colour to the **Input Labels**, it can make it difficult for customers to view and select options. 

Your web developer should amend the CSS to tweak the colours used in your [Form Components and Input Labels](http://developers.designmynight.com/collins/booking-widget/#customising-your-collins-booking-widget). 

**4. By default, the second iFrame is a pop up. Is it possible to direct to a booking page (which is not a pop up)?**

The modal styling can be customised with CSS. It will either open an iframe within a modal, or redirect to the booking page depending on available screen size. Your web developer will be able to customise the size to dictate what happens.

Here's an example of what the second iFrame could look like: [Alexander's](https://www.designmynight.com/book?venue_id=59157f51ff52d61204696b4c&venue_group=59157fe4ff52d613565b24aa&type=591ec9ca05b6e0052806695e&num_people=4&date=2017-8-17&time=09:00&duration=120&notes=&locale=en-GB&source=partner&stylesheet=alexanders)

**5. I've added the widget code to my site but when I click the 'Enquire Now' button, the second iFrame is hidden behind elements of my website. This is affecting customers' ability to complete their booking/enquiry. What could be causing this?**

If this is isolated to your own website, your web developer will have to look at the CSS styling or Javascript on your page which is interfering with the code. 

For example, specific elements of your website may have been set a very high `z-index` which is causing the elements to appear on top over everything else on the page (including the Collins second iFrame). 

**6. The page transitions of our website are done with ajax and we have noticed that the booking widget doesn't _always_ load. Is there any way we can make sure the widget consistently loads?**

This is typically a problem experienced on websites such as Wix and arises when content is loaded dynamically, rather than on the first page load. 

To overcome this, your web developer will need to pass in the url parameter `&elementId=booking-form`. 

Our javascript will then append the booking form HTML inside the given element id and your widget should then display correctly. 

**7. I've added the booking widget to my Facebook page but the booking types are not displaying. The booking types have availability to book so not sure what to do?**

It may be the case that the settings hadn't saved before the widget was added to your Facebook page. If you delete the booking widget from your Facebook and then try re-adding, your booking types should then display correctly.

**8. I've added the widget to the 'Reservations' page of my Squarespace site. When I go directly to the URL, the widget displays correctly. However, when I go to the Reservations page indirectly (eg clicking from my Home Page), the widget doesn't appear unless I refresh the page. What can I do?**

As this is something from the Squarespace side, it's always best to contact SquareSpace directly. 

One potential cause is if you have "Enable Ajax Loading" checked, as this feature can sometimes interfere with custom code. 

You can disable it following these steps:

1. Go to your Squarespace Home Menu
2. Click Design
3. click Stlye Editor 
4. Scroll down to the section SITE
5. Untick "Enable Ajax Loading" 
6. Click SAVE

**9. I'm trying to add the widget to my Facebook page but am getting a '_This page has not got permission to add a custom tab_' error meessage.**

Facebook only allows pages with 2000 or more fans (or pages managed by whitelisted apps) to have the ability to add the Facebook Page Tabs feature.

As you would be adding the Collins widget to a Facebook Page Tab, your Facebook page will need at least 2000 followers to have the ability to add the widget. 

More information [here](https://developers.facebook.com/docs/pages/tabs). 

**10. Will the second iframe always appear as a pop up?**

With the Collins widget, the second iframe (after you hit the initial 'Enquire Now' button on the widget) should always display as a pop up. However, if the user's screen is small, it may re-direct instead. 

**9. I've added the widget to my Facebook page. It's displaying correctly on desktop but I can't find the tab on mobile.** 

The Collins Facebook widget will be added to a Custom Tab on your Facebook page. The custom tabs are not currently supported on mobile. 

More information [here](https://developers.facebook.com/support/bugs/435173473172584/).

Alternatively you can add a 'Book Now' button to your Facebook page which will display on mobile. 




