# Customising your 2nd iFrame of the Collins booking widget
You are able to customise the 2nd iframe on your Collins booking widget to better suit the feel of your website. 

## To do this, you would need to:

1. Tell us a URL of a stylesheet (that has to be on an HTTPS connection for us to load it) and what you want to use it for (eg app/website).

2. We add this CSS URL to our system for your venue group, with a name eg app

3. When you add the form to your page, you add some code to tell our page which CSS to load, eg

`<script>
DMN.val('stylesheet', 'app');  
</script>`
  
4. When the booking form loads, it will also load your CSS so you can override whatever is on the book page.

# Customising 2nd iFrame FAQs

## When scrolling on a different device/screen size, the 2nd iFrame isn’t fully showing?
The standard 2nd iFrame will fully show on all devices and screen sizes.

If your 2nd iFrame is not fully showing, it’s likely that you have a CSS style on your own website which is overwriting the height of the iFrame.

Your web developer will have to look at the CSS that has been added to the customised 2nd iFrame. 

## When customising our second iFrame, which fields are we able to hide?
You are able to remove only the fields that are not required to complete the enquiry. 

For example, you will be able to hide the birthday field as long as it has not been made a [mandatory field in your Collins settings](https://collins.uservoice.com/knowledgebase/articles/1112770-booking-types-making-the-birthday-field-mandator).

You are also able to remove both marketing permission opt-ins (for your venue and DesignMyNight.com).

To be able to hide these in your custom iFrames, your web developer will have to override the styling on the page. 

## We have multiple venues in our venue group. Are we able to load style sheets for each individual venue within the group?

We can set up multiple style sheets. Your code will just specify the stylesheet you want at the time eg: 

`<script>  DMN.val('stylesheet', 'app');  </script>`

and

`<script>  DMN.val('stylesheet', 'website');  </script>`





