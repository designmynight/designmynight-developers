# Customising your email templates

You can choose to have customised email templates. As part of customising your templates, you will be able to customise your header and footers. This is a great way to add your social media handles and icons, address, etc.

It’s worth mentioning that the booking summary and any automated copy that you have set up in Collins, will automatically fill the middle section of the email. This is the 'non-customisable data' of the HTML template. Your web developer will, however, be able to add CSS rules to customise the styling of the non-customisable content.

Here is a [basic HTML template](https://docs.google.com/document/d/1o5EMw0QcMXiaAvHjbTI11WAAwb1pydo0GbILGqbIpro/edit?usp=sharing) that you can work from when customising email templates. There are comments in the code to guide developers.

**For the best results, we would strongly recommend using the format provided in our template example.**

You'll need to provide us with these in full HTML for us to be able to upload them. 

We would recommend creating one general email template which can be used for all your outgoing emails from Collins.

It's worth noting that depending on your HTML code, the emails may look slightly different in different mail clients (Gmail, hotmail, etc). This is because there can be code in your HTML that is not supported by a specific client. It is important that you do cross email client checks with your email templates before you send them to us to upload. 

**_Please note:_** depending on our tech roadmap, it can take our tech team up to two weeks to upload your customised email templates.

## Examples of HTML templates
For the best results, we would recommend that you do the following: 

1. Add a background image. As this will repeat as you scroll down the email (depending on the length of the email content), we would recommend that you use a repeatable and symmetrical background image to ensure that the background is fully covered. 

2. Add your social media handle details and venue details (eg venue address) in the footer of the email.

Here are some great examples of customised emails that our partners have created to get an idea:

[Alexander's](https://static.designmynight.com/uploads/2017/11/Alexanders-Example-optimised.png)

[Casita Andina](https://static.designmynight.com/uploads/2017/11/Andina-Example-optimised.png)

## Customising Email Templates FAQs

**1. What can/can’t I change on my email templates?**

**You can change the following things by overriding the CSS:**

* Amend the colour of your background 
* Add a background images
* Add in hyperlinked images in your header and footer. This is particularly useful for adding in links to your social media accounts to the email footer. 

**You are currently unable to change/add the following:**

* Colour and font of the payment/card auth request buttons
* Colour/visibility of the purple booking Confirmation tick icon
* Colours/visibility of the location, cancellation, add to calendar, change your booking icons. 
* You are unable to add an option for customers to unsubscribe from the emails as customers are unable to unsubscribe from transactional emails (so that we can ensure that they receive relevant updates about their bookings). 
* You are unable to add the option to ‘view in a browser’ as we do not have that option with these transactional emails. 
* Wording of the ‘Thanks for booking and have a great time at VENUE’
* You are unable to amend the format of the date showing in the booking summary in the emails eg from 9 May 2017 to display as Tuesday 9 May 2017

**2. Are there any required dimensions for the email templates?**

There isn't a fixed width for our email template but the main content of the majority of templates is 600px wide. The majority of email clients do not support CSS media queries, so we recommend sticking to a 600px width for content in order for the emails to look good across all devices. Sticking to 600px will also prevent any clipping on emails containing a lot of content.

The height of the email varies depending on the content. If using a custom background, please bare this in mind. We recommend using repeatable and symmetrical background images to ensure the background is covered.

**3. Can we customise the fonts used in the emails?**

Unfortunately, the majority of web email clients don't support rendering custom fonts. If you want to support the ones that do, you will need to ensure that you provide web safe fonts. 

Here are a couple of guides to help:

* [CSS support across different web email clients](https://www.campaignmonitor.com/css/text-fonts/font/)
* [Web Safe Fonts](https://websitesetup.org/web-safe-fonts-html-css/)

**4. We only want to customise our Booking Confirmation emails. Is it possible to upload a custom email template for one specific type of email and leave all other emails uncustomised?**

Unfortunately, it is not possible for us to upload custom templates just for specific email types. 

If you would like to customise your email templates, we will require templates for every type of email (Confirmation, Cancellation, Follow up, etc). 

If you only wish to customise a specific type of email (eg Confirmation), we recommend that you provide us with two HTML templates:

1. Template for Confirmation Email
2. A general template that we can upload to be used for all other emails from Collins

