import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onLogin(): void {
    this._router.navigateByUrl('/tabs/home');
  }
}
