import { Component, OnInit } from '@angular/core';
import { UserinteractionService } from '../userinteraction.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private sideNavOpen : boolean = false;
  constructor(private userinteractionService : UserinteractionService) { }

  ngOnInit() {
    this.userinteractionService.sideNavOpenListner.subscribe(open => this.sideNavOpen = open);
  }
  

}
