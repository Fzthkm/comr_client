import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {App} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  create(app: App){
    return this.http.post('/api/app/', app)
  }

  getAll():Observable<App[]> {
    return this.http.get<App[]>('/api/app/')
  }

  getLast():Observable<App> {
    return this.http.get<App>('/api/app/last')
  }

  getById(id: string):Observable<App>{
    return this.http.get<App>(`/api/app/${id}`)
  }

  remove(id: string){
    return this.http.delete(`/api/app/${id}`)
  }

  update(id: string, app: App){
    return this.http.patch(`/api/app/${id}`, app)
  }
}
