// import { Behavior } from 'aurelia-framework';
//
// export class Show {
//   static metadata(){
//     return Behavior
//       .attachedBehavior('show')
//       .withProperty('value', 'valueChanged', 'show');
//   }
//
//   static inject() { return [Element]; }
//   constructor(element) {
//     this.element = element;
//   }
//
//   valueChanged(newValue){
//     if (newValue) {
//       this.element.classList.remove('hidden');
//     } else {
//       this.element.classList.add('hidden');
//     }
//   }
// }
