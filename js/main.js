function init() {
    this.ticker = new Ticker();
    window.addEventListener(ticker.TICKER_EVENT_TICK, handleTick, false);
};

function handleTick(e) {
    console.log(e.detail.currentTick);
}
