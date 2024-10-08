export const getUrlWithQueryParams = (url:string,searchParams:{[key:string]:any})=>{
    var Url = new URL(url);
    for (let key in searchParams) {
      Url?.searchParams?.append(key, searchParams[key]);
    }
    return Url;

}