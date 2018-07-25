# Tracking 

There are 4 ways you can look at tracking:

## Google/Facebook Tracking

Putting Google/Facebook code on the first enquire button in the CSS (this isn't tracking to completion but the drop off rate is about 10% on average from loading up the iframe so a quick and easy way to get a pretty accurate reading). Useful guide for developers on [Adding Google Analytics Tracking Code to the booking widget](https://collins.uservoice.com/knowledgebase/articles/863856-adding-google-analytics-tracking-code-to-the-booki). 

## Custom Source for multiple booking widgets

If you have multiple bookings widgets on your website, you can track how many bookings or enquiries you are receiving from a particular booking form. To do this, your web developer will need to add the following to the widget script and in Collins, track how many bookings you're getting from this specific form. 

```
<script>
DMN.addCustomData('source', 'XXXXX');
</script>
```

The X's will be replaced with the custom source you want to display (for example, `Christmas`) within your Collins admin. 

Any bookings/enquiries made on this form will have the custom source in the 'Additional Details' section and will be tagged with this source in your Enquiries page download. 

This is especially useful for Christmas pages or any major advert campaigns with the booking form included.

## Custom return URL

You can create a custom return URL for users to be directed to when they complete their booking. That way you'd be responsible for displaying all the info to the users and having your own confirmation page not the DMN one we currently have, but you would have control over your own analytics etc completely.

To do this you need to create the return URL on the  venue site then set it using custom script after your partner form:

```
<script>
  DMN.val('return_url', 'https://www.your-return-url.com/booking-complete');
  DMN.val('return_method', 'post');
</script> 
```

**_Please note:_** It will be up to your web developer to select which booking details are displayed on the custom return page. The booking details will be returned to you in our default format, if you want to reformat any details (eg the way that the date displays), this will be up to your web developer to format. Please ensure that your webserver and application can accept POST requests from the designmynight.com domain, including any subdomains.

##  Using our API _(big tech build, we do not recommend)_

Use our API to build out your own checkout which you can track completely as you want then you can do whatever you want - big tech build - [developers.designmynight.com](http://developers.designmynight.com/)



## Tracking FAQs

**1. All the details captured from the user are returned in the query string within my return URL. Is is possible to stop this?**

Yes. Add the following code underneath your existing `return_url`: 

```
DMN.val('return_method', 'post');
```

**2. What information should we include in the custom return URL?**

All customers will automatically receive an Enquiry Received/Booking Confirmation email once they have completed their enquiry/booking (and reach your custom return URL page). As these emails will include a full summary of their enquiry/bookings (including their DMN Booking refence), it's not necessary to show these details on your return URL. We would recommend to have a generic 'Thanks for enquiry/booking' message. 

This table describes which [enquiry/booking details will be sent with the redirect to the return URL](http://developers.designmynight.com/collins/booking-widget/#customising-your-collins-booking-widget)
 

**3. How do we get the booking reference number on our custom return URL page?**

It will be fed back through the url. This script will parse the url and get the booking parameters out.
 
```
<script>
  var queryParams = document.location.search.substr(1).split('&');
  var paramsEl = document.getElementById('all-params');
 
for ( var i = 0; i < queryParams.length; i++ ){
  var currentParam = queryParams[i];
  var paramParts = currentParam.split('=');
 
  paramsEl.innerHTML += '<li>' + paramParts[0] + ': ' + paramParts[1];
}
</script>
  <div id="all-params">
```

**4. Would it be possible to direct customers to different URLs depending on whether their booking in confirmed or comes into Collins as an enquiry?**

The booking info will be passed back in the URL.

When using the POST return method, you need to ensure that your webserver and application can accept POST requests from the designmynight.com domain, including any subdomain. 

You will need to pick the `status` out of url if using a GET return method, or `status` out of the POST body.

Enquiries will have a status of `in_progress` and a confirmed booking will have a status of `complete`. 

It will be up to your web developer to handle this logic on the return url to determine what information to display e.g "Thank you for enquiry" or "Thank you for booking".



