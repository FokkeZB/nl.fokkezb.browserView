# BrowserView Widget
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
* Download the repository of the [widget as a ZIP file](https://github.com/FokkeZB/nl.fokkezb.browserView/archive/master.zip).
* Move the file to your project's root folder.
* Unzip the file and you'll find the widget under `app/widgets/nl.fokkezb.browserView`.
* Add the widget as a dependency to your `app/config.json` file like so:

```javascript
	…
	"dependencies": {
		"nl.fokkezb.browserView":"1.0"
	}
```

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