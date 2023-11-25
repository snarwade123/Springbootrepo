import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASIC_PATH=["http://localhost:8181/"]
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: any): Observable<any>{
    return this.http.post(BASIC_PATH+"customer/add",customer)
  }
  getAllCustomer(): Observable<any>{
    return this.http.get(BASIC_PATH+"customer/all")
  }
  deleteCustomer(id: any): Observable<any>{
    return this.http.delete(BASIC_PATH+"customer/del/"+id)
  }
  getCustomerById(id: any): Observable<any>{
    return this.http.get(BASIC_PATH+"customer/"+id)
  }

  updateCustomer(id: any,customer:any): Observable<any>{
    return this.http.put(BASIC_PATH+"customer/"+id,customer)
  }
}
