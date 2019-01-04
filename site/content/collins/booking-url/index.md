## Booking URL for a specific venue

If you are unable to add the Collins booking widget, it's possible for you to include a booking URL to your website instead. 

Here is an example of partners using a booking URL: [The Park Tavern](https://www.parktavernsw18.com/#reservations-section)

You can access the booking link for your venue within your Collins settings. Here's a guide to help you [access the booking link for a specific venue](https://collins.uservoice.com/knowledgebase/articles/1893409-booking-url-generator)

Please note that you will never be charged for covers booked through this link (the source will count as your own website).

## Fixing additional parameters on your Booking URL

Within Collins, you have the flexibility to fix specific parameters of your booking URL. 

This is particularly useful if you have lots of booking types set up and you want to direct your customers to book a specific booking type. For example, if you are sending out a newsletter for NYE and want to direct customers to a booking link that only displays your NYE booking type. 

You are able to fix as many of the following booking parameters on your booking URL:

* Booking Type
* Date 
* Start Time
* Duration
* Number of Guests

Guide to help you [fix additional parameters on your booking URL](https://collins.uservoice.com/knowledgebase/articles/1893409-booking-url-generator)

Note: it is **not** required to select any additional parameters. You can set multiple parameters at the same time. 

If you fix **all** the above parameters at the same time, you would effectively be filling all the required parameters on the form. As such customers would be directed straight to the next step of the booking process (and will not be prompted to select any booking parameters). 

Unlike with the [Collins booking widget](https://collins.uservoice.com/knowledgebase/articles/893919-widget-codes), the booking link does not currently support displaying multiple venues or fixing specific booking types on a single link.  

## Displaying your Booking URL in a different language

Collins gives you the option to display your booking widget in the following languages:

* Dutch
* French
* German
* Spanish

If you would like your booking url to display in a different language, you will have to first set up the [translations in your Collins settings](https://collins.uservoice.com/knowledgebase/articles/1829417-widget-setting-up-multi-lingual-widgets-transla)  

Once your Translation has been set up in Collins, you can also add an extra `locale` parameter to your booking url, setting the parameter to be the code for the language that you wish to add to your booking url.  

English `en-GB`

Dutch `nl-NL`

French `fr-FR`

German `de-DE`

Example: this booking url will display in German:

https://bookings.designmynight.com/book?venue_id=59d759f1cf53f24ceb4fbff0&venue_group=59ccf635f61ea13caf7de907&type=59d769e864511d794c3846d3&locale=de-DE&source=partner&fixed_type=1

**Please note:** you will only be able to display your booking url in **one** language.

## Customising the 2nd iFrame of the Collins booking URL
You are able to customise the 2nd iframe on your Collins booking URL to better suit the feel of your website. 

**To do this, you would need to:**

1. Tell us a URL of a stylesheet (that has to be on an HTTPS connection for us to load it) and what you want to use it for (eg app/website).

2. We add this CSS URL to our system for your venue group, with a name eg app

3. Then you should add `stylesheet=app` to the end of the URL you are going to send the user to.

4. When the URL loads, it will also load your CSS so you can override whatever is on the book page.

## Custom return URL

You can create a custom return URL for users to be directed to when they complete their booking. That way you'd be responsible for displaying all the info to the users and having your own confirmation page not the DMN one we currently have, but you would have control over your own analytics etc completely.

To do this, you need to create the return URL on the venue site then set it by adding the `return_url` parameter in your booking url. 

`return_url=https://www.your-return-url.com/booking-complete`

The booking info will be passed back in the URL.

When using the POST return method, you need to ensure that your webserver and application can accept POST requests from the designmynight.com domain, including any subdomain.

**_Please note:_** the booking details will automatically be included in the custom return URL. It will be up to your web developer to select which booking details are displayed on the custom return page. The booking details will be returned to you in our default format, if you want to reformat any details (eg the way that the date displays), this will be up to your web developer to format.
