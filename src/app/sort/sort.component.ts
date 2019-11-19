import { Component } from "@angular/core";
import { ShoppingService } from "../shoppinglist/shoppinglist.service";

@Component({
  selector: "my-sort",
  templateUrl: "./sort.html",
  styleUrls: ["./sort.less"]
})
export class SortComponent {
  name = "Angular";
  constructor(private ShoppingService: ShoppingService) {}
  lhSort() {
    this.ShoppingService.selectedSort.next("lh");
    document.getElementById("lhSort").style.borderBottom = "1px solid";
    document.getElementById("hlSort").style.borderBottom = "none";
    document.getElementById("dSort").style.borderBottom = "none";
  }
  hlSort() {
    this.ShoppingService.selectedSort.next("hl");
    document.getElementById("lhSort").style.borderBottom = "none";
    document.getElementById("hlSort").style.borderBottom = "1px solid";
    document.getElementById("dSort").style.borderBottom = "none";
  }
  dSort() {
    this.ShoppingService.selectedSort.next("d");
    document.getElementById("lhSort").style.borderBottom = "none";
    document.getElementById("hlSort").style.borderBottom = "none";
    document.getElementById("dSort").style.borderBottom = "1px solid";
  }
}
