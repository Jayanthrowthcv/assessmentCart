import { Component, OnChanges } from "@angular/core";
import { ShoppingService } from "../shoppinglist/shoppinglist.service";

@Component({
  selector: "my-filter",
  templateUrl: "./filter.html",
  styleUrls: ["./filter.less"]
})
export class FilterComponent {

  filterend:number;
  constructor(private ShoppingService: ShoppingService) {}

  setRanges(value) {
    this.ShoppingService.selectedPriceFilter.next(value);
  }
}
