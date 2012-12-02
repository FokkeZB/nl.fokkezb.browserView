var args = arguments[0] || {};

$.window.rightNavButton = $.action;

$.action.on('click', function () {
	Ti.Platform.openURL($.webView.url);
});

$.webView.on('load', function (e) {
	var title = $.webView.evalJS('document.title');
	
	if (typeof title === 'string' && title.length > 0) {
		$.window.title = title;
	} else if (e.url) {
		$.window.title = e.url;
	} else {
		$.window.title = args.url;
	}
});

$.webView.url = args.url;