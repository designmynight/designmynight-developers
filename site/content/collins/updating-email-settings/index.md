## Updating your Email Settings

If you are not using [Collins Mail](https://collins.uservoice.com/knowledgebase/articles/563052-extra-feature-collins-mail-how-to-video) you will need to make a slight update to your email settings to say that Collins is allowed to send emails for your Domain/on your behalf.

This is the only way to guarantee that emails from Collins, confirmation/cancellation emails for example, deliver correctly to/from you and your customers.

*If this is not completed, Collins will not be able to send any outbound emails for you. They will get blocked.*

To do so, all you have to do is update your Domain settings (DNS Records).

*It’s also important to note that you cannot use public email addresses for this. It should only be your Domain (e.g. collins@collinsbar.com - not collinsbar@hotmail.co.uk).*

There’s just 2 records that need adding/Editing - Your DKIM and your SPF records. 

*Different Domains have slightly different set ups, so please see the guides below on how to update email settings for the most popular hosts:*

**Go-Daddy:**

Adding a new DKIM: https://uk.godaddy.com/help/add-a-txt-record-19232

Adding a new SPF: https://uk.godaddy.com/help/add-an-spf-record-19218 / Editing your existing SPF: https://uk.godaddy.com/help/change-an-spf-record-19219

**Wix:** 

Adding a new DKIM:: https://support.wix.com/en/article/adding-dns-records-in-your-wix-account

Adding/Editing SPF: https://support.wix.com/en/article/adding-or-updating-spf-records-in-your-wix-account

**Squarespace:**

https://support.squarespace.com/hc/en-us/articles/360002101888


**1&1 Ionos:**
https://www.ionos.co.uk/help/domains/configuring-txt-and-srv-records/managing-txt-records/  

## How to update your Email Settings

**Step 1) DKIM SETTINGS**

a) Add a new TXT record with the name mandrill._domainkey.yourdomain.com (just replace yourdomain.com with the domain name you’re setting up). Some Domains automatically fill your Domain name for you here - GoDaddy for example, where you just need to put mandrill._domainkey. for the name of the TXT record.
b) You’ll then need to set the value for the record to be either:

With semicolons escaped:

v=DKIM1\; k=rsa\; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/mRwSRMAocV/hMB3jXwaHH36d9NaVynQFYV8NaWi69c1veUtRzGt7yAioXqLj7Z4TeEUoOLgrKsn8YnckGs9i3B3tVFB+Ch/4mPhXWiNfNdynHWBcPcbJ8kjEQ2U8y78dHZj1YeRXXVvWob2OaKynO8/lQIDAQAB\;
With semicolons unescaped:

v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/mRwSRMAocV/hMB3jXwaHH36d9NaVynQFYV8NaWi69c1veUtRzGt7yAioXqLj7Z4TeEUoOLgrKsn8YnckGs9i3B3tVFB+Ch/4mPhXWiNfNdynHWBcPcbJ8kjEQ2U8y78dHZj1YeRXXVvWob2OaKynO8/lQIDAQAB;
Some Domain hosts escape the semicolons for you whilst others require you to do it when you set the record up.  

**Step 2) SPF Settings**  
If your current SPF setting is:

If you currently have an SPF record set up already, don’t delete it, you just need to add include:spf.mandrillapp.com after v=spf1, in that record. For example, it might look like:

v=spf1 include:spf.protection.outlook.com include:spf.mandrillapp.com -all

If you don’t currently have an SPF record set up, you’ll need add the following as a whole new SPF record: 

v=spf1 include:spf.mandrillapp.com ?all

**Once the SPF and DKIM settings have been updated, please email your Collins Account Manager to confirm.**

We will be able to check on our side whether these have been updated correctly (and will be able to give feedback if it has been set up incorrectly).

You will then receive an email from ‘Mandrill Client Services’. Please forward this to your Collins Account Manager.

We will then be able to complete the final step of verifying your domain.

Once your domain has been verified, let us know which email address (from your verified domain) you would like to use to communicate with customers. We will add this to your Collins admin settings for you and this will be your customer facing email address in Collins.

