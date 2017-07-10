/*global document, window, alert, console, require, CustomEvent, Ticker */
var ticker;

function handleTick(e) {
    'use strict';
    console.log(e.detail.currentTick);
}

function init() {
    'use strict';
    ticker = new Ticker();
    window.addEventListener(ticker.TICKER_EVENT_TICK, handleTick, false);
}
