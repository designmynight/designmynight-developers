# Contact Us/General Enquiry Form
As well as a Collins booking widget, you can also personalise your own Contact Us/General Enquiry form which feeds into your Collins. 

Here's an example of a partner with a customised enquiry form: [No. 4 Clifton Village](https://www.no4cliftonvillage.co.uk/contact-us/)

**To create your own personalised Enquiry form:**

**1.** Create your own form display on your website. You and your web developer will be responsible for the look of your personalised form and which fields are included.

**2.** For any standard Collins booking fields used in your form (First Name, Last Name, Email, Phone, DOB, Newsletter Sign Up), please use these [Standard Collins booking field names](http://developers.designmynight.com/booking-api/#submitting-through-the-api).
This will ensure that these field details will pull through to the respective fields in your Collins enquiry. 

**3.** For any non-standard enquiry fields that you would like to use, you will have to add them to your Collins admin. This will create technical names that you can give to your web developer to map them in your web form.

**To add a new enquiry field:**

1. Log onto your [Collins admin](www.admin.designmynight.com)
2. Go to Settings > Venue Group > Enquiries
3. Tick the box 'Enable Enquiries'
4. In Enquiy Fields section, click to 'Add a Field' 
5. You will then have to add the following details:

**Field Label** - _once this has been added, the Field Names will auto-populate. This is what your web developer will require_

**Field Type** - _select from the drop down the type of field (eg Free Text, Yes/No, Pick One etc)_

6. Click SAVE

Once the Enquiry Field has been added, please give your web developer the **Field Names**. They will use this to map these custom enquiry fields in your web form. 

**4.** When posting custom enquiry fields to Collins, the name of the inputs needs to be `enquiry_details[<key>]` where `<key>` is the **Field Name** of the Enquiry Field that you have create and passed on to your developer. 

**5.** Your web developer needs to post your form to https://www.designmynight.com/book

**6.** Your web developer will also need to include the following fields to identify as being an enquiry for your venue group:

* `enquiry_type=enquiry`
* `source=partner`
* `venue_group= **you can get this from your Account Manager**`

**_Please note:_**  If the action of the form is a direct post to www.designmynight.com/book, then you will need to add these three fields as hidden fields, for example: 

```<input type="hidden" name="enquiry_type" value="enquiry">```

```<input type="hidden" name="source" value="partner">```

```<input type="hidden" name="venue_group" value="VENUEGROUPID">```

Where you will have to replace the VENUEGROUPID given from your Account Manager. 

If you are posting the form independently, then you will need to make sure these three fields are added to the final payload posted to www.designmynight.com/book.

## General Enquiry Form FAQs

**1. I'm trying to post to https://www.designmynight.com/book but am receiving the following error message: "No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access."**

As well as sending all the booking data, you will also need to ensure you are sending `source=partner`.

This will store the booking as a partner booking and will allow those cross-origin requests through.


