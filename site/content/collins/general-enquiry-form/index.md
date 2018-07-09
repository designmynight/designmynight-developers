# Contact Us/General Enquiry Form
As well as a [Collins booking widget](http://developers.designmynight.com/collins/booking-widget/), you can also create and personalise your own Contact Us/General Enquiry form which feeds into Collins as a new enquiry. 

Here's an example of a partner with a customised enquiry form: [No. 4 Clifton Village](https://www.no4cliftonvillage.co.uk/contact-us/).

**IMPORTANT:** Collins users **MUST** [create all their custom enquiry fields within Collins](https://collins.uservoice.com/knowledgebase/articles/1867342-venue-group-enquiries) before you can proceed with creating your enquiry form. 

## Posting to Standard Booking Fields

For any _standard_ Collins booking fields used in your form, please ask your web developer to post to these field names:

| Field Name | Field Name in Collins|Comments|
|-----------|------|------|
|`first_name`| First Name||
|`last_name` | Last Name||
|`email`| Email ||
|`phone`| Phone||
|`num_people`| Guests|
|`date`| Date| In the form YYYY-MM-DD|
|`time`| Time| In the form HH:mm|
|`duration`| Duration of booking| Number of minutes |
|`dob`| Birthday| In the form YYYY-MM-DD |
|`venue`| Venue| Use the Venue IDs provided by Collins Account Manager |
|`type`| Booking Type|Use the Booking Type IDs provided by Collins Account Manager|

**Examples of posting standard booking fields:**

* If you're adding a field on your form for customers to enter their first name, you can post to `name='first_name'`.
* If you are asking customers to select from multiple venues: 

```
<select name="venue">
    <option value="552435790df6902b7256f237"> Bar Collins</option>
    <option value="5787a87595838bed3a8b4569">Bar DMN</option>
</select>
```
where you swap the values to be the venue IDs sent from your Collins Account Manager. 

## Posting to Custom Enquiry Fields

When posting custom enquiry fields to Collins, the name of the field inputs **_needs_** to be as follows:

| Field Type in Collins | Field Input| Comments|
|-----------|------|----|
|Yes/No| `enquiry_details[key]`|`value=true`|
|Free Text | `enquiry_details[key]`||
|Long Text|`enquiry_details[key]`||
|Pick One|`enquiry_details[key]`||
|Pick Multiple| `enquiry_details[key][]`|Collins user will need to let you know the exact values they have set for the multiple options so you can map to the correct values. Please note that these are case-sensitive|

where `key` is the **Field Name** of the Enquiry Field that you have been sent from your Collins Account Manager.  

**Example for web developers:** 

If you had the following set up the following in Collins:

![screenshot of enquiry fields](https://static.designmynight.com/uploads/2018/07/Capture-of-enquiry-fields-optimised.png)

For the 'Message' field on your form, your web developer would have to use `enquiry_details[message]`

For the 'How did you hear about us' field on your form, your web developer would use an input similar to this:

```html
<select name="enquiry_details[how_did_you_hear_about_us][]">
    <option value="Google">Google</option>
    <option value="Friend">Friend</option>
</select>
```

## How to create your own personalised Enquiry Form

**1.** Collins users [create all their custom enquiry fields within Collins](https://collins.uservoice.com/knowledgebase/articles/1867342-venue-group-enquiries)

**2.** Once all the custom enquiry fields have been added to Collins, Collins user to let their Collins Account Manager know and introduce them to your web developer. 

**3.** Collins Account Manager to provide the web developer with the following details:

* Venue IDs
* Venue Group ID
* Field Names
* Field Types

**4.** Web developer to create a form display on your website. Web developer will be responsible for the look of your personalised form and which fields are included.

We recommend that you keep the forms as short and simple as possible. 

To help, here's an [example of a Basic Enquiry Form](https://docs.google.com/document/d/1syIG0kFEEzoD9FfDQkNHAp6wD5ZrNZhP4IW56Zkfyys/edit) that we recommend that your web developers use.

**5.** Post any Standard Booking Fields as per this guide. 

**6.** Post any Custom Enquiry Fields as per this guide. 

**7.** Post your form to https://bookings.designmynight.com/book

**6.** You will also need to include the following fields to identify as being an enquiry for your venue group:

* `enquiry_type=enquiry`
* `source=partner`
* `venue_group=` (**your Collins Account Manager will provide this**)

**_Please note:_**  If the action of the form is a direct post to https://bookings.designmynight.com/book, then you will need to add these three fields as hidden fields, for example: 

```<input type="hidden" name="enquiry_type" value="enquiry">```

```<input type="hidden" name="source" value="partner">```

```<input type="hidden" name="venue_group" value="VENUEGROUPID">```

Where you will have to replace the VENUEGROUPID given from your Account Manager. 

If you are posting the form independently, then you will need to make sure these three fields are added to the final payload posted to https://bookings.designmynight.com/book.

## General Enquiry Form FAQs

**1. Do you support XHR or cross origin requests?**

We do not currently support submitting XHR requests for  bespoke enquiries. In order to customise the confirmation page, please add a `return_url` parameter. The response data will be forwarded onto your return url as url parameters.
