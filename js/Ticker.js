/**
* Ticker.js
* Starts a requestAnimationFrame loop that dispatches the ticker event through the window object.
*/

function Ticker() {
    var frameReference,
        doTick = false;

    this.TICKER_EVENT_TICK = new Event("Ticker.TICKER_EVENT_TICK");

    // Start the ticking!!
    this.startTicker = function() {
        this.doTick = true;
        this.loopTicker();
    };

    // Stop the ticking!!
    this.stopTicker = function() {
        this.doTick = false;
        window.cancelAnimationFrame(this.frameReference);
    };

    // Loop the ticking!!
    this.loopTicker = function() {
        if(this.doTick) {
            this.onTick();
            this.frameReference = window.requestAnimationFrame(this.loopTicker.bind(this));
        }
    };

    // Dispatch to the ticking!!
    this.onTick = function() {
        window.dispatchEvent(this.TICKER_EVENT_TICK);
    };
}
