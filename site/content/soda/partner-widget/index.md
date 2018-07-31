---
date: 2018-07-31T11:13:29+01:00
title: Soda Partner Widget
---

The Soda Widget can be used to list and sell your vouchers from your own website.

The widget is fully responsive to the container in which it is placed. This means the widget works great on both desktop and mobile screens. It also means you can either use it cover the full width of your page, or restrict it to a side bar or smaller column.

## Setting up the widget

The widget is included using javascript.  Configuration for the widget is included in the url of the JavaScript src.  

You can choose which brands, product groups or individual vouchers to list on the widget with the following parameters.

Parameter | Possible values | Default value | Description
----- | ----- | ----- | -----
brands | <Brand Id> | - | The Id of your voucher brand you wish to list
product-groups | <Product Group Id> | - | The Id of your voucher product group you wish to list 
voucher-types | <Brand Id> | - | The Id of your voucher type

For example to show all vouchers from your brand your code might look like this.

```html
  <script type="text/javascript"
          src="https://widgets.designmynight.com/soda/soda-widget.min.js?brands=5a55fa2299883b41d414b002"
          soda-partner-widget
  ></script>
```

Multiple ids of each type can be added by separating the ids with a comma. 

## Customising the Widget

Below is a list of url parameters that can be included to change the behaviour and appearance of the widget.

Option | Possible values | Default value | Description
----- | ----- | ----- | -----
skip-list | true/false | false | If set to true and only one voucher is listed on the widget, the list page will be skipped showing just the voucher's details page
hide-header | true/false | false | Hides the header on the widget
call-to-only | true/false | false | Only works in conjunction with `skip-list`.  This option will hide all the voucher's details, showing only the "Buy Now" box
tag-filters | true/false | true| If you have configured Tags for your vouchers this option will show filters your customers can use to search your list of vouchers.

### Examples

This example will only show one voucher, skipping the "list view".
```html
  <script type="text/javascript"
          src="https://widgets.designmynight.com/soda/soda-widget.min.js?voucher-type=5a55fa2299883b41d414b002&skip-list=true"
          soda-partner-widget
  ></script>
```

This example will also only show one voucher, skipping the "list view", but instead of showing all the details about a voucher, it will only show the "Buy Now" box.
```html
  <script type="text/javascript"
          src="https://widgets.designmynight.com/soda/soda-widget.min.js?voucher-type=5a55fa2299883b41d414b002&skip-list=true&call-to-only=true"
          soda-partner-widget
  ></script>
```