import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl ="https://localhost:5001/api";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
return this.http.get<any>(this.APIUrl+'/highway'); 
  }
addHighway(val:any){
return this.http.post(this.APIUrl+'/highway',val)

}

updateHighway(val:any){
  return this.http.put(this.APIUrl+'/highway',val)
  
  }

deleteHighway(val:any){
    return this.http.delete(this.APIUrl+'/highway/',val)
    
    }
  }

