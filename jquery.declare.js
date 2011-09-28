/*
 * 'declare' plugin for jQuery
 *
 * Copyright (c) 2011 Acatl Pacheco https://github.com/acatl/jquery.declare
 * Licensed under the MIT License.
 * http://jquery.org/license
 */
(function ($) {
	$.extend({
		declare: function (namespace, object) {
			var scopes = namespace.split(".");
			var scopeLength = scopes.length;
			var scopeObject = window;
			if (scopeLength == 0) return false;
			for (var i = 0; i < scopeLength; i++) {
				var scope = scopes[i];
				if (i != scopeLength - 1) {
					if (!typeof scopeObject[scope] != "undefined") {
						scopeObject[scope] = {};
					}
					scopeObject = scopeObject[scope];
				} else {
					if (!scopeObject.hasOwnProperty(scope)) {
						scopeObject[scope] = {};
					}
					switch (typeof object) {
					case "object":
						$.extend(scopeObject[scope], object);
						break;
					default:
						scopeObject[scope] = object;
					}

				}
			}
		}
	});
})(jQuery);