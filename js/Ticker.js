/**
* Ticker dispatches a TICKER_EVENT_TICK event via the window object.
* @class
*/

function Ticker() {
    var me = this,
        _animationFrameReference,
        _doTick = false;

    me.TICKER_EVENT_TICK = "Ticker.TICKER_EVENT_TICK";

    /**
    * Start the ticking!!
    */
    Ticker.prototype.startTicker = function() {
        // If already started - return
        if (me.isTicking()) return;

        _doTick = true;
        me._loopTicker();
    };

    /**
    * Stop the ticking!!
    */
    Ticker.prototype.stopTicker = function() {
        // If already stopped - return
        if (!me.isTicking()) return;

        _doTick = false;
        window.cancelAnimationFrame(_animationFrameReference);
    };

    /**
    * Is it ticking!!
    * @returns {Boolean}
    */
    Ticker.prototype.isTicking = function() {
        return _doTick;
    };

    /**
    * Loop the ticking!!
    * @private
    */
    Ticker.prototype._loopTicker = function() {
        if(_doTick) {
            me._onTick();
            _animationFrameReference = window.requestAnimationFrame(me._loopTicker);
        }
    };

    /**
    * Dispatch the ticking!!
    * @private
    */
    Ticker.prototype._onTick = function() {
        // Maybe make this event re-instatniation a bit nicer...
        var tickEvent = new CustomEvent(me.TICKER_EVENT_TICK,
            {"detail":
                {'currentTick': _animationFrameReference}
            });

        window.dispatchEvent(tickEvent);
    };
};
