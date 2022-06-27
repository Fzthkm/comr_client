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

  getAll():Observable<App[]> {
    return this.http.get<App[]>('/api/app/list')
  }

  create(app: App){
    return this.http.post('/api/app/create', app)
  }

  // getById(id: string):Observable<App>{
  //   return this.http.get<App>(`/api/apps/${id}`)
  // }
}
