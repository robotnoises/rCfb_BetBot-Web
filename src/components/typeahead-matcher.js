var hideClass = 'hidden';
var showClass = 'showing';

export class TypeAheadMatcher {
  constructor() { }

  formatSelectionItems(str) {
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

  matcher(items) {
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
}
