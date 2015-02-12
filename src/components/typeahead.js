import { Bet } from '../modules/bet';
import { TypeAheadMatcher } from './typeahead-matcher';
import { TypeAheadUI } from './typeahead-ui';

export class Typeahead {

  static inject() { return [Bet, TypeAheadMatcher, TypeAheadUI]; }

  constructor(parent, typeahead, ui) {
    this.parent = parent;
    this.typeahead = typeahead;
    this.selectionItems = this.typeahead.formatSelectionItems(this.parent.betData['potential_challengers']);
    this.challenger = '';
    this.placeholder = 'challenger\'s username';
    this.hiddenInputContent = this.updateHiddenInputContent();

    // This might be a bad pattern
    ui.load();
  }

  update(prop, value) {
    // Todo: Check if props exist
    this[prop] = value;
    this.filter('selectionItems', 'challenger');
    this.updateHiddenInputContent();
  };

  filter(itemsToFilter, filterProp) {
    // Todo: Check if props exist
    var filterStr = this[filterProp];
    var filterer = this.typeahead.matcher(this.selectionItems);
    this[itemsToFilter] = filterer(filterStr);

    this.sync();
  };

  updateHiddenInputContent() {
    return this.hiddenInputContent = this.challenger.length > 0 ? this.challenger : this.placeholder;
  }

  sync() {
    this.parent.betData.challenger = this.challenger;
  }
}
