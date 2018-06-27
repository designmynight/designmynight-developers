# Contact Us/General Enquiry Form
As well as a Collins booking widget, you can also personalise your own Contact Us/General Enquiry form which feeds into your Collins. 

Here's an example of a partner with a customised enquiry form: [No. 4 Clifton Village](https://www.no4cliftonvillage.co.uk/contact-us/)

Any customer responses to your custom enquiry fields will display in the **Enquiry Details** section of your Collins enquiry/booking.

**To create your own personalised Enquiry form:**

**1.** Create your own form display on your website. You and your web developer will be responsible for the look of your personalised form and which fields are included.

Here's an [example of a Basic Enquiry Form](https://docs.google.com/document/d/1syIG0kFEEzoD9FfDQkNHAp6wD5ZrNZhP4IW56Zkfyys/edit) that we recommend that your web developers use.

**2.** For any _standard_ Collins booking fields used in your form, please ask your web developer to post to these field names:

| Field Name | Field Name in Collins|Comments|
|-----------|------|------|
|`first_name`| First Name||
|`last_name` | Last Name||
|`email`| Email ||
|`phone`| Phone||
|`num_people`| Guests|
|`date`| Date| In the form YYYY-MM-DD|
|`time`| Time| In the form HH:mm|
|`duration`| Duration of booking||
|`dob`| Birthday||

**Example for web developer:** If you're adding a field on your form for customers to enter their first name, you can post to `name='first_name'`.

**Note to Collins users:** These standard booking fields should **not** be added as new enquiry fields (in Step 3). 

This will ensure that the customer response for these fields will populate the respective fields within the **Booking Details** section of your Collins enquiry.  

**3.** For any non-standard enquiry fields that you would like to use, you will have to add them to your Collins admin. This will create technical names that you can give to your web developer to map them in your web form.

**To add a new enquiry field within Collins:**

1. Log onto your [Collins admin](https://admin.designmynight.com/collins)
2. Go to Settings > Venue Group > Enquiries
3. Tick the box 'Enable Enquiries'
4. In Enquiy Fields section, click to 'Add a Field' 
5. You will then have to add the following details:

**Field Label** - _once you have added the Field Label, the **Field Name** will auto-populate._

**Field Type** - _select from the drop down the type of field (eg Free Text, Yes/No, Pick One etc)._

 6. Click **SAVE**

Once all the Enquiry Fields have been added, please give your web developer the **Field Names** and **Field Types** that you have set up. They will use this to map these custom enquiry fields in your web form.

If your web developer does not have access to your Collins admin, it's worth sending them a screenshot of your enquiry form settings (so they can clearly see all the details). 

**4.** When posting custom enquiry fields to Collins, the name of the field inputs **_needs_** to be as follows:

| Field Type in Collins | Field Input| Comments|
|-----------|------|----|
|Yes/No| `enquiry_details[key]`|`value=true`|
|Free Text | `enquiry_details[key]`||
|Long Text|`enquiry_details[key]`||
|Pick One|`enquiry_details[key]`||
|Pick Multiple| `enquiry_details[key][]`|Collins user will need to let you know the exact values they have set for the multiple options so you can map to the correct values. Please note that these are case-sensitive|

where `key` is the **Field Name** of the Enquiry Field that you have create and passed on to your developer. 

**Example for web developers:** 

If you hadthe following set up the following in Collins:

| Field Label | Field Name| Field Type|Multiple Drop Down Options|
|-----------|------|------|---|
|Message| `message` | Free Text|N/A|
|How did you hear about us| `how_ did_you_hear_about_us` | Google, Friend|

For the 'Message' field on your form, your web developer would have to use `enquiry_details[message]`

For the 'How did you hear about us' field on your form, your web developer would have to use `enquiry_details[how_ did_you_hear_about_us][]` `value=Google` `value=Friend`.

**5.** Your web developer needs to post your form to https://bookings.designmynight.com/book

**6.** Your web developer will also need to include the following fields to identify as being an enquiry for your venue group:

* `enquiry_type=enquiry`
* `source=partner`
* `venue_group= **you can get this from your Account Manager**`

**_Please note:_**  If the action of the form is a direct post to https://bookings.designmynight.com/book, then you will need to add these three fields as hidden fields, for example: 

```<input type="hidden" name="enquiry_type" value="enquiry">```

```<input type="hidden" name="source" value="partner">```

```<input type="hidden" name="venue_group" value="VENUEGROUPID">```

Where you will have to replace the VENUEGROUPID given from your Account Manager. 

If you are posting the form independently, then you will need to make sure these three fields are added to the final payload posted to https://bookings.designmynight.com/book.

## General Enquiry Form FAQs

**1. Do you support XHR or cross origin requests?**

We do not currently support submitting XHR requests for  bespoke enquiries. In order to customise the confirmation page, please add a `return_url` parameter. The response data will be forwarded onto your return url as url parameters.
