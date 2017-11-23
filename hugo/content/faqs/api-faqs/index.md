# API FAQs

**We are creating our own check out and would like to add customer fields eg 'Comments'. How do we include this as part of our check out?**

You will just need to pass the value to the bookings API with the key `custom_field_value`

**We are creating our own check out using the Collins API. We know that we have to still take payment through the Collins iFrame. How do we customise the payment page?**

1. Tell us a URL of a stylesheet (that has to be on an HTTPS connection for us to load it) and what you want to use it for (eg app/website)

2. We add this CSS URL to our system for your venue group, with a name eg app

3. When you add the form to your page, you add some code to tell our page which CSS to load, eg

`<script>
  DMN.val('stylesheet', 'app');
  </script>`

4. When the booking form loads, it will also load your CSS so you can override whatever is on the book page. You should add `stylesheet=app` to the end of the URL that you will be sending the user to (to take payment).

