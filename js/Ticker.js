function Ticker() {
  console.log("Ticker");

  var _animationFrameReference,
  _doTick = false;

  this.TICKER_EVENT_TICK = new CustomEvent("Ticker.TICKER_EVENT_TICK");

  // PUBLIC METHODS ////////////////////
  // Start the ticking!!
  Ticker.prototype.startTicker = function() {
    if(_doTick === true)
    {
      return;
    };

    _doTick = true;
    _loopTicker();
  };

  // Stop the ticking!!
  Ticker.prototype.stopTicker = function() {
    if(_doTick === false)
    {
      return;
    };

    _doTick = false;
    window.cancelAnimationFrame(_animationFrameReference);
  };

  Ticker.prototype.isTicking = function() {
    return _doTick;
  };


  // PRIVATE METHODS ////////////////////
  // Loop the ticking!!
  _loopTicker = function() {
    if(_doTick) {
      _onTick();
      _animationFrameReference = window.requestAnimationFrame(_loopTicker.bind(this));
    }
  };

  // Dispatch the ticking!!
  _onTick = function() {
    // Maybe make this event re-instatniation a bit nicer...
    this.TICKER_EVENT_TICK = new CustomEvent("Ticker.TICKER_EVENT_TICK",
      {"detail":
        {'currentTick': _animationFrameReference}
      });

    window.dispatchEvent(this.TICKER_EVENT_TICK);
  };
};
