import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../_services/authentication.service";
import { User } from "../../_interface/user";

@Component({
  selector: "app-header-login",
  templateUrl: "./header.login.component.html",
  styleUrls: ["./header.login.component.scss"]
})
export class HeaderLoginComponent {
  currentUser: User;  

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

}
