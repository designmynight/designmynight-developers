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

1. Add a background image. As this will repeat as you scroll down the email (depending on the length of the email content), we would recommend that you use a repeatable and symmetrical background image to ensure that the background is fully covered. Alternatively, you can set a background colour.

2. Add your social media handle details and venue details (eg venue address) in the footer of the email.

Here are some great examples of customised emails that our partners have created to get an idea:

[Alexander's](https://static.designmynight.com/uploads/2017/11/Alexanders-Example-optimised.png)

[Casita Andina](https://static.designmynight.com/uploads/2017/11/Andina-Example-optimised.png)

## Non-customisable Content

### Non-customisable Text

All outbound Collins emails will include non-customisable text which reflects the type of email and the relevant booking detail. This is to ensure that customers have all required details of their booking.

For example, the **Enquiry Recieved** email will always include the following copy:

![Enquiry Received](https://static.designmynight.com/uploads/2018/08/Capture-2.png)

Through the HTML templates, your web developers can style the text (eg font, colour) but cannot override the text itself. 

If you would like to add any additional information to your outbound emails, we would recommend that you set this within Collins (as opposed to in the HTML email templates).  

This way you will be able to easily amend the copy in your Collins admin at any time (as opposed to having to send over updated HTML for our tech team to update - which would have to be scheduled against our tech roadmap).

Guides to help you add personalised messages to your emails within Collins:
                    
[Automated Emails](https://collins.uservoice.com/knowledgebase/articles/1833961-emails-texts-automated-email-template-examples)

[Setting Email Templates](https://collins.uservoice.com/knowledgebase/articles/478032-emails-texts-adding-a-new-email-template-messa)

## Adding dynamic content tags to the emails

Within your Collins emails, you will be able to include dynamic content tags. The following tags are currently supported:

* {{first_name}}
* {{last_name}}
* {{full_name}}
* {{phone}}
* {{email}}
* {{company}}
* {{venue}}
* {{type}}
* {{area}}
* {{num_people}}
* {{date}}
* {{time}}
* {{until}}
* {{booking_ref}}
* {{min_spend}}

We would recommend that you add the dynamic tags within Collins (as opposed to in the HTML email templates).

This way you will be able to easily amend the copy in your Collins admin at any time (as opposed to having to send over updated HTML for our tech team to update - which would have to be scheduled against our tech roadmap).

Guides to help you add personalised messages to your emails within Collins:
                    
[Automated Emails](https://collins.uservoice.com/knowledgebase/articles/1833961-emails-texts-automated-email-template-examples)

[Setting Email Templates](https://collins.uservoice.com/knowledgebase/articles/478032-emails-texts-adding-a-new-email-template-messa)
### Other non-customisable Content

Currently it's not possible to amend the following:

* Colour and font of the payment/card auth/pre-orders request buttons

![Payment request button](https://static.designmynight.com/uploads/2018/08/Pay-button.png)

* Colour and visibility of the purple booking Confirmation tick icon

![Confirmation Tick](https://static.designmynight.com/uploads/2018/08/tick.png)

* Colour and visibility of the **location** and **add to calendar** icons. 

![Location and add to calendar icons](https://static.designmynight.com/uploads/2018/08/icons.png)

* Colour of the **cancellation** and **change your booking** icons. 

![Cancellation and change booking icons](https://static.designmynight.com/uploads/2018/08/change-booking.png)

**_Please note_** in your Collins settings, you have the option to [disable the 'cancel booking' button](https://collins.uservoice.com/knowledgebase/articles/1117015-emails-texts-disable-the-cancel-booking-butt) and [limit the changes the customer can make to their booking](https://collins.uservoice.com/knowledgebase/articles/886590-booking-types-how-to-limit-the-changes-customers).

* You are unable to add an option for customers to unsubscribe from the emails as customers are unable to unsubscribe from transactional emails (so that we can ensure that they receive relevant updates about their bookings). 

* You are unable to add the option to ‘view in a browser’ as we do not have that option with these transactional emails. 

* You are unable to amend the format of the date showing in the booking summary in the emails eg from 9 May 2017 to display as Tuesday 9 May 2017

## Customising Email Templates FAQs

**1. Are there any required dimensions for the email templates?**

There isn't a fixed width for our email template but the main content of the majority of templates is 600px wide. The majority of email clients do not support CSS media queries, so we recommend sticking to a 600px width for content in order for the emails to look good across all devices. Sticking to 600px will also prevent any clipping on emails containing a lot of content.

The height of the email varies depending on the content. If using a custom background, please bare this in mind. We recommend using repeatable and symmetrical background images to ensure the background is covered.

**2. Can we customise the fonts used in the emails?**

Unfortunately, the majority of web email clients don't support rendering custom fonts. If you want to support the ones that do, you will need to ensure that you provide web safe fonts. 

Here are a couple of guides to help:

* [CSS support across different web email clients](https://www.campaignmonitor.com/css/text-fonts/font/)
* [Web Safe Fonts](https://websitesetup.org/web-safe-fonts-html-css/)

**3. We only want to customise our Booking Confirmation emails. Is it possible to upload a custom email template for one specific type of email and leave all other emails uncustomised?**

Unfortunately, it is not possible for us to upload custom templates just for specific email types. 

If you would like to customise your email templates, we will require templates for every type of email (Confirmation, Cancellation, Follow up, etc). 

If you only wish to customise a specific type of email (eg Confirmation), we recommend that you provide us with two HTML templates:

1. Template for Confirmation Email
2. A general template that we can upload to be used for all other emails from Collins

**4. We've got a booking type for Halloween. Would it be possible to add an email template specifically for this booking type (so we can make it themed!)?**

Unfortunately, we are currently only able to upload HTML templates **per email type** and not by booking type. 



