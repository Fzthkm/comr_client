import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Organisation} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrgService {
  constructor(private http: HttpClient) {
  }
  getAll():Observable<Organisation[]> {
    return this.http.get<Organisation[]>('api/organisation/get')
  }

  create(org: Organisation) {
    return this.http.post('api/organisation/create', org)
  }
}
