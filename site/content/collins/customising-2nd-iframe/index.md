## Customising the 2nd iFrame of your Collins booking widget
You are able to customise the 2nd iframe on your Collins booking widget to better suit the feel of your website. 

**To customise your 2nd iFrame, your web developer would need to:**

1. Tell us a URL of a stylesheet (that has to be on an HTTPS connection for us to load it) and what you want to use it for (eg app/website).

1. We add this CSS URL to our system for your venue group, with a name eg app

1. When you add the form to your page, you add some code to tell our page which CSS to load, eg

```
<script>
  DMN.val('stylesheet', 'app');  
</script>
```

When the booking form loads, it will also load your CSS so you can override whatever is on the book page.

Example of a partner with a customised second iframe: [Alexanders Skipton](https://alexanders-skipton.com/)

## Customising your Collins booking widget

If you want to further customise the appearance of the second iframe, you can add specific CSS rules that apply. The following table lists the main elements of the  second iframe and their CSS selectors:

Element | CSS Selector | Notes for Collins users
--------|------|-----
[Optional pre-orders message](https://static.designmynight.com/uploads/2018/10/preorder-payment-instruction-optimised.png) | `.preorder-payment-instructions`| If you have given customers the option to select a pre-order, but have not set any [minimum orders](https://collins.uservoice.com/knowledgebase/articles/1128079-booking-types-allowing-customers-to-pre-order-fr). They will see a message prompting them to select their pre-order (but it will not be compulsory to select a pre-order to proceed with your booking/enquiry). 
[Pre-Order Required Message](https://static.designmynight.com/uploads/2018/10/alert-preorder-payment-optimised.png) |`.alert-preorder-payment`| If you have set a [minimum order](https://collins.uservoice.com/knowledgebase/articles/1128079-booking-types-allowing-customers-to-pre-order-fr) at the point of booking. All messages prompting customers that they will **need** to make a pre-order will come under this CSS selector.
[Minimum Pre-Order Required Message](https://static.designmynight.com/uploads/2018/10/alert-preorder-requirements.png)|`.alert-preorder-requirements`| Alert message if the customer has not yet met your minimum order requirement 
[Next steps to your Pre-Order message](https://static.designmynight.com/uploads/2018/10/preorder-payment-advance-warning-optimised.png)|`.preorder-payment-advance-warning`| Once the customer has added their pre-orders, a message will show to indicate whether payment will be taken on the next screen
[Next](https://static.designmynight.com/uploads/2018/10/btn-submit-booking-next.png) and [Book Now](https://static.designmynight.com/uploads/2018/10/btn-submit-booking.png) Buttons|`.btn-submit-booking`|
[Cross sell message](https://static.designmynight.com/uploads/2018/10/alert-alternative-availability-optimised.png)|`.alert-alternative-availability`| If you have set up [cross sell](https://collins.uservoice.com/knowledgebase/articles/478043-booking-types-cross-sell-your-venues-to-the-cust) and your venue is full at the requested time, customers will be suggested your sister sites. 
[Add Dietary Requirements button](https://static.designmynight.com/uploads/2018/10/btn-add-diatary-requirements.png) |`.btn-add-diatary-requirements`|
[Order Summary](https://static.designmynight.com/uploads/2018/10/Order-Summary.png) |`.order-summary`|
[Pre-Order Header](https://static.designmynight.com/uploads/2018/10/preorder-menus-h2-optimised.png)|`.preorder-menus h2`|

## Customising 2nd iFrame FAQs

**1. When scrolling on a different device/screen size, the 2nd iFrame isn’t fully showing?**

The standard 2nd iFrame will fully show on all devices and screen sizes.

If your 2nd iFrame is not fully showing, it’s likely that you have a CSS style on your own website which is overwriting the height of the iFrame.

Your web developer will have to look at the CSS that has been added to the customised 2nd iFrame. 

**2. When customising our second iFrame, which fields are we able to hide?**

You are able to remove only the fields that are **not** required to complete the enquiry. 

For example, you will be able to hide the birthday field as long as it has not been made a [mandatory field in your Collins settings](https://collins.uservoice.com/knowledgebase/articles/1112770-booking-types-making-the-birthday-field-mandator).

You are also able to remove both marketing permission opt-ins (for your venue and DesignMyNight.com).

To be able to hide these in your custom iFrames, your web developer will have to override the styling on the page. 

**3 We have multiple venues in our venue group. Are we able to load style sheets for each individual venue within the group?**

We can set up multiple style sheets eg we could name them 'app' and 'website'. Your code will just specify the stylesheet you want at the time eg: 

```
<script>
  DMN.val('stylesheet', 'app');
  </script>
  ```

and

```
<script>
  DMN.val('stylesheet', 'website');
  </script>
  ```




