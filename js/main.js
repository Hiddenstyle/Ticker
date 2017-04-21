
function init() {
    this.ticker = new Ticker();
    window.addEventListener(ticker.TICKER_EVENT_TICK.type, reactToTick, false);
};

function reactToTick() {
    console.log("main.js::reactToTick");
}
