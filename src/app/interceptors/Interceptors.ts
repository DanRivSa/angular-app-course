import {LoderInterceptorService} from '../services/interceptors/loder-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


export const INTERCEPTORS = 
[
    {provide:HTTP_INTERCEPTORS,useClass:LoderInterceptorService,multi:true}
]