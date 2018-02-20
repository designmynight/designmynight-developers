## API Troubleshooting
If you are using our API and think that something is not working correctly, we will require both the full request and full response from your web developer before we can look into it for you:  

* Full Request - example [here](https://drive.google.com/file/d/0B-baIeSCNY2BcmNFZGZVVWFpbmZDdEhBbUhqMF9MaHdYVl84/view?usp=sharing)
* Full Response - example [here](https://drive.google.com/file/d/0B-baIeSCNY2BdjJ0WFpqaEJiRE8xVDN3VWEwaE1fTkNiTDZ3/view?usp=sharing)

This is so that our tech team can effectively look into the issue for you. Without the above, we will not be able to assist.

## API FAQs

**1. We are creating our own check out and would like to add customer fields eg 'Comments'. How do we include this as part of our check out?**

You will just need to pass the value to the bookings API with the key `custom_field_value`

**2. We are creating our own check out using the Collins API. We know that we have to still take payment through the Collins iFrame. How do we customise the payment page?**

1. Tell us a URL of a stylesheet (that has to be on an HTTPS connection for us to load it) and what you want to use it for (eg app/website)

2. We add this CSS URL to our system for your venue group, with a name eg app

3. When you add the form to your page, you add some code to tell our page which CSS to load, eg

`<script>
  DMN.val('stylesheet', 'app');
  </script>`

4. When the booking form loads, it will also load your CSS so you can override whatever is on the book page. You should add `stylesheet=app` to the end of the URL that you will be sending the user to (to take payment).

