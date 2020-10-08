import { Component, OnInit } from '@angular/core';
import { UserinteractionService } from '../userinteraction.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private sideNavOpen : boolean = false;
  constructor(private userinteractionService : UserinteractionService) { }

  ngOnInit() {
  }

  onToggle(){
    console.log("onToggle()"+this.sideNavOpen);
    this.sideNavOpen = !this.sideNavOpen;
    this.userinteractionService.toggleSideNav(this.sideNavOpen);
  }
  

}
