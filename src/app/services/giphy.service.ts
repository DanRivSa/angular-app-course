import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Secrets} from '../../secrets';


@Injectable({
  providedIn: 'root'
})
export class GiphyService 
{
  private base_url:string = `https://api.giphy.com/v1/gifs`;
  
  constructor(private client:HttpClient, private secret:Secrets) { }

  GetRandomGif(tag?:string)
  {
    if(tag)
      return this.client.get(`${this.base_url}/random?api_key=${this.secret.giphy_api_key}&tag=${tag}`);
    else
      return this.client.get(`${this.base_url}/random?api_key=${this.secret.giphy_api_key}`);
  }
}
