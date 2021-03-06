# Overview of the Collins/Kobas EPOS Integration

The purpose of the integration between Collins and EPOS is to be able to push the details of bookings and their associated deposits to the Kobas Epos system. 

Collins will push valid bookings to the EPOS as soon as they are created in Collins. 

**The integration can be set to:**

* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills.

**Bookings will be sent to the Kobas Reservations with the following details:**

* Name: The Customer's full name
* Date: The date of the booking
* Time: The time of the booking
* Cover Count: The number of guests in the booking
* Deposit amount: The total of all paid deposits
* Reference: The Collins booking reference (this will show in the Kobas Customer Record as the External ID) 

![Example of the Reservation on Kobas](https://static.designmynight.com/uploads/2018/11/Kobas-reservation.png)

With each booking, we will also push the associated customer details to the Kobas Customer Record. The following customer details will push:

* Full Name
* Email
* Company
* Date of Birth
* Phone Number

![Example of the Customer Record on Kobas](https://static.designmynight.com/uploads/2019/01/Capture-customer-Kobas-optimised.png)

## Payments Valid to Push to Kobas EPOS

The integration does not currently support pushing any payments after the booking date has passed.

* **Paid Deposits** 

All [manual/request payments](https://collins.uservoice.com/knowledgebase/articles/478069-collins-pay-how-to) taken using the payment link in Collins will automatically push to your Kobas EPOS. 

* **Pushing 'Other' Payments**

If you add an ['Other'](https://collins.uservoice.com/knowledgebase/articles/478056-within-a-booking-enquiry-recording-payments-made) Payment to your Collins booking, you will see an option to 'Push to Till'. By default, this field will stay blank. 

Depending on whether you would like to push the 'Other' payment to your tills, you will have to manually select Yes/No from the drop-down accordingly. 

You will not be able to proceed with adding the payment without selecting an option on the 'Push to Till' drop down.

This way your team has full control as to which payments get pushed to your tills.

**Please Note** - the integration does not currently support pushing claimed [Collins Card Authentication payments](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to). 

## Setting up the Collins/Kobas Integration:
If you would like to set up the integration to push bookings/payments to your Kobas EPOS, you will need to contact your Collins Account Manager with the following details:

* Access Token URL 
* POST Body
* Grant Type
* Client ID
* Client Secret
* Scope
* Source Key and ID 
* Reservations Source ID
* Venue ID

You will be able to retrieve these details from the Kobas Cloud: 

1. Go to Administration
2. Go Integration Settings
3. Go to Reservations
4. Tick the checkbox and your API Credentials will be revealed
5. Click the icon next to API Credentials to copy.
6. Paste and forward to your Collins Account Manager 

You will also need to specify **which bookings** you would like Collins to push to your tills:

* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills.

## Minimum Deposit Date

If your venue has already been using Collins Pay, you should let us know whether your team has been manually adding payments to your tills. If so, we can set a **Minimum Deposit Date** for when the integration goes live (to avoid duplicates on your tills). 

This would mean that any bookings with deposits already added (but not necessarily received yet) on Collins, before the integration goes live, that get updated, **will not** push to the till.

**For example:** the integration goes live on 1st December (and the minimum deposit date is set to 1st December)

If you already have a payment request for a booking on 30th November but the payment is not received until 2nd December. This deposit **will not** be pushed to your tills (as the payment was added before the minimum deposit date).

Only any payments added after 1st December will ever be considered valid to be pushed to the till.

**_Please note:_** if you have not got a Minimum Deposit Date set up, payments that have been added to Collins before the integration has been set up are valid to push. You will be able to manually push these to the tills by going into the booking in Collins and click the SAVE button. 

If you have not been manually adding payments on your tills (eg if you are changing till systems), we can push **all** future bookings with deposits to your tills. Please speak to your Collins Account Manager to discuss. 

## Checking that the Collins/Kobas Integration is set up correctly
Once your Collins Account Manager has been in touch that the integration has been set up, it will be your responsibility to check that the integration is working correctly (as Collins will not be able to access your till systems to test). 

As such, we recommend that you create a test payment through Collins. This will both test the connection and ensure that you're confident with how it will show on your tills.

Once the integration has been set up, all valid payments added to Collins will have a tick next to it in the Payments tab of the booking. The colour of the tick will determine the 'pushed to till' status:

* The green tick means that the payment has already been pushed to your till:

![screenshot of green tick](https://static.designmynight.com/uploads/2017/11/pushed-to-till-optimised.png) 

* The orange tick will mean that the payment has not correctly pushed to your tills. 

![screenshot of orange tick](https://static.designmynight.com/uploads/2017/11/not-pushed-to-till-optimised.png) 

## Best Practice for Pushing all bookings
If your integration is set up to push all bookings (not just bookings with deposits), it's important that you ensure that all of the following booking details are added to the booking in Collins:

* First Name
* Last Name 
* Booking Date
* Venue
* Number of Guests
* Start Time
* End Time
* Email Address 

Without all these details, we will be unable to push the booking to your tills. 

## Refunding on Collins and Kobas

From June 2019, the integration now supports pushing refunds to Kobas. 

Within Kobas, you will see a single value which will be the total value of payments taken in Collins (deducting any refunds issued). 

## Kobas EPOS Integration FAQS

**1. How do I reconcile which payments have pushed to my tills?**

You will be able to filter and download your [Payments Report](https://collins.uservoice.com/knowledgebase/articles/1874923-reports-payments) by 'pushed to till' status. 

This will allow you to check which payments have/haven't successfully pushed to your tills. For any further questions, please contact your Collins Account Manager. 



