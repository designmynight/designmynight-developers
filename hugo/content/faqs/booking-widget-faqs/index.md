# Adding your Collins booking widget to your website

## How to add the widget to Wordpress
Here’s a guide to help you [Add the booking widget to your Wordpress site](https://en.support.wordpress.com/widgets/custom-html-widget/)

**_Please note:_** you will need to upgrade to the Business Plan to be able to add the widget code to your site. 

## How to add the widget to Squarespace
Here’s a guide to help you [Add the booking widget to your Squarespace site](https://support.squarespace.com/hc/en-us/articles/205815928-Adding-custom-HTML-CSS-and-JavaScript)

**_Please note:_** you need to add a **Code Block**, not an Embed Block.

## How to add the widget to Wix
Here's a guide to help you [Add the booking widget to your Wix site](https://support.wix.com/en/article/adding-html-code)

## How to add the widget to Facebook
Here's a guide to help you [Add the booking widget to your Facebook page](https://collins.uservoice.com/knowledgebase/articles/478066-facebook-widget-set-up)

## Customising your Collins booking widget

Since the booking form is inserted into your own website, it will automatically pick up any applicable CSS, so it can completely match the look and feel of your website.

You can customise the look of your widget. To help you with customising your widget, here's a useful guide to help you [override the CSS](http://developers.designmynight.com/booking-widget/#styling-the-form). You can also have a look through these [examples](https://docs.google.com/document/d/1VJ4sdW05MMdq1vGnEkFq2A2HQ2LjKzl3315Pu1hLBmI/edit) of what other venues have done (to get an idea of what can be done). 

## How to customise your widget on Squarespace
In the Code Block that you added to create your widget, you can add in specific rules to the CSS that applies to the booking form. 

To add CSS code, you will have to surround your CSS code with ```<style></style>``` tags.

## How to customise the wording of the "Make an Enquiry" header and "Enquire Now" button

As standard, the widget comes with "Make an Enquiry" as the header and "Enquire Now" on the button. Your web developer will be able to amend the wording of these should you wish (for example, if all your booking types are set to auto-confirm, you may wish to have the button say "Book Now"). 

Your web developer will need to create images that you would like the replace the Header/Button with. You web developer will then need to override the CSS of the specific [form element](http://developers.designmynight.com/booking-widget/#styling-the-form). 

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

If you would like your booking widget to display in multiple languages , you are able to set this by doing the following:

1. Log onto your [Collins admin](https://admin.designmynight.com/collins)
2. Go to Settings > Venues > Select your venue > Translation
3. Tick the additional language(s) that you would like your widget to display in
4. When you tick an additional language, you will have the option to type your own translations for each section (eg Booking Type Names, Automated Emails, Offers etc.)
5. Click SAVE

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

**_Please note:_** Your web devolper may need to edit the size of the widget to accommodate the change in the language. Guide to help them [customise the size of the widget](http://developers.designmynight.com/booking-widget/#styling-the-form).    

## Booking Widget FAQs

**1. Is it possible to add Placeholder Text in the fields?**

You wouldn't be able to add placeholder text through our JS API. However, you could change it using a library like jquery or vanilla JS to add a placeholder to the element. 

Alternatively, you could set the background image of an input with CSS - guide here to help you [style the booking widget](http://developers.designmynight.com/booking-widget/#styling-the-form). 

**2. My booking widget looks weird and some of the fields are not showing correctly!**

If your booking widget is not appearing as expected, we recommend that you test your widget codes on [Plunker](https://plnkr.co/edit/?p=catalogue) (this is a website to test codes). To test your widget code:

1. Copy your widget code (this can be found in your [Collins admin settings](https://collins.uservoice.com/knowledgebase/articles/893919-widget-codes))
1. Go to [Plunker](https://plnkr.co/edit/?p=catalogue)
1. Paste your widget code
1. Click Run

You should then see the widget on the right side of the screen which you can make a test booking for/play around with. 

If the widget is appearing and working correctly on Plunker, this means that the issue is isolated to your own website. This means that the issue will be caused by conflicting styles on your website and your web developer will need to take a closer look at your CSS.

**3. The dates on my calendar are not showing correctly!**

If you have tested the widget code on [Plunker](https://plnkr.co/edit/?p=catalogue) and the issue is isolated to your website, your web developer will have to look at the CSS styling on your page which is interfering with the code. 

**4. The drop down options on my widget fields are only visible when you hover over them. How do I  get all available drop down options to be visible for the customer to select?**

If the colour of the **Form Components** is too similar a colour to the **Input Labels**, it can make it difficult for customers to view and select options. 

Your web developer should amend the CSS to tweak the colours used in your [Form Components and Input Labels](http://developers.designmynight.com/booking-widget/#styling-the-form). 
