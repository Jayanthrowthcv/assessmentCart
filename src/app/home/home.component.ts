import { Component, OnInit } from "@angular/core";
import { ShoppingService } from "../shoppinglist/shoppinglist.service";

@Component({
  selector: "my-home",
  templateUrl: "./home.html",
  styleUrls: ["./home.less"]
})
export class HomeComponent implements OnInit {
  name = "Angular";
  constructor(private ShoppingService: ShoppingService) {}
  ngOnInit() {

  }
}
