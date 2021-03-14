import { Component, OnInit } from '@angular/core';
import {FoxService} from '../../services/fox.service';
import {ResponseData} from '../../models/ResponseData';

@Component({
  selector: 'app-fox-image',
  templateUrl: './fox-image.component.html',
  styleUrls: ['./fox-image.component.scss']
})
export class FoxImageComponent implements OnInit {

  public animal:string = "fox";
  public foxImg_url:string;
  public fact:string;

  constructor(private service:FoxService) { }

  ngOnInit(): void 
  {
    this.GetRandomFoxImageAndFact();
  }
  
  public GetRandomFoxImageAndFact()
  {
    //fox image
    this.service.GetRandomFoxImage().subscribe(res=>
      {
        let obj:ResponseData = res as ResponseData;
        this.foxImg_url = obj.image;
      });
    //fox fact  
    this.service.GetFoxFact().subscribe(res=>
      {
        let obj:ResponseData = res as ResponseData;
        this.fact = obj.fact;
      });
  }
}
