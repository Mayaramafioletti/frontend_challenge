import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './login-page.component';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/core/interface/IMock';
import { AccountService } from '../../core/services/account.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let router: Router;
  let accountService: AccountService;

  const account: IAccount = {
    "email": "usuario@gmail.com",
    "password": "usuario"
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [LoginPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    accountService = TestBed.inject(AccountService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Deve navegar para o /dashboard se as informacoes de senha e usuario forem validas', () => {
    component.accounts = account;
    const getAccountsSpy = jest.spyOn(accountService, 'getAccounts').mockReturnValue(of(account));
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.getAccount(account.email, account.password);


    expect(getAccountsSpy).toHaveBeenCalledWith();
    expect(navigateSpy).toHaveBeenCalledWith(['dashboard']);
  });

  it('Não deve navegar para o /dashboard se as informacoes de senha e usuario forem validas', () => {
    account.email = 'incorrect@example.com';
    const getAccountsSpy = jest.spyOn(accountService, 'getAccounts').mockReturnValue(of(account));

    component.getAccount('incorrect@example.com', 'wrongpassword');

    expect(getAccountsSpy).toHaveBeenCalledWith();
  });

  it('Deve ter o metodo para visualizar a senha', () => {
    const mockInputField = {
      nativeElement: {
        type: 'password'
      }
    };

    component.inputField = mockInputField as any;
    component.passwordVisible = false;

    component.togglePasswordVisibility();

    expect(component.inputField.nativeElement.type).toBe('text');
    expect(component.passwordVisible).toBe(true);

    component.togglePasswordVisibility();

    expect(component.inputField.nativeElement.type).toBe('password');
    expect(component.passwordVisible).toBe(false);
  });
});
