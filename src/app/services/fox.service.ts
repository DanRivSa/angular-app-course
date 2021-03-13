import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoxService 
{

  constructor(private client:HttpClient) 
  { }

  //metodos

  public GetRandomFoxImage()
  {
    return this.client.get(`/floof`);
  }
}
