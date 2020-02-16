import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  privacyPolicyUrl = 'https://www.privacypolicygenerator.info/live.php?token=LwqGaD5pdhkVEqPuWwkW8no0l69i07it';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['auth/login']);
  }
}
