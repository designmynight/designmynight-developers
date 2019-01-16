## Overview of the Collins/Zonal EPOS Integration

The purpose of the integration between Collins and Zonal is for Collins to be able to push the details of bookings and their
associated deposits to the Zonal EPOS system.

**Connecting to Zonal**

Collins connects to Zonal through Zonal’s ZCF server. Requests are transmitted over HTTPS with an authorisation header
with credentials that Zonal set up and provide.

Example URL: https://api.zonalconnect.com/PubChain/send/1902/booking

**Details sent to Zonal**

Bookings will be sent to the EPOS with the following details:

* Name: the customer’s full name
* Date: the date of the booking
* Time: the time of the booking
* Cover count: the number of guests in the booking
* Reference: the Collins booking reference
* Deposit amount: the total of all paid deposits

**Handling changes in Collins**

Whenever a booking is changed in Collins, the integration will check if that booking should be updated in Zonal. If the
booking has already been added to Zonal, any updates to the core booking details will result in the booking and any new deposits being re-sent to Zonal. These core booking details are:

* Venue
* First Name
* Last Name
* Deposits
* Time
* Number of People
* Status

**_Please note:_** the Zonal API does not support editing or deleting deposits from the EPOS, so any refunds processed in Collins will
need to be manually updated in the EPOS

## Payments Valid to Push to Zonal EPOS

Zonal does **not** support adding payments after the booking date has passed.

* **Payments claimed by Card Authentication** 

Payments claimed from [Collins Card Authentication](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to) should only be taken **after** the booking date has passed (in the case that the customer was a no-show or failed to meet your booking policies).

As such payments claimed by Card Authentication will **not** push to the till and will need to be manually added to your tills. 

* **Paid Deposits** 

All [manual/request payments](https://collins.uservoice.com/knowledgebase/articles/478069-collins-pay-how-to) taken using the payment link in Collins will automatically push to your Zonal EPOS. 

* **Pushing 'Other' Payments**

If you add an ['Other'](https://collins.uservoice.com/knowledgebase/articles/478056-within-a-booking-enquiry-recording-payments-made) Payment to your Collins booking, you will see an option to 'Push to Till'. By default, this field will stay blank. 

Depending on whether you would like to push the 'Other' payment to your tills, you will have to manually select Yes/No from the drop-down accordingly. 

You will not be able to proceed with adding the payment without selecting an option on the 'Push to Till' drop down.

This way your team has full control as to which payments get pushed to your tills.

## Setting up the Collins/Zonal EPOS Integration

If you would like to set up the integration to push bookings/payments to your Zonal EPOS, you will need to contact your Collins Account Manager with the following details:

**Integration configuration**

The following configuration options need to be provided for **each site** that wishes to have bookings added to the EPOS (you will have to contact Zonal for these details):

* Estate name: the name of the group as set up in Zonal, eg ‘PubChain’ in the example URL above
* Site ID: the ID of the site as set up in Zonal
* Sales area ID: the ID of the sales area to send bookings to, eg 1902 in the example URL above
* Booking type ID: the ID of the booking type that bookings should be added to Zonal as
* Payment Method ID: the ID of the payment method that should be specified for deposits from Collins
* Employee ID: the employee ID that bookings should be added under
* Username: the authorization username to connect to Zonal
* Password: the authorization password to connect to Zonal
* Base/ZCF URL

You will also need to specify how you would like the integration to function (this will depend on how you manage your reporting on your side). For this, you will need to confirm **which bookings** you would like Collins to push to your tills and **when** these bookings should be pushed:

* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills. 

* Push bookings ASAP: If set, will push valid bookings to the EPOS as soon as they are created. Otherwise, bookings will be sent at 7am (and every hour after) on the morning of the booking date.

If you have already started taking payments through Collins Pay, you will need to specify if you would like to push all future bookings with payments **already** added on Collins. If so, we will push all future bookings with deposits to your EPOS when setting up the intergration. Otherwise, only bookings with new deposits which are added to Collins **after** the integration goes live will be pushed (Minumum Deposit Date).

If you are chosing to push payments on the day the booking takes place, we will push all future bookings with payments

**_Please note:_** depending on our tech roadmap, it can take our tech team up to two weeks to set up this integration.

## Minimum Deposit Date

If your venue has already been using Collins Pay, you should let us know whether your team has been manually adding payments to your tills. If so, we can set a **Minimum Deposit Date** for when the integration goes live (to avoid duplicates on your tills). 

This would mean that any bookings with deposits already added (but not necessarily received yet) on Collins, before the integration goes live, that get updated, **will not** push to the till.

For example: the integration goes live on 1st December (and the minimum deposit date is set to 1st December)

If you already have a payment request for a booking on 30th November but the payment is not received until 2nd December. This deposit **will not** be pushed to your tills (as the payment was added before the minimum deposit date).

Only any payments added after 1st December will ever be considered valid to be pushed to the till.

If you have not been manually adding payments on your tills (eg if you are changing till systems), we can push **all** future bookings with deposits to your tills. 

## Checking that the Collins/Zonal Integration is set up correctly

Once your Collins Account Manager has been in touch that the integration has been set up, it will be your responsibility to check that the integration is working correctly (as Collins will not be able to access your till systems to test). 

As such, we recommend that you create a test payment through Collins. This will both test the connection and ensure that you're confident with how it will show on your tills.

Once the integration has been set up, all valid payments added to Collins will have a tick next to it in the Payments tab of the booking. The colour of the tick will determine the 'pushed to till' status:

* The green tick means that the payment has already been pushed to your till:

![screenshot of green tick](https://static.designmynight.com/uploads/2017/11/pushed-to-till-optimised.png) 

* The orange tick will mean different things depending on how you've set the integration up:

![screenshot of orange tick](https://static.designmynight.com/uploads/2017/11/not-pushed-to-till-optimised.png)

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

## Refunding on Collins and Zonal 

If you need to refund a deposit or payment in Collins, this change will **not** automatically be pushed to your tills. 

Completing a refund is a **two-step** process: 

**Step One: Refunding on Collins:**

1. Go into the booking in Collins and in the Payment section click on the “refund” option next to the payment you wish to refund.
2. Click Save.

**Step Two: Complete the refund on your Till:**

1. Select “other functions” or “manager functions” on an empty till account 
2. Select “deposit redeem” 
3. Select the booking from the screen. If the booking is for a future date, press the date selection button and select the booking date 
4. Select “Total redemption” 
5. The order display will have a negative value 
6. Pay out by selecting the ‘Collins’ payment button on the pay panel

## Redeeming Deposits

To redeem the deposit against customer spend on the day of the booking:

1. Select the customer till account / bar tab 
2. Select “deposit redeem” 
3. Select the booking from the screen 
4. Select “total redemption” 
5. Print the customer bill
6. Pay the balance with the payment method of the customer’s choice

## Zonal Error Emails

If a booking/payment fails to push to Zonal, a member of the Collins Team will email you with details of the error Collins received when trying to push the booking/payment. You will have to contact Zonal to look into resolving the issue. 

The error email will include three useful details:

* **Collins Link** which will direct you to the specific booking that was affected

* **Zonal URL** which will describe what Collins was trying to push when the error was received (eg a payment)

* **Zonal Message** which will give more details about why the push failed

## Error Emails: Zonal URLs explained
If the Zonal URL in your error emails ends in: 

* **/edit** if the error occurred when editing booking details. We encourage all partners to use Collins during [live service](https://collins.uservoice.com/knowledgebase/articles/1183255-collins-webinars-prepping-for-and-using-collins) so you will always be able to get up to date booking details on Collins. You will only really require these updates if you wish for up-to-date booking details to show up on your tills.

* **/deposit** if the error occurred when adding a deposit 

* **/create** is the error occurred when creating the booking

## Error Emails: Error Messages Explained

Each time Collins receives an error from the Zonal API (i.e. a payment/booking has failed to push to your tills), a member of the Collins team will contact you letting you know which booking has been affected and the error that we received from Zonal. It will be your responsibility to contact Zonal and ask that they look into the issue. 

If you receive any of the following errors, you should check the booking and if the payment has not pushed through, then follow the below and go to Zonal with all of the following details:

* Customer name
* Date
* Guests
* Time
* [Date that the payment was made](https://collins.uservoice.com/knowledgebase/articles/1121737-reports-collins-pay-payments) 

1. **'Unable to connect to the remote server'**

This is a connection error on Zonal's side. You will need to contact Zonal to resolve the issue. 

2. **'Booking Not Found' Error** 

These are errors from Zonal, which we are not given any further details about. You will need to contact Zonal.

An example of when this error occurs is if the booking was created at one venue and the deposit was added to that venue's till, then it was later changed to a different venue so attempting to edit the booking on that till resulted in this error.

Check the [Booking History](https://collins.uservoice.com/knowledgebase/articles/1111738-within-a-booking-enquiry-booking-history) to see if the venue has been updated (after the payment was taken). 

The Zonal API doesn't support removing deposits once they've been added so this will need to be moved manually.

3. **'Invalid date 'False'; expected YYYY-mm-dd' Error**

This error occurs if the booking has been added **without** a booking date. To fix this, you will need to enter the date of the booking. If you add a **future** date for the Booking Date, the booking will automatically push to your tills (so there is no need to contact Zonal). 

4. **'Invalid booking field: ContactName' Error**

This error occurs when there is a space in the 'Name' field of your booking. For example, if someone has a double barrel surname, the name must be entered with a hyphen not a space e.g. John-Edwards **NOT** John Edwards. 

Once the name has been been hyphenated and saved, the booking will automatically push to your tills (as long as the booking date has not already passed).  

5. **'Invalid MAC' error'**

If the integration has worked correctly and you start to receive 'Invalid Mac' errors, it's likely that your system details have been updated (for example if the system is updated to have a new company name). This will invalidate the MAC calculations and is something for Zonal to look into. 

6. **The remote name could not be resolved: 'nei-XXX.rtpsolutions.net** (where XXX replaced with your group name). 

Zonal is trying to forward the API request to that URL but it can't be found. You will need to contact Zonal to resolve the issue.

## Re-pushing '/create' error bookings
If the integration is set up to push bookings ASAP, Collins will attempt to push bookings to your tills every time a user saves a booking if one of the following booking fields has been changed in Collins: 

* Venue
* First Name
* Last Name
* Deposits
* Time
* Number of People 
* Status

As such, if you have contacted Zonal and they have fixed the original issue (eg connection error), you can try to re-push the booking/payment to your tills by changing one of the above booking fields in Collins. 

For example, you can make the following changes:

1. Go to the booking in Collins
2. Change the First Name from lowercase to UPPERCASE
3. Click SAVE

After you have saved this booking change, Collins will attempt to push the booking to your tills. 

**Please note**: _this method will only work to re-push payments if no payments have successfully pushed to the tills for this booking. See below for more details on [what to do if the booking and a previous payment have already pushed to the tills](http://developers.designmynight.com/epos-crm-integrations/zonal-epos-integration/#re-pushing-deposit-error-bookings)._

## Re-pushing '/deposit' error bookings  

If a second payment fails to push (but the booking and the first payment have already successfully pushed to Zonal), there is currently no way of re-pushing this within Collins (unlike with [re-pushing /create error bookings](http://developers.designmynight.com/epos-crm-integrations/zonal-epos-integration/#re-pushing-create-error-bookings)).

Example scenario:

1. Integration is set to only push bookings with deposits, ASAP. 
2. User takes Collins payment of £X
3. Payment for £X pushes successfully to till
4. Venue takes a second Collins payments for £Y
5. Payment for £Y does not push successfully to tills due to connection errors.
6. Zonal have resolved connection errors and new deposits/ payments are correctly pushing. 

It's not currently possible to trigger a re-push for the second deposit within Collins.

We recommend that users **manually** add the record of the second payment to the bookings on your tills. 

## Collins/Zonal Integration FAQs

**1. I've just added a payment to Collins, why has it not pushed to my tills?**

There are a few different reasons why a payment may not be showing on your till. Please work through these points before contacting your Collins Account Manager: 

* **Minimum Deposit Date:** It’s worth checking whether the booking had been added to the system before the Collins/Zonal integration went live. Any bookings with deposits that were already on Collins (before the integration went live) that get updated, will not get pushed to the till (to avoid duplicates on your tills).

* **The Booking Date has Passed:** It's important to note that this integration will not allow us to push payments to the till **after** the date of the booking has already passed. 

So if you are claiming a [Collins Card Authentication Payment](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to) after the date of the booking, this will **not** push to the tills and you will have to be manually add the payment to your tills.

Similarly, if you add a payment to a booking (when the booking date has already passed) and try to change the date of the booking to a future date, the payment will not be pushed to the till. 

**2. When I add a ‘Other’ payment on Collins, I have the option to push this to the tills. Will the payment show on the tills as the relevant payment type?**

Any payment that Collins pushes to Zonal will appear as whichever payment type we set up the integration with. We don't currently have a way to push different payment types.

**3. If we set up the integration to push all bookings, will my in progress enquiries get pushed to tills?** 

There is not currently a status check in place, so Collins would push all bookings regardless of booking status.




