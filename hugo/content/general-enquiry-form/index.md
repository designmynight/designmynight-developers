# Contact Us/General Enquiry Form
As well as a Collins booking widget, you can also personalise your own Contact Us/General Enquiry form which feeds into your Collins. 

Here's an example of a partner with a customised enquiry form: [No. 4 Clifton Village](https://www.no4cliftonvillage.co.uk/contact-us/)

**To create your own personalised Enquiry form:**

1. Create your own form display on your website. This way you and your web developer will be responsible for the look of your personalised form and which fields are included.

2. Once you have created the form on your side, you will need to let us know the **names** of any additional (non-standard) Collins booking fields. Please also let us know what **type** of fields these are, for example, 'Free Text', 'Yes/No' and 'Pick One'  

_For any standard Collins booking fields (First Name, Last Name, Email, Phone, DOB, Newsletter Sign Up), please use these standard [Collins booking field names](http://developers.designmynight.com/booking-api/#submitting-through-the-api).
This will ensure that these field details will pull through to the respective fields in your Collins enquiry._ 

3. Once we have received the extra field names and their types, we'll create them in our admin and will send you over the technical names for your web developer to map them in your web form.

4. When posting custom enquiry fields to Collins, the name of the inputs needs to be `enquiry_details[<key>]` where `<key>` is the field name that we have provided.

5. Your web developer needs to post your form to https://www.designmynight.com/book

6. Your web developer will also need to include the following fields to identify as being an enquiry for your venue group:

* `enquiry_type=enquiry`
* `source=partner`
* `venue_group= **you can get this from your Account Manager**`

**_Please note:_**  If the action of the form is a direct post to www.designmynight.com/book, then you will need to add these three fields as hidden fields. 

If you are posting the form independently, then you will need to make sure these three fields are added to the final payload posted to www.designmynight.com/book.

# General Enquiry Form FAQs

**1. I'm trying to post to https://www.designmynight.com/book but am receiving the following error message: "No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access."**

As well as sending all the booking data, you will also need to ensure you are sending `source=partner`.

This will store the booking as a partner booking and will allow those cross-origin requests through.


