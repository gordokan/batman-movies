import { FilterOption } from "./models/filter-options.model";

const filterOptions: FilterOption[] = [
  {
    display: "2010's",
    value: 2010
  },
  {
    display: "2000's",
    value: 2000
  },
  {
    display: "1990's",
    value: 1990
  },
  {
    display: "1980's",
    value: 1980
  }
];

class FilterController {
  public onUpdated: ({ $event: { filterVal: number } }) => void;
  public filterOptions = filterOptions;

  public updateFilter(filterVal: number) {
    if (this.onUpdated) {
      this.onUpdated({ $event: { filterVal } });
    }
  }
}

export const filterComponent = {
  bindings: {
    onUpdated: "&"
  },
  controller: FilterController,
  template: `
    <div ng-repeat="option in $ctrl.filterOptions">
      <span ng-click="$ctrl.updateFilter(option.value)">{{option.display}}</span>
    </div>
  `
};
