import http from "@src/apis/http.ts";
import axios from "axios";
export default {
    getAricels:(data:Object)=>{return http.Get(data,'articels')}
};







