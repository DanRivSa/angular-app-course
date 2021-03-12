import { Component, OnInit } from '@angular/core';
import {FoxService} from '../../services/fox.service';

@Component({
  selector: 'app-fox-image',
  templateUrl: './fox-image.component.html',
  styleUrls: ['./fox-image.component.scss']
})
export class FoxImageComponent implements OnInit {

  constructor(private service:FoxService) { }

  ngOnInit(): void 
  {
    this.service.GetRandomFoxImage().subscribe(res=>
      {
        console.log(res);
      });
  }

}
