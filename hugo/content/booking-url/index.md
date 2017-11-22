# Booking URL for a specific venue

If you are unable to add the Collins booking widget, it's possible for you to include a booking URL to your website instead. 

https:\/\/www.designmynight.com\/book?venue_id=**VENUEID**&source=partner&format=modal

Your Account Manager will have given you the venue ID in your booking widget when you first joined Collins. Alternatively, you will be able to access your venue ID by doing the following in Collins

Settings > Venues > Select your venue > in the URL, your venue ID will be included in the URL:

https://admin.designmynight.com/collins/venue-rules/**552435790df6902b7256f237**

# Booking URL for a specific booking type

If you are looking to create a booking link for a specific booking type (for example if you want to send a link out in a targetted mail out), you can do so by doing the following:

https://www.designmynight.com/book?venue_id=VENUEID&venue_group=VENUEGROUP&type=BOOKINGTYPEID&source=partner&fixed_type=1

If you want to fix any other parameters (for example if this booking type runs only on a single time and date), you can by filling in the relevant details:

https://www.designmynight.com/book?venue_id=VENUEID&venue_group=VENUEGROUP&type=BOOKINGTYPEID&type_name=BOOKINGTYPEID&date=DATE&time=STARTTIME&duration=DURATION&source=partner

# Customising the 2nd iFrame of the Collins booking URL
You are able to customise the 2nd iframe on your Collins booking URL to better suit the feel of your website. 

## To do this, you would need to:

1. Tell us a URL of a stylesheet (that has to be on an HTTPS connection for us to load it) and what you want to use it for (eg app/website).

2. We add this CSS URL to our system for your venue group, with a name eg app

3. Then you should add `stylesheet=app` to the end of the URL you are going to send the user to.

4. When the URL loads, it will also load your CSS so you can override whatever is on the book page.
