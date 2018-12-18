# Overview of the Collins/Kobas EPOS Integration

The purpose of the integration between Collins and EPOS is to be able to push the details of bookings and their associated deposits to the Kobas Epos system. 

**The integration can be set to:**

* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills.

* Push bookings ASAP: Collins will push valid bookings to the EPOS as soon as they are created in Collins. 

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

![Example of the Customer Record on Kobas](https://static.designmynight.com/uploads/2018/11/Kobas-customer-2.png)

## Payments Valid to Push to Kobas EPOS

* **Paid Deposits** 

All [manual/request payments](https://collins.uservoice.com/knowledgebase/articles/478069-collins-pay-how-to) taken using the payment link in Collins will automatically push to your Kobas EPOS. 

* **Pushing 'Other' Payments**

If you add an ['Other'](https://collins.uservoice.com/knowledgebase/articles/478056-within-a-booking-enquiry-recording-payments-made) Payment to your Collins booking, you will see an option to 'Push to Till'. By default, this field will stay blank. 

Depending on whether you would like to push the 'Other' payment to your tills, you will have to manually select Yes/No from the drop-down accordingly. 

You will not be able to proceed with adding the payment without selecting an option on the 'Push to Till' drop down.

This way your team has full control as to which payments get pushed to your tills.

**Please Note** - the integration does not currently support pushing claimed [Collins Card Authentication payments](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to). 

## Setting up the Collins/Kobas Integration:
If you would like to set up the integration to push bookings/payments to your Kobas EPOS, you will need to contact your Collins Account Manager with the following details (you will be able to get these from Kobas):

* Access Token URL 
* POST Body
* Grant Type
* Client ID
* Client Secret
* Scope
* Source Key and ID 
* Reservations Source ID

You will also need to specify **which bookings** you would like Collins to push to your tills:

* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills.

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

Currently, the integration does **not** support pushing refunds to Kobas. As such, if you [refund a payment within Collins](https://collins.uservoice.com/knowledgebase/articles/803478-collins-pay-how-do-i-refund-a-customer), you will also have to manually refund the payment within Kobas. 



