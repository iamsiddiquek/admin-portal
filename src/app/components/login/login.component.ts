import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credentials = {username: '', password: ''};
  private loggedIn = false;

  constructor(private loginService: LoginService) {  }

  obSubmit() {
    // subscribe method is like http call is submitted
    this.loginService.sendCredentials(this.credentials.username, this.credentials.password).subscribe(
      response => {
        console.log(response);
        // localStorage.setItem('xAuthToken', response.json().token);
        this.loggedIn = true;
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }


  ngOnInit(): void {
  }

}
