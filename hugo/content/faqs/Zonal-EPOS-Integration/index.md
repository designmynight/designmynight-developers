## Overview of the Collins/Zonal EPOS Integration

The purpose of the integration between Collins and Zonal is for Collins to be able to push the details of bookings and their
associated deposits to the Zonal EPOS system.

**Connecting to Zonal**

Collins connects to Zonal through Zonal’s ZCF server. Requests are transmitted over HTTPS with an authorisation header
with credentials that Zonal set up and provide.

Example URL: https://api.zonalconnect.com/PubChain/send/1902/booking

**Details sent to Zonal**

Bookings will be sent to the EPOS with the following details
* Name: the customer’s full name
* Date: the date of the booking
* Time: the time of the booking
* Cover count: the number of guests in the booking
* Reference: the Collins booking reference
* Deposit amount: the total of all paid deposits

All paid deposits are considered valid for storing in Zonal, with the exception of those added in Collins as a Cash payment.

**Handling changes in Collins**

Whenever a booking is changed in Collins, the integration will check if that deposit should be updated in Zonal. If the
booking has already been added to Zonal, any updates to the core booking details will be sent, and new deposits will be
sent.

**Note:** the Zonal API does not support editing or deleting deposits from the EPOS, so any refunds processed in Collins will
need to be manually updated in the EPOS

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

**What type of bookings should push to the tills and when should they push?**

You will also have to specify how you would like the integration to function (this will depend on how you manage your reporting on your side).

Please specify the following:

* **What type of bookings would you like to push to your tills?** Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS. Otherwise, we can push all bookings to your tills. 

* **When would you like to these bookings to push to your tills?** Push bookings ASAP: If set, will push valid bookings to the EPOS as soon as they are created. Otherwise, bookings will be sent on the morning of the booking date.

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

## Zonal Troubleshooting

There are some rare are occasions when the link between Collins and Zonal does not work, mostly due to loss of connectivity. A member of the Collins team will contact you if we receive an error when trying to push a booking/payment to Zonal. You will then need to contact Zonal directly to resolve the issue. 

There is an Aztek report named “Bookings Due Report” which is very useful to check that bookings have pushed successfully to Collins, and we recommend checking this against your payments made in Collins on a regular basis to avoid any issues.

## Collins/Zonal Integration FAQs

**1. I've just added a payment to Collins, why has it not pushed to my tills?**

There are a few different reasons why a payment may not be showing on your till:

* **Minimum Deposit Date:** It’s worth checking the minimum deposit date that was set for your Zonal integration. Any bookings with deposits that are on the system, before your go-live, that get updated, won’t push to the till.

* **The Booking Date has Passed:** It's important to note that this integration will not allow us to push payments to the till **after** the date of the booking has already passed. As such, if you are claiming a [Collins Card Authentication Payment](https://collins.uservoice.com/knowledgebase/articles/478064-card-authentication-how-to) after the date of the booking, this will **not** push to the tills and you will have to be manually add the payment to your tills.

**2. When I add a ‘Other’ payment on Collins, it looks like I have the option to push this to the tills. Will the payment show on the tills as the relevant payment type?**

Any payment that Collins pushes to Zonal will appear as whichever payment type we set up the integration with. We don't currently have a way to push different payment types.


