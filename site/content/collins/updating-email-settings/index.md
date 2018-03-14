## Updating your Email Settings

If you are using our [Collins Mail](https://collins.uservoice.com/knowledgebase/articles/563052-extra-feature-collins-mail-how-to-video) bolt-on, you do **_not_** have to action the below.

For all other clients, you need to explicitly say that Collins is allowed to send emails for your domain/on your behalf. 

This is the only way that we can guarantee that emails deliver correctly to you and customers.

The most common way of doing this is to set up an 'SPF record' and DKIM for your domain (@yourvenue.com).

This is something your web agency or digital team should be able to do for you and should take no more than 10 minutes to change.

## How to update your Email Settings

To update your email settings, you **must** complete all three steps:

**1. Update your SPF Settings**

`Spf.mandrillapp.com`

If your current SPF setting is:
`v=spf1 include:spf.protection.outlook.com -all`

You just need to add `include:spf.mandrillapp.com` so your TXT record should change to;

`v=spf1 include:spf.protection.outlook.com include:spf.mandrillapp.com -all`

If you **do not** already have an SPF record setup then you should add something similar to the following;

`v=spf1 include:spf.mandrillapp.com ?all`

**2. Update your DKIM Settings**

a. Add a new TXT record with the name `mandrill._domainkey.yourdomain.com` (just replace yourdomain.com with the domain you're setting up).

b. Set the value for the record to be one of the options listed below. There are two options because the record contains semicolons. Some DNS providers escape semicolons for you while others require you to do it when you set up the record.

**With semicolons escaped:**

```v=DKIM1\; k=rsa\; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/mRwSRMAocV/hMB3jXwaHH36d9NaVynQFYV8NaWi69c1veUtRzGt7yAioXqLj7Z4TeEUoOLgrKsn8YnckGs9i3B3tVFB+Ch/4mPhXWiNfNdynHWBcPcbJ8kjEQ2U8y78dHZj1YeRXXVvWob2OaKynO8/lQIDAQAB\;```

**With semicolons unescaped:**

```v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/mRwSRMAocV/hMB3jXwaHH36d9NaVynQFYV8NaWi69c1veUtRzGt7yAioXqLj7Z4TeEUoOLgrKsn8YnckGs9i3B3tVFB+Ch/4mPhXWiNfNdynHWBcPcbJ8kjEQ2U8y78dHZj1YeRXXVvWob2OaKynO8/lQIDAQAB;```

**3. Verify your settings**

Once the SPF and DKIM settings have been updated, please email your Collins Account Manager. 

We will be able to check on our side whether these have been updated correctly (and will be able to give feedback if it has been set up incorrectly).

You will then receive an email from '**Mandrill Client Services**'. Please forward this to your Collins Account Manager. 

We will then be able to complete the final step of verifying your domain. 

Once your domain has been verified, let us know which email address (of your verified domain) you would like to use to communicate with customers. We will add this to your Collins admin settings for you. 

**_Important to note_:** 

If this is not completed, Collins will not be able to send any outbound emails for you. They will get blocked.

You cannot use public mail clients (hotmail, gmail etc..) to be your "from email address" in Collins. It should always be your domain [nick@collinsbar.com not collinsbar@gmail.com].

## Updating Email Settings FAQs

**1. How to update the email settings for a Wix account**

Here are guides to help you update your [DKIM Settings](https://support.wix.com/en/article/adding-a-dkim-txt-record) and [SPF Settings](https://support.wix.com/en/article/adding-or-updating-spf-records-in-your-wix-account) for a Wix account. 

**2. How to update the email settings for a Squarespace account**

Here's a guide to help you update your [DKIM and SPF Settings](http://help.jilt.com/send-jilt-emails-from-your-own-domain/update-your-domain-provider-s-dns-settings/add-spf-and-dkim-records-to-squarespace).

