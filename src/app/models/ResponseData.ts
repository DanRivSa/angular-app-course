export class ResponseData
{
    image:string; //url to image fetched from server
    fact:string; //fact message in case of having one
    data:any; //response data
    title:string; //gif title from giphy response data
    images:any;// gif url response object
    downsized_large:any; //large gif url
    source:string;//gif source from which giphy took the image
    url:string; //gif url

}