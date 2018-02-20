---
date: 2016-04-30T21:38:53+01:00
title: API Basics
---

{{<note title="Before you begin">}}
Contact your account manager to request an API key. Your unique ID and key must be passed with every request.
{{</note>}}

## URL

The API is accessible through the domain `api.designmynight.com`. All requests should be made over HTTPS.


## Version

All API URLs start with the version of the API that you are using. The current version of the API is **v4**, so all API URLs work from the base URL `https://api.designmynight.com/v4/`. 


## Authorization

You must provide your App ID and key with every request that you make to the API. To do this, set an HTTP Authorization header on your requests that consists of your ID, followed by a colon, followed by your key, eg `abc123:xyz789`.

```bash
$ curl -H "Authorization: abc123:xyz789" https://api.designmynight.com
```


## Request format

Data may be sent to the server either through parameters appended to the url, or as a JSON object included in the request body. Where JSON is used you should also include a header specifying the content type as `application/json`

```bash
$ curl -H "Content-Type: application/json" -d '{"first_name": "Nicholas"}' https://api.designmynight.com
```


## Response format

API responses are in JSON format. Where there are exceptions to this rule, the documentation for the endpoint will make this clear. The JSON response body is an object consisting of the following keys:

Key | Notes
----|----
payload | The main body of the response
status | The HTTP status code of the response
requestTime | The time that the request was made, in London time
responseTime | The time that the response was sent, in London time
statusText | The HTTP status message for the response
url | The URL where the request was made
method | The HTTP method that was used for the request, eg `POST`
params | An array of parameters that were received with the request


## Status codes

The following HTTP status codes may be set for an API response:

Status code | Explanation
----- | -----
200 | The request was successful
400 | The server cannot process the request due to a client error
401 | Authorization credentials were required but not found
403 | The request cannot be carried out using the given credentials
404 | The requested resource was not found
405 | The HTTP method used was not allowed in this context
429 | A request rate limit was exceeded
501 | The requested method is not implemented
503 | A general server error occurred


## Rate limits

All requests to the API are rate limited based on your App ID. You should check the headers for the current status of any rate limits:

Header Name | Description
----- | -----
X-RateLimit-Limit | The maximum number of requests that the consumer is permitted to make per hour
X-RateLimit-Remaining | The number of requests remaining in the current rate limit window
X-RateLimit-Reset | The time at which the current rate limit window resets, in ISO 8601 format

If you go over the rate limit you will receive an error response with the status code `429: Too Many Requests`. 
