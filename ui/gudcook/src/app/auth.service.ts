import { Injectable } from '@angular/core';
import {COACHES} from './mock-data';
import {Coach} from './models';
import { Observable, of } from 'rxjs';

function pickRandomArrayItem(input : any[]) {
  let min = 0;
  let max = input.length - 1;
  let index = Math.floor(Math.random() * (max - min + 1)) + min; 
  return input[index];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getLoggedInUser() : Observable<string> {
    let coach: Coach = pickRandomArrayItem(COACHES);
    return of(coach.email);
  }
  
  constructor() { }
}
