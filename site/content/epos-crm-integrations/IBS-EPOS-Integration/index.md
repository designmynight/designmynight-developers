# Overview of the Collins/IBS EPOS Integration

The purpose of the integration between Collins and IBS is to be able to push the details of bookings and their associated deposits to the IBS Epos system. 

We will push valid bookings to the EPOS as soon as they are created in Collins. 

**Details can be set to:**

* Push all bookings **or** only push bookings with deposits

**Bookings will be sent to the EPOS with the following details:**

* Name: The Customer's full name
* Date: The date of the booking
* Time: The time of the booking
* Cover Count: The number of guests in the booking
* Reference: The Collins booking reference
* Deposit amount: The total of all paid deposit

## Payments Valid to Push to IBS EPOS

* **Paid Deposits** 

All [manual/request payments](https://collins.uservoice.com/knowledgebase/articles/478069-collins-pay-how-to) taken using the payment link in Collins will automatically push to your IBS EPOS. 

* **Payments claimed by Card Authentication** 

If you claim a [Collins Card Authentication](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to) payment, Collins will push the payment to your tills.

* **Pushing 'Other' Payments**

If you add an ['Other'](https://collins.uservoice.com/knowledgebase/articles/478056-within-a-booking-enquiry-recording-payments-made) Payment to your Collins booking, you will see an option to 'Push to Till'. By default, this field will stay blank. 

Depending on whether you would like to push the 'Other' payment to your tills, you will have to manually select Yes/No from the drop-down accordingly. 

You will not be able to proceed with adding the payment without selecting an option on the 'Push to Till' drop down.

This way your team has full control as to which payments get pushed to your tills.

## Setting up the Collins/IBS Integration:
If you would like to set up the integration to push bookings/payments to your IBS EPOS, you will need to contact your Collins Account Manager with the following details (you will be able to get these from IBS):

* Logon URL
* WSDL
* CompanyCode
* Username
* Password 
* AppGUID 
* LocationCode
* Media Mappings to be used for **each** of the following payment types:

1. Collins Pay
2. Other Payment BACS
3. Other Payment Card
4. Other Payment Cash
5. Other Payment Cheque
6. Other Payment PDQ
7. Gift Voucher 
8. For any 'other' payments that have **not** been assigned a payment type within Collins (as a default setting)

You will also need to specify **which bookings** you would like Collins to push to your tills:

* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills.

## How to push bookings/deposits that were added to Collins before the IBS integration goes live

Any bookings that are already on Collins (before the Collins/IBS integration is set up) will **not** push to the till unless a deposit is added/changed/deleted for the booking on Collins. 

As such, if you add a new payment to any bookings already on Collins before the integration was set up, the booking will be pushed to the tills. 

If you wish to push a booking/deposit that was already set up on Collins before the integration (even if no new payments have been taken after the integration is set up):

1. Go to the booking on Collins
2. Add an ['Other'payment](https://collins.uservoice.com/knowledgebase/articles/478056-within-a-booking-enquiry-recording-payments-made). Select for the payment **not** to push to your tills.  
3. Save the booking
4. Delete the deposit
5. Save the booking

The booking should push to your tills. 

## Checking that the Collins/IBS Integration is set up correctly
Once your Collins Account Manager has been in touch that the integration has been set up, it will be your responsibility to check that the integration is working correctly (as Collins will not be able to access your till systems to test). 

As such, we recommend that you create a test payment through Collins. This will both test the connection and ensure that you're confident with how it will show on your tills.

Once the integration has been set up, all valid payments added to Collins will have a tick next to it in the Payments tab of the booking. The colour of the tick will determine the 'pushed to till' status:

* The green tick means that the payment has already been pushed to your till:

![screenshot of green tick](https://static.designmynight.com/uploads/2017/11/pushed-to-till-optimised.png) 

* The orange tick will mean that the payment has not correctly pushed to your tills. Please see our troubleshooting steps below. 

![screenshot of orange tick](https://static.designmynight.com/uploads/2017/11/not-pushed-to-till-optimised.png) 

## Best Practice for Pushing all bookings
If your integration is set up to push all bookings (not just bookings with deposits), it's important that you ensure that all of the following booking details are added to the booking in Collins:

* First Name
* Last Name 
* Booking Date
* Venue
* Time
* Email Address

Without all these details, we will be unable to push the booking to your tills. 

**_Please note:_** if you are manually adding the First and Last Names into the booking (eg if you are taking the booking over the phone or in person), please separate multiple barrel names with a hyphen instead of a space. 

e.g. John-Edwards **NOT** John Edwards

## Refunding on Collins and IBS

If you [refund a deposit](https://collins.uservoice.com/knowledgebase/articles/803478-collins-pay-how-do-i-refund-a-customer) or delete an 'Other' payment in Collins, this change will now be pushed to Stocklink so that Collins and your tills are synced. 

## IBS EPOS Integration FAQS
**1. If we set up the integration to push all bookings, will my in progress enquiries get pushed to tills?** 

There is not currently a status check in place, so Collins would push all bookings regardless of booking status.


