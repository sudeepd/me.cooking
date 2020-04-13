import { Injectable } from '@angular/core';
import { COACHES} from './mock-data';
import {Coach,User} from './models';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GudcookService {
  getUser(email : string) : Observable<User> {
    return of(COACHES.find( item => item.email == email));
  }

  constructor() { }
}
