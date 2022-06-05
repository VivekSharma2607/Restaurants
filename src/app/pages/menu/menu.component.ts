import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:DetailsService) { }
  foodData:any
  ngOnInit(): void {
    this.foodData = this.service.Details
  }

}
