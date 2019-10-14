import { IFilterOption } from "./models/filter-options.model";

const filterOptions: IFilterOption[] = [
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
  public selectedFilterVal: number;

  public updateFilter(filterVal: number) {
    this.selectedFilterVal = filterVal;
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
    <div class="filter-container">
      <button ng-repeat="option in $ctrl.filterOptions"
            ng-class="{'filter--active': $ctrl.selectedFilterVal === option.value}"
            class="filter btn"
            ng-click="$ctrl.updateFilter(option.value)">
        {{option.display}}
      </button>
    </div>
  `
};
