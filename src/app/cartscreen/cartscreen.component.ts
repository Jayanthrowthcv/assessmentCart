import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingService } from "../shoppinglist/shoppinglist.service";
import { Subscription } from "rxjs";
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "my-cartscreen",
  templateUrl: "./cartscreen.html",
  styleUrls: ["./cartscreen.less"]
})
export class CartscreenComponent {
  faStar = faStar;
  hideCart = false;
  sub: Subscription;
  shopItems: Array<any> = [];
  totalCost = 0;
  totalDiscount = 0;
  constructor(
    private router: Router,
    private ShoppingService: ShoppingService
  ) {}
  ngOnInit() {
    this.hideCart = true;
    this.shopItems = this.ShoppingService.addedList;
    this.shopItems.forEach(x=>{
      this.totalCost += x.Item.price;
      this.totalDiscount += x.Item.price*(x.Item.discount/100);
    })
  }
  goHome(){
    this.router.navigate(['/Home']);
    
  }
}
