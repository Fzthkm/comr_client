import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {App, Consultant} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  constructor(private http: HttpClient) {
  }
  getAll():Observable<Consultant[]> {
    return this.http.get<Consultant[]>('/api/consult/')
  }

  create(consultant: Consultant) {
    return this.http.post('/api/consult/', consultant)
  }

  getById(id: string): Observable<Consultant>{
    return this.http.get<Consultant>(`/api/consult/${id}`)
  }
}
