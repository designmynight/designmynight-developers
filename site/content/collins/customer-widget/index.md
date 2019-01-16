# Customer widget

The Collins customer widget provides an easy way for customers to add themselves to your database. The widget is easy to add to your website, and can be styled to match your site's design.

The flow for the customer is:
1. Customer visits your website and sees the signup form you have added
2. Customer fills in their details
3. We send the customer an email to confirm their details
4. Customer clicks a link in the email to confirm
5. Customer is taken back to your website where they are shown a message confirming their signup

## Embedding the widget

To add the widget to your site, insert the following code where you would like the form to appear.

```
<script
  type="text/javascript"
  src="https://widgets.designmynight.com/customer-signup/widget.min.js"
  venue="YOUR_VENUE_ID"
  venue-group="YOUR_VENUE_GROUP_ID">
</script>
```

## Widget options

The following values can be included as part of the script tag to change how the widget works. Speak to your account manager if you're unsure of the IDs to use for venue or venue group.

Option | Explanation
-----|-----
`venue-group` | (Required) Your venue group's ID
`venue` | If included, this venue will be added as an 'associated venue' for the customer
`hide-phone` | Include and set to `true` to hide the 'phone' option from the form
`return-url` | Specify a custom URL to return the customer to when they click in the email to confirm sign up. <br> See [Customising the confirmation flow](#customising-the-confirmation-flow) below for more details.
`on-confirm` | Provide an optional Javascript callback to be run when a customer's sign up is confirmed <br> See [Customising the confirmation flow](#customising-the-confirmation-flow) below for more details.

## Customising the appearance of the form

The customer signup widget comes with some basic styling but will also pick up styles from your website. To customise the appearance of the widget further you can target the following CSS selectors.

Selector | Explanation
-----|-----
`.dmn-customer-widget` | The outer container for the widget
`.dmn-customer-widget .form-group` | Each group of inputs including a label and one or more inputs
`.dmn-customer-widget label` | Labels used for all inputs
`.dmn-customer-widget input[type=text]` | Text inputs for first and last name
`.dmn-customer-widget input[type=email]` | Email input
`.dmn-customer-widget input[type=phone]` | Phone input
`.dmn-customer-widget .dmn-customer-widget-submit button` | 'Sign up' submit button
`.dmn-customer-widget .dmn-form-overlay` | The overlay used to show loading and submitted messages
`.dmn-customer-widget .dmn-confirmation-overlay` | The overlay used to show the 'signup confirmed' message

## Customising the confirmation flow

By default, when a customer clicks the email link to confirm their details, they will be taken back to the page on your website where they first signed up. When the widget loads it will recognise that the customer has come from the confirmation link and will complete the sign up. The widget will display a full-screen confirmation on top of your website content (customisable with CSS as above) for a few seconds before the customer is returned to your website as normal.

You can customise this flow in two ways: firstly you can provide a custom return URL that the customer should be taken to when confirming their details, rather than returning to the page where they originally signed up. You can do this by providing the `return-url` value as part of the widget `<script>` tag. 

Secondly, you can register a Javascript function that should be called when the customer confirmation has completed. You can do this by providing the name of the function as the `on-confirm` value in the widget `<script>` tag. The function you provide will be passed one argument, which is an object containing the customer's details. Your function can return `false` to prevent the default confirmation overlay from appearing.