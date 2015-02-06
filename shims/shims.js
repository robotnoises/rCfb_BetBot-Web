// Object.create
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  }
}

// Similar to jQuery's .hasClass(...)
// if (typeof Array.hasClass !== 'function') {
//   Array.hasClass = function (className) {
//     var that = this;
//
//     if (that.classList) {
//       that.classList.contains(className);
//     } else {
//       new RegExp('(^| )' + className + '( |$)', 'gi').test(that.className);
//     }
//   }
// }
