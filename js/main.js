
function init() {
  console.log("init");
    this.ticker = new Ticker();
    window.addEventListener(this.ticker.TICKER_EVENT_TICK.type, handleTick, false);
};

function handleTick(e) {
    console.log(e.detail.currentTick);
}
