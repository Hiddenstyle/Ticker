/*global document, window, alert, console, require, CustomEvent*/
/**
* Ticker dispatches a TICKER_EVENT_TICK event via the window object.
* @class
*/

function Ticker() {
    'use strict';
    var me = this,
        animationFrameReference,
        doTick = false;

    me.TICKER_EVENT_TICK = "Ticker.TICKER_EVENT_TICK";

    /**
    * Start the ticking!!
    */
    Ticker.prototype.startTicker = function () {
        // If already started - return
        if (me.isTicking()) {
            return;
        }

        doTick = true;
        me.loopTicker();
    };

    /**
    * Stop the ticking!!
    */
    Ticker.prototype.stopTicker = function () {
        // If already stopped - return
        if (!me.isTicking()) {
            return;
        }

        doTick = false;
        window.cancelAnimationFrame(animationFrameReference);
    };

    /**
    * Is it ticking!!
    * @returns {Boolean}
    */
    Ticker.prototype.isTicking = function () {
        return doTick;
    };

    /**
    * Loop the ticking!!
    * @private
    */
    Ticker.prototype.loopTicker = function () {
        if (doTick) {
            me.onTick();
            animationFrameReference = window.requestAnimationFrame(me.loopTicker);
        }
    };

    /**
    * Dispatch the ticking!!
    * @private
    */
    Ticker.prototype.onTick = function () {
        // Maybe make this event re-instatniation a bit nicer...
        var tickEvent = new CustomEvent(me.TICKER_EVENT_TICK,
                    {"detail":
                        {'currentTick': animationFrameReference}
                    }
                );

        window.dispatchEvent(tickEvent);
    };
}
