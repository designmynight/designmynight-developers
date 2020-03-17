## Overview of the Collins/Comtrex EPOS Integration

The purpose of the integration between Collins and Comtrex is to be able to synchronize the walk-ins, bookings and booking stages between Collins and your Comtrex tills. 

## Overview of the capabilities of the integration:

Push bookings to the tills. 
Update the Collins booking with the relevant stages of the booking during live service
Push actual spends from tills to Collins

**Booking Stages**

We can map the booking stages between your tills and Collins so that the following happens:
- When a booking is set to seated in Collins, this will create a new booking on Comtrex  (with the matching table number and cover)
- When a walk-in or new food/drink order is added on Comtrex, this will create a walk-in on Collins. If the booking already exists on Collins, the Actual Spend of the booking will be updated.
- 'Mains Away' on the tills will update the booking stage of Collins to 'Mains'
- When the bill is paid on your tills, this will mark the booking as 'left' in Collins. 
- The spends on the tills will update the Actual Spend against the booking in Collins.   

## Setting up the Collins/Comtrex EPOS Integration:

If you would like to set up the integration to push bookings/payments to your Comtrex EPOS, you will need to contact your Collins Account Manager with the following details (you will be able to get these from your contact at Comtrex):

- The external IP address of the venue / URL of the venue's till system
- The vendor name to use in our requests, this is usually 'PatronPath'
- The FireMessage ID of each desired status (these will have to be entered as the ‘External Reference ID’ for the Booking Stage in Collins, this section will need to be activated by your Collins Account Manager). 
- The 'External Reference ID' for a Booking Stage can be set to: 'printed'. This will map the Booking Stage to a status flag the till sends us when the bill has been printed.
- Discount Item Number

In order for the till to be able to send information back into Collins, your Collins Account Manager will provide you with the following information to provide to Comtrex:

- API credentials - bearer token and user key and user ID
- Venue IDs to be put into the Flyt URL request 
- IP addresses to be given to your IT team to be whitelisted

## Troubleshooting

_My walk-ins aren’t showing in Collins_

Firstly, please ensure that all of your tables in Collins are named exactly the same as they are on the till. For example, if it is simply “35” on the till, but in Collins it is “Table 35”, the integration won’t work correctly.

If the problem persists, ask Comtrex to provide you with a full request and a full response that they are making to Collins. Pass this onto your Collins Account Manager to diagnose. 

_NONE of my bookings are pushing to the till_

Please ensure that all of your tables in Collins are named exactly the same as they are on the till. For example, if it is simply “35” on the till, but in Collins it is “Table 35”, the integration won’t work correctly.

It may be that a port has not been opened by your IT team or that our IP addresses need to be whitelisted. Please double check with your IT team that this has been done.

If the problem persists, please contact your Collins Account Manager and we can pull the logs to identify other potential problems.

_SOME of my bookings are pushing to the till_

Please ensure that all of your tables in Collins are named exactly the same as they are on the till. For example, if it is simply “35” on the till, but in Collins it is “Table 35”, the integration won’t work correctly.

Also, please test your internet stability and strength. If there are dips in the connection, this can prevent the integration working correctly. 

