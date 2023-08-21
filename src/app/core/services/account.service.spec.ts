import { TestBed } from '@angular/core/testing';
import { AccountService } from './account.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve accounts from the API via GET', () => {
    const mockAccounts = [{ id: 1, name: 'Account 1' }, { id: 2, name: 'Account 2' }];

    service.getAccounts().subscribe(accounts => {
      expect(accounts).toEqual(mockAccounts);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/account`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAccounts);
  });
});
