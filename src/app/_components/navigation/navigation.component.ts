import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthenticationService } from "../../_services/authentication.service";
import { User } from "../../_interface/user";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  currentUser: User;  
  navbarOpen:boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { this.authenticationService.currentUser.subscribe(
    x => (this.currentUser = x)
  );
}

  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

}
