# Tracking on the Collins Booking Widget

There are 4 ways you can look at tracking on the widget:

## Google Tracking

You can add Google Analytics tracking to your Collins booking widget through your Collins admin settings.

Guide to help: [Collins Widget Wizard - Google Analytics](https://collins.uservoice.com/knowledgebase/articles/1915753-collins-widget-wizard-google-analytics)

## Setting the source for multiple booking widgets

If you have multiple bookings widgets on your website, you can track how many bookings or enquiries you are receiving from a particular booking form. To do this, your web developer will need to add the following to the widget script and in Collins, track how many bookings you're getting from this specific form. 

Guide to help: [Collins Widget Wizard - Custom Source](https://collins.uservoice.com/knowledgebase/articles/1915744-collins-widget-wizard-custom-source)

Any bookings/enquiries made on this form will automatically be assigned the respective [Collins Source](https://collins.uservoice.com/knowledgebase/articles/478053-within-a-booking-enquiry-tag-a-booking-with-a-so). 

These bookings will pull through on your [Collins Source Breakdown Report](https://collins.uservoice.com/knowledgebase/articles/1135057-reports-source-breakdown) and you will be able to [filter your enquiries](https://collins.uservoice.com/knowledgebase/articles/478049-enquiries-page-filtering-enquiries-bookings) by this source. 

This is especially useful for Christmas pages or any major advert campaigns where you are directing to a specific booking form.

## Custom return URL

You can create a custom return URL for users to be directed to when they complete their booking. You can apply your custom return URL to your Collins booking widget through your Collins admin settings.

This way you'd be responsible for displaying all the info to the users and having your own confirmation page not the DMN one we currently have. You will then have control to add your own Google Analytics* to track bookings. 

Guide to help: [Collins Widget Wizard - Custom Return URL](https://collins.uservoice.com/knowledgebase/articles/1915756-collins-widget-wizard-custom-return-url)


**_Please note:_** It will be up to your web developer to select which booking details are displayed on the custom return page. The booking details will be returned to you in our default format, if you want to reformat any details (eg the way that the date displays), this will be up to your web developer to format. Please ensure that your webserver and application can accept POST requests from the designmynight.com domain, including any subdomains.

***Google Analytics Notes:** You will need to have cross-domain tracking in place. This also includes making sure that the tags that are fired from your hostname also have cross-domain tracking in place. Part of setting up cross-domain tracking is to ensure that client's and your hostnames are added to the referral exclusion list.

Ideally, you also need to ensure that your Google Analytics is in a good shape overall - e.g. only use universal analytics pixels, there is no double-tagging, etc.

##  Using our API _(big tech build, we do not recommend)_

Use our API to build out your own checkout which you can track completely as you want then you can do whatever you want - big tech build - [developers.designmynight.com](http://developers.designmynight.com/)

## Tracking FAQs

**1. All the details captured from the user are returned in the query string within my return URL. Is is possible to stop this?**

Yes. Add the following code underneath your existing `return_url`: 

```
DMN.val('return_method', 'post');
```

Following GDPR, we have deprecated GET return URLs since they include customer's personal information in the URL, which is less safe than using a POST which does not include details in the URL. Additionally, we now require that all return URLs are hosted on a secure (HTTPS) URL. This ensures that customer data is encrypted in compliance with GDPR legislation.

**2. What information should we include in the custom return URL?**

All customers will automatically receive an Enquiry Received/Booking Confirmation email once they have completed their enquiry/booking (and reach your custom return URL page). As these emails will include a full summary of their enquiry/bookings (including their DMN Booking refence), it's not necessary to show these details on your return URL. We would recommend to have a generic 'Thanks for enquiry/booking' message. 

The following enquiry/booking details will be sent with the redirect to the return URL:

* First Name
* Last Name
* Email
* Number of People
* Time
* Date
* Duration
* DOB
* Phone

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
