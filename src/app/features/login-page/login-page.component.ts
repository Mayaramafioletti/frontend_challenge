import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/core/interface/IMock';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  accounts: IAccount = {
    email: '',
    password: ''
  }
  @ViewChild('inputField', { static: false }) inputField: ElementRef<HTMLInputElement>;
  passwordVisible: boolean = false;


  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  getAccount(email: string, password: string) {
    this.accountService.getAccounts().subscribe(
      (account: IAccount) => {
        if (account.email === this.accounts.email && account.password === this.accounts.password) {
          this.router.navigate(['dashboard']);

        }
        else {
          console.log('error')
        }
      },
      error => {
        console.log('error', error)
      }
    );
  }
  togglePasswordVisibility() {
    const input = this.inputField.nativeElement;

    input.type = this.passwordVisible ? 'password' : 'text';
    this.passwordVisible = !this.passwordVisible;
  }


}
