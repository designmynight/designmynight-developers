# Overview of the Collins/IBS EPOS Integration

The purpose of the integration between Collins and IBS is to be able to push the details of bookings and their associated deposits to the IBS Epos system. 

**Details can be set to:**

* Push ASAP **or** push on the day of the booking
* Push all bookings **or** only push bookings with deposits

**Bookings will be sent to the EPOS with the following details:**

Name: The Customer's full name
Date: The date of the booking
Time: The time of the booking
Cover Count: The number of guests in the booking
Reference: The Collins booking reference
Deposit amount: The total of all paid deposit

## Payments Valid to Push to IBS EPOS

* **Paid Deposits** 

All [manual/request payments](https://collins.uservoice.com/knowledgebase/articles/478069-collins-pay-how-to) taken using the payment link in Collins will automatically push to your IBS EPOS. 

* **Payments claimed by Card Authentication** 
 
 The Collins/Zonal integration will **not** allow for Collins to push payments that have been added **after** the booking date has passed. 
 
Payments claimed from [Collins Card Authentication](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to) should only be taken **after** the booking date has passed (in the case that the customer was a no-show or failed to meet your booking policies).

As such payments claimed by Card Authentication will **not** push to the till and will need to be manually added to your tills. 

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

You will also need to specify how you would like the integration to function (this will depend on how you manage your reporting on your side). For this, you will need to confirm **which bookings** you would like Collins to push to your tills and **when** these bookings should be pushed:

* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills.

* Push bookings ASAP: If set, will push valid bookings to the EPOS as soon as they are created. Otherwise, bookings will be sent on the morning of the booking date.

**_Please note:_** any bookings/deposits that are already on Collins (before the Collins/IBS integration is set up) will **not** push to the till unless a deposit is added/changed/deleted for the booking on Collins. 

## Checking that the Collins/IBS Integration is set up correctly

Once your Collins Account Manager has been in touch that the integration has been set up, it will be your responsibility to check that the integration is working correctly (as Collins will not be able to access your till systems to test). 

As such, we recommend that you create a test payment through Collins. This will both test the connection and ensure that you're confident with how it will show on your tills.

Once the integration has been set up, all valid payments added to Collins will have a tick next to it in the Payments tab of the booking. The colour of the tick will determine the 'pushed to till' status:

* The [green tick](https://static.designmynight.com/uploads/2017/11/pushed-to-till-optimised.png) means that the payment has already been pushed to your till. 

* The [orange tick](https://static.designmynight.com/uploads/2017/11/not-pushed-to-till-optimised.png) will mean different things depending on how you've set the integration up:

If you have set up to push bookings ASAP and the tick is orange, this means that the payment has not correctly pushed to your tills. Please see our troubleshooting steps below. 

If you have set up to push bookings on the day of the booking, the orange tick means the payment is yet to push (and will push on the day of the booking). 

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

