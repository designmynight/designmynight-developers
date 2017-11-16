# Overview of the Collins/Zonal EPOS Integration

The purpose of the integration between Collins and Zonal is for Collins to be able to push the details of bookings and their
associated deposits to the Zonal EPOS system.

**Connecting to Zonal**

Collins connects to Zonal through Zonal’s ZCF server. Requests are transmitted over HTTPS with an authorisation header
with credentials that Zonal set up and provide.

Example URL: https://api.zonalconnect.com/PubChain/send/1902/booking

**Integration configuration**

The following configuration options need to be provided for each site that wishes to have bookings added to the EPOS:
* Estate name: the name of the group as set up in Zonal, eg ‘PubChain’ in the example URL above
* Site ID: the ID of the site as set up in Zonal
* Sales area ID: the ID of the sales area to send bookings to, eg 1902 in the example URL above
* Booking type ID: the ID of the booking type that bookings should be added to Zonal as
* Payment Method ID: the ID of the payment method that should be specified for deposits from Collins
* Employee ID: the employee ID that bookings should be added under
* Username: the authorization username to connect to Zonal
* Password: the authorization password to connect to Zonal

**Two additional options are available to specify how the integration should function:**

* Push bookings ASAP: If set, will push valid bookings to the EPOS as soon as they are created. Otherwise,
bookings will be sent on the morning of the booking date.
* Only bookings with deposits: If set, only bookings with deposits will be sent to the EPOS

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

## Zonal Refunds 

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


