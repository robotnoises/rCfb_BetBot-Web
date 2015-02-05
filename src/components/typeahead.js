var selectionItem = function (name, value) {
  var si = {};

  si.name = name;
  si.value = value;
  si.style = 'hidden selectionItem';

  return si;
};

var items = [
  Object.create(selectionItem("one", "1")),
  Object.create(selectionItem("two", "2")),
  Object.create(selectionItem("three", "3")),
  Object.create(selectionItem("four", "4"))
];

var typeaheadMatcher = function (items) {
  return function findMatches(q) {
    var substrRegex = new RegExp(q, 'i');
    for (var i = items.length; i--;) {
      if (substrRegex.test(items[i].name)) {
        items[i].style = 'selectionItem';
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
    this.challengerLookupValue = 'on';
    this.placeholder = "enter username";
    this.selectionItems = items;
  }
}
