import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Observable } from "rxjs";
import { LedServiceService } from '../led-service.service';

let fadeTime = '';
@Component({
  selector: "app-fade-input",
  templateUrl: "./fade-input.component.html",
  styleUrls: ["./fade-input.component.css"]
})
export class FadeInputComponent implements OnInit {
  @Output() public onSearch: EventEmitter<String> = new EventEmitter();

  @ViewChild("searchInput") private searchInput: ElementRef;

  constructor(private ledService: LedServiceService) {}

 ngOnInit() {
    Observable.fromEvent(
      this.searchInput.nativeElement, 'keyup'
    )
    .debounceTime(500)
    .subscribe((event:any) => this.searchQueryChanged(event.target.value);
  }

  searchQueryChanged(query: string) {
    console.log(query)
    this.onSearch.emit(query);
    fadeTime = query;
  }

    public getFade(event) {
      this.ledService.strobeLed(`/fade?time=${fadeTime}`);
    } 
  
}
