import { Component } from '@angular/core';
import {DataMobilityService} from "./services/data-mobility.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobility';
  categoryResult: any;
  productsResult: any;

  constructor( private datamobilityService : DataMobilityService) {

  }

  ngOnInit(): void {

    this.datamobilityService.getCategories().subscribe((res) => {
      this.categoryResult = res;
      console.log('categories',this.categoryResult)
    });

    this.datamobilityService.getProducts().subscribe((res) => {
      this.productsResult = res;
      console.log('products',this.productsResult)
    });
  }

}
