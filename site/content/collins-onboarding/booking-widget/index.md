# Adding your Collins booking widget to your website

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

## Customising your Collins booking widget

Since the booking form is inserted into your own website, it will automatically pick up any applicable CSS, so it can completely match the look and feel of your website.

You can customise the look of your widget. To help you with customising your widget, here's a useful guide to help you [override the CSS](http://developers.designmynight.com/widgets/booking-widget/#styling-the-form). You can also have a look through these [examples](https://docs.google.com/document/d/1VJ4sdW05MMdq1vGnEkFq2A2HQ2LjKzl3315Pu1hLBmI/edit) of what other venues have done (to get an idea of what can be done). 

## How to customise your widget on Squarespace
In the Code Block that you added to create your widget, you can add in specific rules to the CSS that applies to the booking form. 

To add CSS code, you will have to surround your CSS code with ```<style></style>``` tags.

## How to customise the wording of the "Make an Enquiry" header and "Enquire Now" button

As standard, the widget comes with "Make an Enquiry" as the header and "Enquire Now" on the button. Your web developer will be able to amend the wording of these should you wish (for example, if all your booking types are set to [auto-confirm only](https://collins.uservoice.com/knowledgebase/articles/973384-booking-types-setting-up-an-auto-confirm-only-bo), you may wish to have the button say "Book Now"). 

Your web developer will need to create images that you would like to replace the Header/Button with. Your web developer will then need to override the CSS of the specific [form element](http://developers.designmynight.com/widgets/booking-widget/#styling-the-form). 


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

Example of a partner with a French booking widget: [Waikiki](http://www.waikiki-courchevel.com/bookings/?lang=fr)

**_Please note:_** Your web developer may need to edit the size of the widget to accommodate the change in the language. Guide to help them [customise the size of the widget](http://developers.designmynight.com/widgets/booking-widget/#styling-the-form).    

## Multiple Booking Widgets
If you have added multiple Collins booking widgets to your website but are looking to target each specific form (for example so that you can use Google Analytics for both widgets).  

Forms are accessed by their ID, but there's currently no way to set the ID for a particular form. Instead, you'd need to retrieve the numerical ID from the form's ID attribute once it's been written to the page, using something like this, changing the `getElementById` part to something that identifies a container of the form you want to target:

```
var formId = document.getElementById('form-container').getElementsByClassName('dmn-form')[0].getAttribute('id').substr('dmn-form-'.length);
```

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

Alternatively, you could set the background image of an input with CSS - guide here to help you [style the booking widget](http://developers.designmynight.com/widgets/booking-widget/#styling-the-form). 

**2. The dates on my calendar are not showing correctly!**

If you have tested the widget code on [Plunker](https://plnkr.co/edit/?p=catalogue) and the issue is isolated to your website, your web developer will have to look at the CSS styling or Javascript on your page which is interfering with the code. 

**3. The drop down options on my widget fields are only visible when you hover over them. How do I  get all available drop down options to be visible for the customer to select?**

If the colour of the **Form Components** is too similar a colour to the **Input Labels**, it can make it difficult for customers to view and select options. 

Your web developer should amend the CSS to tweak the colours used in your [Form Components and Input Labels](http://developers.designmynight.com/widgets/booking-widget/#styling-the-form). 

**4. By default, the second iFrame is a pop up. Is it possible to direct to a booking page (which is not a pop up)?**

The modal styling can be customised with CSS. It will either open an iframe within a modal, or redirect to the booking page depending on available screen size. Your web developer will be able to customise the size to dictate what happens.

Here's an example of what the second iFrame could look like: [Alexander's](https://www.designmynight.com/book?venue_id=59157f51ff52d61204696b4c&venue_group=59157fe4ff52d613565b24aa&type=591ec9ca05b6e0052806695e&num_people=4&date=2017-8-17&time=09:00&duration=120&notes=&locale=en-GB&source=partner&stylesheet=alexanders)

**5. I've added the widget code to my site but when I click the 'Enquire Now' button, the second iFrame is hidden behind elements of my website. This is affecting customers' ability to complete their booking/enquiry. What could be causing this?**

If this is isolated to your own website, your web developer will have to look at the CSS styling or Javascript on your page which is interfering with the code. 

For example, specific elements of your website may have been set a very high `z-index` which is causing the elements to appear on top over everything else on the page (including the Collins second iFrame). 

