# Overview of the Collins/Tevalis EPOS Integration

The purpose of the integration between Collins and Tevalis is to be able to push the details of bookings, their associated deposits and pre-orders taken on Collins to the Tevalis Epos system. 

Any walk-ins and changes to assigned tables made on your Tevalis POS will also update on your [Collins Diary](https://collins.uservoice.com/knowledgebase/articles/1174339-collins-webinars-working-your-diary-page). 

**Overview of the capabilities of the integration:**

* Push bookings to the till
* Push payments to the till (only those taken **before** the booking date has passed)
* Push pre-orders to the till
* Allocate the booking to a table on the till
* Add walk ins to the till using Collins availability and map to Collins diary
* Move table/join table on POS which will update Collins diary
* Updating the Collins floorplan with the relevant [stages of the booking](https://collins.uservoice.com/knowledgebase/articles/1867465-diary-floorplan-booking-stages) during live service 

# Booking details sent from Collins to Tevalis:

* Booking Name
* Booking Date
* Booking Time
* Table
* Covers
* Telephone
* Email
* Special Requirements
* [Internal Notes](https://collins.uservoice.com/knowledgebase/articles/478055-within-a-booking-enquiry-adding-internal-or-run)
* [Runsheet Notes](https://collins.uservoice.com/knowledgebase/articles/478055-within-a-booking-enquiry-adding-internal-or-run)
* [Collins Pay payments](https://collins.uservoice.com/knowledgebase/articles/560766-extra-feature-collins-pay-how-to-video)
* [Collins Pre-Orders](https://collins.uservoice.com/knowledgebase/articles/1805947-collins-pre-orders-video-how-to)

# Updates sent from Tevalis to Collins:

* Walk-ins

* Transferring the table on the EPOS with a booking assigned will also transfer the booking in Collins. Validation occurs to ensure there is not another booking on the table before the transfer is complete. 

* Merging tables onto a table with a booking open will extend the booking on Collins onto the same table range. Unmerge also contains the same functionality. When a booking is opened, if it is for multiple tables then the merging will be done automatically on the POS.

* Stage of the booking

## Payments Valid to Push to Tevalis EPOS

The Collins/Tevalis integration currently supports pushing payments to your tills if they have been added to Collins **before** the party has been seated on your tills.

* **Advance Paid Deposits** 

All [manual/request payments](https://collins.uservoice.com/knowledgebase/articles/478069-collins-pay-how-to) taken using the payment link in Collins prior to the booking date will automatically push to your Tevalis EPOS. 

* **Advance 'Other' Payments**

If you add an ['Other'](https://collins.uservoice.com/knowledgebase/articles/478056-within-a-booking-enquiry-recording-payments-made) Payment to your Collins booking prior to the booking date, this will push to your tills. 

* **Claimed Card Auth Payments**

If you [claim a card auth payment](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to) prior to the booking date, this will push to your tills. 

## Payments not valid to push to Tevalis EPOS

The Collins/Tevalis integration currently supports pushing payments to your tills if they have been added to Collins **before** the party has been seated on your tills. If you have added/refunded a payment within Collins after the booking has taken place, here is what you will need to do if you wish to update your tills.

**1. Refunding in Collins after the booking**

If you [refund a payment in Collins](https://collins.uservoice.com/knowledgebase/articles/803478-collins-pay-how-do-i-refund-a-customer)**after** the booking date (eg if something went wrong on the night), the refund will **not** push to your tills.  

You have access to re-open historic transactions on the Tevalis POS and will be able to manually put through the refund on your tills.

**2. Card Auth Claims**

If you claim a [Collins Card Authentication](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to) payment after the event, Collins will **not** push the payment to your tills. You will have to manually process this payment through the Tevalis EPOS. 

## Setting up the Collins/Tevalis Integration:
If you would like to set up the integration between Collins and Tevalis, you will need to contact your Collins Account Manager. 

