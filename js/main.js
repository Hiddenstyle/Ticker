var ticker;

function init() {
    window.removeEventListener("DOMContentLoaded", init);
    ticker = new Ticker(tickCallback);
};

function tickCallback() {
    console.log("Tick");
};
