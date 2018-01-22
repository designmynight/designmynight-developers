## CRM Systems using the Collins API  

We can give CRM systems access to the Collins API. This will enable them to pull specific data from Collins for example, your Customer Data.

**The following CRM systems currently access our API:**

* Airship
* Alchemetrics
* Acteol

## How to set up access to the Collins API

**We are able to give access to the following API endpoints:**

* [Bookings](http://developers.designmynight.com/booking-api/) - this will pull the booking data from your Collins Enquiries Page (ie every field you can see on your [CSV download from enquiry page](https://collins.uservoice.com/knowledgebase/articles/1829035-enquiries-page-csv-download))
* [Users](http://developers.designmynight.com/users-api/) - this will pull your Collins Customers Data
* Bookings Reports - this will pull your booking reports with whichever parameters you wish
* Venues - this will pull your DMN Venue reviews
* [Offers](http://developers.designmynight.com/offers-api/) - this will pull your Collins Offers (and can be used to check which offers are eligible for a given booking)

If you are looking to get API access for your CRM system, the first step is for the Account Manager at your CRM system to have a look through our [API Basics for Developers](http://developers.designmynight.com/api-basics/).

If you would then like to proceed, please contact your Collins Account Manager with full details of what you are looking to do and which specific API endpoints you are looking to use (for example, Users endpoint for Customer Data). 

You will then be given the following:

* User ID
* API Key
* Base url: https://api.designmynight.com/v4/
* Docs: developers.designmynight.com

It will then be up to your CRM system to access our API and pull the relevant data. 

## Collins/Fishbowl Integration Overview

The Collins/Fishbowl integration is set up differently as it is a fixed connection to their API, so that when new customers/bookings are added to Collins, they will automatically push to Fishbowl (if the customer has opted in for your marketing permission). The data possible to be pushed is decided by the paramaters available in your Fishbowl account.

## Setting up the Collins/Fishbowl Integration

If you are looking to set up an integration with Fishbowl, please request your **Quick Subscribe Documentation** from Fishbowl and pass on to your Collins Account Manager. 

**_Please note:_** depending on our tech roadmap, it can take our tech team up to two weeks to set up this integration. 

Once set up, data should be pushed to Fishbowl whenever a user is created/changes (in most cases, this will be when the booking is added).
So if you would like to test the integration, you can create a test booking in your Collins (and check that they are showing in Fishbowl). 

## Collins/Fishbowl Integration FAQs

**1. If we update marketing permissions within Collins, will these automatically push to Fishbowl?**

If the marketing permission is changed on Collins so that marketing permission is ticked, the customer details will automatically pushed to Fishbowl. 

If the marketing permission is changed in Collins so that marketing permission is **not** ticked, but the customer already exists as subscribed in Fishbowl, you will have to manually update your Fishbowl list.

## Collins/Zonal CRM Integration Overview

The Collins/Zonal CRM integration is set up to push bookings to the Zonal CRM when the booking has been confirmed in Collins, and again if any booking details are updated. 

The following customer and booking details are sent:

**Customer Details**

* Full Name
* Telephone
* Email
* Date of Birth
* Marketing Permission

**Booking Details:**

* Booking Reference
* Status
* Location
* Date
* Time
* Number of Guests
* Deposits
* Type

## Setting up the Collins/Zonal CRM Integration

To set this up, we require the following details from Zonal:

* URL eg https://fullers.txdlimited.co.uk/api_v1/booking
* Username
* Password
* Mapping of our venue IDs to Zonal IDs



