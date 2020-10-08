import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserinteractionService {
  private sideNavOpen = new BehaviorSubject(false);
  public sideNavOpenListner = this.sideNavOpen.asObservable();
  constructor() { }

  toggleSideNav(data : boolean){
    
    this.sideNavOpen.next(data);
  }
}
