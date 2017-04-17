/*global hljs */
/*global WebFont */

(function(window, document, undefined) {
    'use strict';

    hljs.initHighlightingOnLoad();

    WebFont.load({
        google: {
            families: ['Roboto:400,700']
        }
    });
})(window, document);

