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

## How to set up the Collins/IBS Integration:

If you are looking to set up a IBS integration, please contact your Collins Account Manager with the following details (you will be able to get these from IBS):

* Logon URL
* WSDL
* CompanyCode
* Username
* Password 
* AppGUID 
* LocationCode

Please also confirm which bookings you would like Collins to push to your tills and when these should be pushed:

* Push ASAP **or** push on the day of the booking
* Push all bookings **or** only push bookings with deposits

**_Please note:_** any bookings/deposits that are already on Collins (before the Collins/IBS integration is set up) will **not** push to the till unless a deposit is added/changed/deleted for the booking on Collins. 

## Checking that the Collins/IBS Integration is set up correctly

Once your Collins Account Manager has been in touch that the integration has been set up, it's always worth creating a test payment through Collins (to test the connection and ensure that you're confident with how it will show on your tills).

Once the integration has been set up, all valid payments added to Collins will have a tick next to it in the Payments tab of the booking. The colour of the tick will determine the 'pushed to till' status:

* The [green tick](https://static.designmynight.com/uploads/2017/11/pushed-to-till-optimised.png) means that the payment has already been pushed to your till. 

* The [orange tick](https://static.designmynight.com/uploads/2017/11/not-pushed-to-till-optimised.png) will mean different things depending on how you've set the integration up:

If you have set up to push bookings ASAP and the tick is orange, this means that the payment has not correctly pushed to your tills. Please see our troubleshooting steps below. 

If you have set up to push bookings on the day of the booking, the orange tick means the payment is yet to push (and will push on the day of the booking). 



