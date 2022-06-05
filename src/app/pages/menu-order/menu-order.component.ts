import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-menu-order',
  templateUrl: './menu-order.component.html',
  styleUrls: ['./menu-order.component.css']
})
export class MenuOrderComponent implements OnInit {

  constructor(private param:ActivatedRoute , private service:DetailsService) { }
  getMenuid:any;
  menuData:any
  ngOnInit(): void {
    this.getMenuid = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuid,'getMenu');
    if(this.getMenuid)
    {
      this.menuData = this.service.Details.filter((value)=>{
        return value.id == this.getMenuid;
      });
      console.log(this.menuData , 'menudata>>');
    }
  }

}
