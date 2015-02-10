import { Bet } from '../modules/bet';
import { TypeAheadMatcher } from './typeahead-matcher';
import { TypeAheadUI } from './typeahead-ui';

export class Typeahead {

  static inject() { return [Bet, TypeAheadMatcher, TypeAheadUI]; }

  constructor(parent, typeahead, ui) {
    this.inputValue = '';
    this.placeholder = "challenger's username";
    this.typeahead = typeahead;
    this.selectionItems = this.typeahead.formatSelectionItems(parent.betData['potential_challengers']);

    // This might be a bad pattern
    ui.load();
  }

  update(prop, value) {
    // Todo: Check if props exist
    this[prop] = value;
    this.filter('selectionItems', 'inputValue');
  };

  filter(itemsToFilter, filterProp) {
    // Todo: Check if props exist
    var filterStr = this[filterProp];
    var filterer = this.typeahead.matcher(this.selectionItems);
    this[itemsToFilter] = filterer(filterStr);
  };
}
