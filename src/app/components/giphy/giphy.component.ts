import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../../services/giphy.service';
import {ResponseData} from '../../models/ResponseData';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {

  public title:string;
  public gif_url:string;
  public gif_source:string; 
  public embed_url:string;
  public tag_input:string = '';

  constructor(private service:GiphyService) { }

  ngOnInit(): void 
  {
    this.GetRandomGif(this.tag_input);
  }

  public GetRandomGif(tag?:string) //tags are only used to filter the response
  {
    if(tag)
      this.service.GetRandomGif(tag).subscribe(res=>
        {
          let giphy_res:ResponseData = res as ResponseData;
          let data:ResponseData = giphy_res.data;
          let image:ResponseData = data.images;
          let gif_info:ResponseData = image.downsized_large;
          this.gif_url = gif_info.url;
          this.title = data.title;
          this.gif_source = data.url;
        });
    else
      this.service.GetRandomGif().subscribe(res=>
        {
          let giphy_res:ResponseData = res as ResponseData;
          let data:ResponseData = giphy_res.data;
          let image:ResponseData = data.images;
          let gif_info:ResponseData = image.downsized_large;
          this.gif_url = gif_info.url;
          this.title = data.title;
          this.gif_source = data.source;
        });
  }
}
