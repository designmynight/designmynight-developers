# Adding your Collins booking widget to your website

## How to add the widget to Wordpress?
Here’s a guide to help you [Add the booking widget to your Wordpress site](https://en.support.wordpress.com/widgets/custom-html-widget/)

**_Please note:_** you will need to upgrade to the Business Plan to be able to add the widget code to your site. 


## How to add the widget to Squarespace?
Here’s a guide to help you [Add the booking widget to your Squarespace site](https://support.squarespace.com/hc/en-us/articles/205815928-Adding-custom-HTML-CSS-and-JavaScript)

**_Please note:_** you need to add a **Code Block**, not an Embed Block.

# Customising your Collins booking widget

Since the booking form is inserted into your own website, it will automatically pick up any applicable CSS, so it can completely match the look and feel of your website.

You can customise the look of your widget. To help you with customising your widget, here's a useful guide to help you [override the CSS](http://developers.designmynight.com/booking-widget/#styling-the-form). You can also have a look through these [examples](https://docs.google.com/document/d/1VJ4sdW05MMdq1vGnEkFq2A2HQ2LjKzl3315Pu1hLBmI/edit) of what other venues have done (to get an idea of what can be done). 

## How to customise your widget on Squarespace
In the Code Block that you added to create your widget, you can add in specific rules to the CSS that applies to the booking form. 

To add CSS code, you will have to surround your CSS code with ```<style></style>``` tags.

# Booking Widget FAQs

## Is it possible to add Placeholder Text in the fields? 
You wouldn't be able to add placeholder text through our JS API. However, you could change it using a library like jquery or vanilla JS to add a placeholder to the element. 

Alternatively, you could set the background image of an input with CSS - guide here to help you [style the booking widget](http://developers.designmynight.com/booking-widget/#styling-the-form). 

## My booking widget looks weird and some of the fields are not showing correctly!
If your booking widget is not appearing as expected, we recommend that you test your widget codes on [Plunker](https://plnkr.co/edit/?p=catalogue) (this is a website to test codes). To test your widget code:

1. Copy your widget code (this can be found in your [Collins admin settings](https://collins.uservoice.com/knowledgebase/articles/893919-widget-codes))
1. Go to [Plunker](https://plnkr.co/edit/?p=catalogue)
1. Paste your widget code
1. Click Run

You should then see the widget on the right side of the screen which you can make a test booking for/play around with. 

If the widget is appearing and working correctly on Plunker, this means that the issue is isolated to your own website. This means that the issue will be caused by conflicting styles on your website and your web developer will need to take a closer look at your CSS.

## The dates on my calendar are not showing correctly!
If you have tested the widget code on [Plunker](https://plnkr.co/edit/?p=catalogue) and the issue is isolated to your website, your web developer will have to look at the CSS styling on your page which is interfering with the code. 