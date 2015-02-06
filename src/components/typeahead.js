var selectionItemClass = 'selectionItem';
var hideClass = 'hidden';
var showClass = 'showing';
var hoverClass = 'hovered';
var navigationKeyCodes = [38,40]; // up/down arrow keys, might add tab
var enterKeyCode = [13];

var getSelectionItems = function (str) {
  var items = str.split(',');
  var selectionItems = [];
  var selectionItem = function (name) {
    var si = {};
    si.name = name;
    si.visibility = 'hidden';
    return si;
  };

  for (var i = items.length; i--;) {
    selectionItems.push(Object.create(selectionItem(items[i])));
  }

  return selectionItems;
}

var typeaheadMatcher = function (items) {
  return function showMatches(q) {
    var substrRegex = new RegExp(q, 'i');

    for (var i = items.length; i--;) {
      var name = items[i].name;
      if (substrRegex.test(name) && name != q && q.length != 0) {
        items[i].visibility = showClass;
      } else {
        items[i].visibility = hideClass;
      }
    }

    return items;
  };
};

import { Behavior } from 'aurelia-framework';

export class Typeahead {

  static metadata() { return Behavior.withProperty('challengers'); }

  constructor(repo) {
    this.inputValue = '';
    this.placeholder = "enter username";
    this.selectionItems = getSelectionItems('Ravelair,4ChanAnnouncerBot,was_saying_boo_urns,cfb_betbot,gamesthatown,blroemp');
  }

  update(prop, value) {
    // Todo: Check if props exist
    this[prop] = value;
    this.filter('selectionItems', 'inputValue');
  };

  filter(itemsToFilter, filterProp) {
    // Todo: Check if props exist
    var filterStr = this[filterProp];
    var filterer = typeaheadMatcher(this.selectionItems);
    this[itemsToFilter] = filterer(filterStr);
  };
}

(function () {

  var hasClass = function (element, className) {
    if (element.classList) {
      return element.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
  }

  var removeAllOfClass = function (collection, className) {
    for (var i = collection.length; i--;) {
      collection[i].className = collection[i].className.replace(new RegExp("\\b" + className + "\\b"), '');
    }
  }

  var addClass = function (element, className) {
    element.className = element.className + ' ' + className;
  }

  var isKey = function (event, keyCodes) {
    if (typeof event["keyCode"] === 'undefined') return false;
    if (!keyCodes.includes(event["keyCode"])) return false;
    return true;
  };

  var calcIndex = function (start, length) { // Todo: direction
    var index = (start != length - 1) ? (start + 1) : 0;
    return index;
  }

  var getHoveredItemIndex = function () {
    var items = document.getElementsByClassName(showClass);
    var hoveredIdx = 0;

    if (items.length === 0) return NaN;
    if (items.length === 1) return hoveredIdx;

    for (var i = items.length; i--;) {
      if (hasClass(items[i], hoverClass)) {
          hoveredIdx = calcIndex(i, items.length);
      }
    }

    return hoveredIdx;
  };

  var doNavigation = function () {
    var idx = getHoveredItemIndex();

    if (isNaN(idx)) return;

    var items = document.getElementsByClassName(showClass);
    var target = items[idx];

    removeAllOfClass(items, hoverClass);
    addClass(target, hoverClass);
  }

  var doEnter = function () {
    document.getElementsByClassName(hoverClass)[0].click();
  }

  var handleKey = function (event) {
    if (isKey(event, navigationKeyCodes)) doNavigation();
    if (isKey(event, enterKeyCode)) doEnter();
  }

  document.onkeypress = handleKey;

}());
