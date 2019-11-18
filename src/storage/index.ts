
export default {
    "set":function(key:string,val:any){
        localStorage.setItem(key,val);
    },
    "get":function(key:string){
        return localStorage.getItem(key)
    },
    "remove":function(key:string){
        localStorage.removeItem(key)
    }
}