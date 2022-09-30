## Booking URL for a specific venue

If you are unable to add the Collins booking widget, it's possible for you to include a booking URL to your website instead. 

Here is an example of partners using a booking URL: [The Park Tavern](https://www.parktavernsw18.com/book/)

To create a booking URL for your venue, you will need to use a URL of the following form:

https://www.designmynight.com/book?venue_id=VENUEID&source=partner&format=modal

Where you have to replace 'VENUEID' with your [unique Collins Venue ID](http://developers.designmynight.com/faqs/booking-url/#how-to-find-your-collins-venue-id). 

## Booking URL for a specific booking type

If you are looking to create a booking link for a specific booking type (for example if you want to send a link out in a targetted mail out), you can create a URL of the following format: 

https://www.designmynight.com/book?venue_id=VENUEID&venue_group=VENUEGROUPID&type=BOOKINGTYPEID&source=partner&fixed_type=1

Where you have to replace [VENUEID](http://developers.designmynight.com/faqs/booking-url/#how-to-find-your-collins-venue-id), [VENUEGROUPID](http://developers.designmynight.com/faqs/booking-url/#how-to-find-your-collins-venue-group-id) and [BOOKINGTYPEID](http://developers.designmynight.com/faqs/booking-url/#how-to-find-the-booking-type-id) accordingly. 

**Example:**

https://www.designmynight.com/book?venue_id=552435790df6902b7256f237&venue_group=5524371d0df690ad7156f2ea&type=58be86d4c71620a90d97aba4&source=partner&fixed_type=1

## How to find your Collins Venue ID 

Your user account will require [Bookings Manager permissions](https://collins.uservoice.com/knowledgebase/articles/942757-user-permissions-explained-and-how-to-change-them). If you cannot see this option, please speak to your key user to review your user permissions.  

1. Log into your [Collins admin](https://admin.designmynight.com/collins)
2. Settings
3. Venues
4. Select your venue
5. Your Venue ID will be included at the ![end in the URL](https://static.designmynight.com/uploads/2017/12/Collins-Venue-ID1-optimised.png)

## How to find your Collins Venue Group ID

Your user account will require venue group level access. Please speak to your key user if you need updated user access. 

1. Log into your [Collins admin](https://admin.designmynight.com/collins)
2. Settings
3. Venue Group
4. Your Venue Group ID will be included at the ![end in the URL](https://static.designmynight.com/uploads/2017/12/Venue-Group-ID-optimised.png)

## How to find the Booking Type ID

1. Log into your [Collins admin](https://admin.designmynight.com/collins)
2. Settings
3. Venues
4. Select your venue
5. Booking Widget
6. Tick 'Limit to a single booking type'
7. Tick the specific booking type that you are looking for
8. The Booking ID will follow `type=` in your newly generated ![widget code](https://static.designmynight.com/uploads/2017/12/Booking-Type-ID-optimised.png)

## Fixing additional parameters on your Booking URL

If you want to fix any other parameters (for example if the booking type is for a one-off event and so you only wish to display the specific time and date), you can include the following parameters in your booking url, separated with `&`:

| Parameter | Comments|
|-----------|------|
|`date=`DATE | where DATE is to be given in the form YYYY-MM-DD eg 2016-03-12|
|`time=`STARTTIME | where STARTTIME is to be given in the 24-hour form HH:MM eg 15:00|
|`duration=`DURATION |where DURATION is to be given in terms of hours eg 2.5 (which would be 2 hours 30 mins)|
|`num_people`=NUMBEROFPEOPLE| input your number of guests  |

**Example:** A NYE Dinner booking type starting at 6pm:

https://www.designmynight.com/book?venue_id=552435790df6902b7256f237&venue_group=5524371d0df690ad7156f2ea&type=5a3cd86849def9264240cd17&date=2017-12-31&time=18:00&source=partner&fixed_type=1

**Please note:** you will be unable to fix **all** the above parameters at the same time. Otherwise, you would be effectively filling all the required parameters which would proceed to the next step of the booking process. 

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

https://www.designmynight.com/book?venue_id=59d759f1cf53f24ceb4fbff0&venue_group=59ccf635f61ea13caf7de907&type=59d769e864511d794c3846d3&locale=de-DE&source=partner&fixed_type=1

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

**_Please note:_** the booking details will automatically be included in the custom return URL. It will be up to your web developer to select which booking details are displayed on the custom return page. The booking details will be returned to you in our default format, if you want to reformat any details (eg the way that the date displays), this will be up to your web developer to format.

To recieve personal details about the customer you will need to configure your custom return url to recieve POST requests and update your booking url to include return method

`return_url=https://www.your-return-url.com/booking-complete&return_method=post`
