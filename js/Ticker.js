function Ticker() {
    var animationFrameReference,
        frameCount = 0;
        doTick = false;

    this.TICKER_EVENT_TICK = new CustomEvent("Ticker.TICKER_EVENT_TICK");

    // Start the ticking!!
    this.startTicker = function() {
        this.doTick = true;
        this.loopTicker();
    };

    // Stop the ticking!!
    this.stopTicker = function() {
        this.doTick = false;
        window.cancelAnimationFrame(this.animationFrameReference);
    };

    // Loop the ticking!!
    this.loopTicker = function() {
        if(this.doTick) {
            this.onTick();
            this.animationFrameReference = window.requestAnimationFrame(this.loopTicker.bind(this));
        }
    };

    // Dispatch the ticking!!
    this.onTick = function() {
        // Maybe make this event re-instatniation a bit nicer...
        this.TICKER_EVENT_TICK = new CustomEvent("Ticker.TICKER_EVENT_TICK",
        {"detail":
            {'currentTick': frameCount++}
        });

        window.dispatchEvent(this.TICKER_EVENT_TICK);
    };
}
