var selectionItem = function (name, value) {
  var si = {};

  si.name = name;
  si.hide = 'hidden';

  return si;
};

var items = [
  Object.create(selectionItem("one")),
  Object.create(selectionItem("two")),
  Object.create(selectionItem("three")),
  Object.create(selectionItem("four"))
];

var typeaheadMatcher = function (items) {
  return function findMatches(q) {
    var substrRegex = new RegExp(q, 'i');
    for (var i = items.length; i--;) {
      if (substrRegex.test(items[i].name)) {
        items[i].hide = '';
      } else {
        items[i].hide = 'hidden';
      }
    }
    return items;
  };
};

var filter = function (query) {
  if (query.length === 0) return items;

  var matcher = typeaheadMatcher(items);

  return matcher(query);
}

export class Typeahead {
  constructor() {
    this.inputValue = '';
    this.inputValue2 = 'init';
    this.placeholder = "enter username";
    this.selectionItems = items;
  }

  update(prop) {
     // this[prop] = 'test';
     this.inputValue2 = 'hey';
  };

  filter(prop) {
    var str = this.inputValue;
    if (str.length === 0) return;
    this[prop] = filter(str);
  };
}
