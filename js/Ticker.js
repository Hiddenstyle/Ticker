function Ticker(callback) {
    this.animationFrameReference;
    this.doTick;
    this.EVENT_TICK = new Event("Ticker.EVENT_TICK");
    this.callbackFucntion = callback;

    // Start the ticking!!
    this.startTicker = function() {
        this.doTick = true;
        window.addEventListener(ticker.EVENT_TICK.type, this.callbackFucntion);
        this.tickerLoop();
    };

    // Stop the ticking!!
    this.stopTicker = function() {
        this.doTick = false;
        window.removeEventListener(ticker.EVENT_TICK.type, this.callbackFucntion);
        window.cancelAnimationFrame(this.animationFrameReference);
    };

    // Loop the ticking!!
    this.tickerLoop = function() {
        if(this.doTick) {
            this.onTick();
            this.animationFrameReference = window.requestAnimationFrame(this.tickerLoop.bind(this));
        }
    };

    // React to the ticking!!
    this.onTick = function() {
        window.dispatchEvent(this.EVENT_TICK);
    };
}
