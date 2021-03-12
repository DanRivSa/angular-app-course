import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoxService 
{

  private base_url = "https://randomfox.ca "
  constructor(private client:HttpClient) 
  { }

  //metodos

  public GetRandomFoxImage()
  {
    return this.client.get(`${this.base_url}/floof`);
  }
}
