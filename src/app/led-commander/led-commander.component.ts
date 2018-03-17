import { Component, OnInit } from "@angular/core";
import { LedServiceService } from "../led-service.service";
import { Router } from '@angular/router';

let isClicked = false;

@Component({
  selector: "app-led-commander",
  templateUrl: "./led-commander.component.html",
  styleUrls: ["./led-commander.component.css"]
})
export class LedCommanderComponent implements OnInit {
  constructor(private ledService: LedServiceService, private router: Router) {}

  ngOnInit() {}

  
btnClick= function () {
        this.router.navigateByUrl('/fade');
};
  
  
  public getStrobe(event) {
    console.log(isClicked);
    if (!isClicked) {
      isClicked = true;
      this.ledService.strobeLed("/");
    } else {
      isClicked = !isClicked;
      this.ledService.strobeLed("/off");
  }
}
