// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"PLSC":[function(require,module,exports) {
window.HOST_TYPE = '2';
$(document).ready(function () {
  function addmap() {
    // ????????????API??????
    var map = new BMap.Map("aboutmap"); // ??????Map??????

    var point = new BMap.Point(119.172522, 26.069421);
    map.centerAndZoom(point, 15); // ???????????????,????????????????????????????????????

    var marker = new BMap.Marker(point); // ????????????

    map.addOverlay(marker); // ???????????????????????????
    //????????????????????????
    // map.addControl(
    //   new BMap.MapTypeControl({
    //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
    //   })
    // );

    map.setCurrentCity("??????"); // ??????????????????????????? ????????????????????????
    // map.enableScrollWheelZoom(true); //????????????????????????
    // var top_left_control = new BMap.ScaleControl({
    //   anchor: BMAP_ANCHOR_TOP_LEFT,
    // }); // ???????????????????????????
    // var top_left_navigation = new BMap.NavigationControl(); //??????????????????????????????????????????
    // var top_right_navigation = new BMap.NavigationControl({
    //   anchor: BMAP_ANCHOR_TOP_RIGHT,
    //   type: BMAP_NAVIGATION_CONTROL_SMALL,
    // }); //??????????????????????????????????????????

    /*????????????type???????????????:
    BMAP_NAVIGATION_CONTROL_SMALL????????????????????????????????????BMAP_NAVIGATION_CONTROL_PAN:????????????????????????BMAP_NAVIGATION_CONTROL_ZOOM????????????????????????*/
    //????????????????????????
    // map.addControl(top_left_control);
    // map.addControl(top_left_navigation);
    // map.addControl(top_right_navigation);
  }

  addmap();
});
},{}]},{},["PLSC"], null)
//# sourceMappingURL=/about.5feac908.js.map