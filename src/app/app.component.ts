import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yelp-client';
  
  price = new FormControl('');
city = new FormControl('');
state = new FormControl('');


constructor( private dataService : DataService, private fb: FormBuilder) { };

searchBox: FormGroup;
displayResults: any;

ngOnInit() {
  this.searchBox = this.fb.group({
    price : new FormControl(),
    city : new FormControl(),
  state : new FormControl()
  
  })
}

onSubmit() {
  this.dataService.searchFood(this.searchBox.value.price, this.searchBox.value.city, this.searchBox.value.state).subscribe(data =>{
    this.displayResults=data.businesses;
    const yelpResult = this.displayResults[Math.floor(Math.random() * this.displayResults.length)]

    if ( yelpResult.is_closed ===false) {
      this.displayResults = yelpResult;
      console.log(this.displayResults);
    } else (yelpResult);
  })
}
}