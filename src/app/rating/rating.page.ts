// import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})

export class RatingPage implements OnInit {
 
  constructor(private service:SharedService) { }
  DepartmentList:any=[];
  
  ngOnInit():void {
    this.refreshDepList();
  }
  
  
  refreshDepList(){
    this.service.getDepList().subscribe(data=>{ 
      this.DepartmentList=data;
    })

  }
}
