import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit {
  term:string='';
  @Output() onEnter:EventEmitter<string> =new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  @Input() placeholder:string='';
  debouncer:Subject<string> = new Subject();
  
  
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(200))
    .subscribe((value)=>{
      this.onDebounce.emit(value);
    })
  }

  search(){
    this.onEnter.emit(this.term);
  }
  
  keyPushed() {
    this.debouncer.next(this.term);
  }
}
