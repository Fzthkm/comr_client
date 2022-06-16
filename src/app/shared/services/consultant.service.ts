import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Consultant} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  constructor(private http: HttpClient) {
  }
  getAll():Observable<Consultant[]> {
    return this.http.get<Consultant[]>('/api/consultant/get')
  }

  create(consultant: Consultant) {
    return this.http.post('/api/consultant/create', consultant)
  }
}
