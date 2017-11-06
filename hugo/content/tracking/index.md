Added another line

## There are 3 ways now you can look at tracking:

1) Putting Google/Facebook code on the first enquire button in the CSS (this isn't tracking to completion but the drop off rate is about 10% on average from loading up the iframe so a quick and easy way to get a pretty accurate reading). Useful guide for developers here. 

2) You can create a custom return URL for users to be directed to when they complete their booking. That way you'd be responsible for displaying all the info to the users and having your own confirmation page not the DMN one we currently have, but you would have control over your own analytics etc completely.

To do this you need to create the return URL on the  venue site then set it using custom script after your partner form:

```
<script>
  DMN.val('return_url', 'https://www.your-return-url.com/booking-complete');
</script> 
```

The booking info will be passed back in the URL.​

An example of a venue that has done this is Dirty Martini - Dirty Martini Thank You 

​3) Use our API to build out your own checkout which you can track completely as you want then you can do whatever you want - big tech build - developers.designmynight.com
