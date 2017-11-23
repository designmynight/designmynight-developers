# Tracking 

There are 3 ways you can look at tracking:

**1. Google/Facebook:**

Putting Google/Facebook code on the first enquire button in the CSS (this isn't tracking to completion but the drop off rate is about 10% on average from loading up the iframe so a quick and easy way to get a pretty accurate reading). Useful guide for developers on [Adding Google Analytics Tracking Code to the booking widget](https://collins.uservoice.com/knowledgebase/articles/863856-adding-google-analytics-tracking-code-to-the-booki). 

**2. Custom return URL**

You can create a custom return URL for users to be directed to when they complete their booking. That way you'd be responsible for displaying all the info to the users and having your own confirmation page not the DMN one we currently have, but you would have control over your own analytics etc completely.

To do this you need to create the return URL on the  venue site then set it using custom script after your partner form:

```
<script>
  DMN.val('return_url', 'https://www.your-return-url.com/booking-complete');
</script> 
```

The booking info will be passed back in the URL.​

An example of a venue that has done this is Dirty Martini - [Dirty Martini Thank You](http://dirtymartini.uk.com/booking-thank-you/?dm_website_page=97&_id=589deca000d1e96b4f8b462f&auto_confirmed=false&created_by=568e86b3d1dd9afd2e8b45f0&created_date=2017-02-10T16%3A38%3A56&date=2017-04-26T00%3A00%3A00&email=chris%40designmynight.com&first_name=Chris&last_name=DMN%20TEST%20PLEASE%20DELETE&last_updated=2017-02-10T16%3A38%3A56&num_people=8&reference=DMN-13023321229&source=partner&source_details=%7B%22user_agent%22%3A%22Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F56.0.2924.87%20Safari%2F537.36%22%2C%22session_id%22%3A%22ovi0lni5384q5hi61pn3tha8m4%22%2C%22remote_ip%22%3A%2292.233.138.238%22%2C%22referrer%22%3A%22https%3A%2F%2Fwww.designmynight.com%2Fbook%3Fvenue_id%3D51f0ee830df690f05000092b%26venue_group%3D514ada610df690b6770000e2%26type%3D521613050df690aa60000fe7%26num_people%3D8%26date%3D2017-4-26%26time%3D17%3A00%26duration%3D60%26notes%3D%26locale%3Den-GB%26format%3Dmodal%26source%3Dpartner%26return_url%3Dhttp%3A%2F%2Fdirtymartini.uk.com%2Fbooking-thank-you%2F%3Fdm_website_page%3D97%22%7D&status=received&time=17%3A00&type=%7B%22guestlist%22%3Afalse%2C%22id%22%3A%22521613050df690aa60000fe7%22%2C%22name%22%3A%22Area%22%2C%22private_hire%22%3Afalse%7D&venue_id=51f0ee830df690f05000092b) 

**3. Using our API _(big tech build, we do not recommend)_** Use our API to build out your own checkout which you can track completely as you want then you can do whatever you want - big tech build - [developers.designmynight.com](developers.designmynight.com)

# Tracking FAQs

## All the details captured from the user are returned in the query string within my return URL. Is is possible to stop this?
Yes. Add the following code underneath your existing `return_url`: 

```
DMN.val('return_method', 'post');
```

## What information should we include in the custom return URL?

All customers will automatically receive an Enquiry Received/Booking Confirmation email once they have completed their enquiry/booking (and reach your custom return URL page). As these emails will include a full summary of their enquiry/bookings (including their DMN Booking refence), it's not necessary to show these details on your return URL. We would recommend to have a generic 'Thanks for enquiry/booking' message. 

This table describes which [enquiry/booking details will be sent with the redirect to the return URL](http://developers.designmynight.com/booking-api/#submitting-through-the-web)
 

## How do we get the booking reference number on our custom return URL page?

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



