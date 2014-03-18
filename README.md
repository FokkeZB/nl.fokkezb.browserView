> **NOTE:** This widget hasn't been updated for a long time and might not work

# BrowserView Widget [![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)

## Overview
The *BrowserView* widget implements a simple in-app browser for [Titanium](http://www.appcelerator.com/platform) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) by [Appcelerator](http://www.appcelerator.com).

## Features
* Open an URL in a window containing a webview.
* The window's title will be automatically updated with document's title.
* Open the URL in the platform's default browser using the action button.

## Future work
* Add back, forward and refresh buttons.
* Add more options to the action button (share, copy link…).
* Add more customization options.

## Quick Start

### Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/nl.fokkezb.browserView)
Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install nl.fokkezb.browserView`

### Use it

* Use the widget in a controller:

```javascript
var win = Alloy.createWidget('nl.fokkezb.browserView', null, {
	url: 'http://appcelerator.com'
}).getView();
win.open();
```

* **OR** require it in a view:

```xml
<Widget src="nl.fokkezb.browserView" url="http://appcelerator.com" />
```

## Changelog
* 1.0.1: Fixed for Alloy 1.0GA
* 1.0: Initial version
