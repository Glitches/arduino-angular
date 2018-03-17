import { Component, OnInit } from "@angular/core";
import { LedServiceService } from "../led-service.service";

let isClicked = false;

@Component({
  selector: "app-led-commander",
  templateUrl: "./led-commander.component.html",
  styleUrls: ["./led-commander.component.css"]
})
export class LedCommanderComponent implements OnInit {
  constructor(private ledService: LedServiceService) {}

  ngOnInit() {}

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
