var GLOBAL = {};

GLOBAL.keyCode = {
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  LEFT: 37,
  LMB: 0,
  HOME: 36,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  SPACE: 32,
  TAB: 9,
  ESCAPE: 27,
  ENTER: 13,
  NUMPAD_ENTER: 108
};

GLOBAL.isFunction = function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

GLOBAL.stopEvent = function stopEvent(event, mode) {
  if (arguments.length === 0 || !event) {
    return;
  } else {
    if ((arguments.length == 1 || ('' + mode).toLowerCase().search(/(^|\|)propagation($|\|)/) != -1) && GLOBAL.isFunction(event.stopPropagation)) {
      event.stopPropagation();
    }
    if ((arguments.length == 1 || ('' + mode).toLowerCase().search(/(^|\|)default($|\|)/) != -1) && GLOBAL.isFunction(event.preventDefault)) {
      event.preventDefault();
    }
    if ((arguments.length == 2 && ('' + mode).toLowerCase().search(/(^|\|)immediate($|\|)/) != -1) && GLOBAL.isFunction(event.stopImmediatePropagation)) {
      event.stopImmediatePropagation();
    }
  }
};

GLOBAL.parseData = function parseData(data) {
  if (typeof(data) === 'object') {
    return data;
  }

  try {
    data = JSON.parse(data.replace(/'/gim, '"'));
  } catch (e) {
    data = {};
  }

  return data;
};

GLOBAL.parseCallbacks = function parseCallbacks(data, callbacks) {
  var prop;

  data = GLOBAL.parseData(data);

  for (prop in data) {
    if (callbacks[data[prop]]) {
      data[prop] = callbacks[data[prop]];
    }
  }

  return data;
};

GLOBAL.parseEvents = function parseEvents($elem, events, handlers) {
  var event,
      handler;

  events = GLOBAL.parseData(events);

  for (event in events) {
    if (handler = handlers[events[event]]) {
      $elem.on(event, handler);
    }
  }
};

GLOBAL.getDocHeight = function getDocHeight() {
  const D = document;

  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
};

GLOBAL.dispatchEvent = function dispatchEvent(elem, eventType, bubble) {
  let event = document.createEvent && document.createEvent('Event');

  if (event && event.initEvent) {
    event.initEvent(eventType, false, false);

    elem.dispatchEvent(event);
  } else {
    elem.dispatchEvent(new Event(eventType));
  }

  if (bubble && elem.parentNode) {
    GLOBAL.dispatchEvent(elem.parentNode, eventType, bubble);
  }
};

GLOBAL.getWindowHeight = function getWindowHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

GLOBAL.animate = function animate(object, params, duration, callback) {
  var frame_rate = 0.06; // 60 FPS
  var paramsData = {};
  var re = /(-*\d*)(px|%*)/i;

  for (var propertyName in params) {
    var parsedNewParam = params[propertyName].match(re);
    paramsData[propertyName] = {finished: false};
    paramsData[propertyName].newValue = parsedNewParam[1];
    paramsData[propertyName].newUnit = parsedNewParam[2];
    var currentProperty = window.getComputedStyle(object, null).getPropertyValue(propertyName);
    var parsedCurrentParam = currentProperty.match(re);
    paramsData[propertyName].currentValue = parsedCurrentParam[1];
    paramsData[propertyName].currentUnit = parsedCurrentParam[2];

    //translate value to new unit
    if (paramsData[propertyName].newUnit !== paramsData[propertyName].currentUnit) {
      var elWidth = object.innerWidth || object.clientWidth;
      if (paramsData[propertyName].newUnit === '%' && paramsData[propertyName].currentUnit === 'px') {
        paramsData[propertyName].currentValue = paramsData[propertyName].currentValue * 100 / elWidth;
        paramsData[propertyName].currentUnit = paramsData[propertyName].newUnit;
      }

      if (paramsData[propertyName].newUnit === 'px' && paramsData[propertyName].currentUnit === '%') {
        paramsData[propertyName].currentValue = paramsData[propertyName].currentValue * elWidth / 100;
        paramsData[propertyName].currentUnit = paramsData[propertyName].newUnit;
      }

    }
  }

  for (var prop in paramsData) {
    if (paramsData[prop].newUnit !== paramsData[prop].currentUnit) {
      continue;
    }

    paramsData[prop].frame = 0;
    paramsData[prop].delta = (paramsData[prop].newValue - paramsData[prop].currentValue) / duration / frame_rate;

    paramsData[prop].handle = setInterval(function(currentProp) {
      return function() {
        paramsData[currentProp].frame++;
        paramsData[currentProp].value = paramsData[currentProp].currentValue - 0 + paramsData[currentProp].delta * paramsData[currentProp].frame;
        object.style[currentProp] = Math.round(paramsData[currentProp].value - 0) + paramsData[currentProp].newUnit;

        if (Math.round(paramsData[currentProp].value) == paramsData[currentProp].newValue) {
          clearInterval(paramsData[currentProp].handle);
          paramsData[currentProp].finished = true;
          checkFinish();
        }
      }
    }(prop), 1 / frame_rate);
  }

  var checkFinish = function() {
    var allAnimationsFinished = true;
    for (var prop in paramsData) {
      if (!paramsData[prop].finished) {
        allAnimationsFinished = false;
        break;
      }
    }

    if (allAnimationsFinished
      && callback
      && GLOBAL.isFunction(callback)) {
      callback.apply();
    }
  }
};

export default GLOBAL;

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];

      var k = 0;

      while (k < len) {
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        k++;
      }

      return undefined;
    }
  });
}

if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i,
      el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}

;(function(window) {
  // exit if the browser implements that event
  if ("onhashchange" in window) { return; }

  var location = window.location,
    oldURL = location.href,
    oldHash = location.hash;

  // check the location hash on a 100ms interval
  setInterval(function() {
    var newURL = location.href,
      newHash = location.hash;

    // if the hash has changed and a handler has been bound...
    if (newHash != oldHash && typeof window.onhashchange === "function") {
    console.log('check true')
      // execute the handler
      window.onhashchange({
        type: "hashchange",
        oldURL: oldURL,
        newURL: newURL
      });

      oldURL = newURL;
      oldHash = newHash;
    }
  }, 100);

})(window);
