import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.routes.navigateByUrl('/auth-detail')
  }

}
