/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('TweetView', function(Y, NAME) {

/**
 * The TweetView module.
 *
 * @module TweetView
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            var screenName = ac.params.merged('screenName');
            ac.assets.addCss('./style.css');
            if (! screenName) {
                ac.done({screenName: 'Nobody'});
                return;
            }
            ac.models.twitter.getTweetsFor(screenName, function(err, tweets) {
                ac.done({
                    screenName: screenName,
                    tweets: tweets
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito']});
