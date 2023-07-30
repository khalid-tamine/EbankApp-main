import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountDetails } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getAccount(id: string, page: number, size: number): Observable<AccountDetails> {
    return this.http.get<AccountDetails>('http://localhost:8082/accounts/' + id + '/pageOperations?page=' + page + '&size=' + size)
  }
  public debit(accountId: string, amount: number, description: string) {
    let data = { accountId: accountId, amount: amount, description: description }
    return this.http.post('http://localhost:8082/accounts/debit/', data)
  }
  public credit(accountId: string, amount: number, description: string) {
    let data = { accountId: accountId, amount: amount, description: description }
    return this.http.post('http://localhost:8082/accounts/credit/', data)
  }
  public transfer(accountSource: string, accountDestination: string, amount: number, description: string) {
    let data = { accountSource, accountDestination, amount, description }
    return this.http.post('http://localhost:8082/accounts/transfer/', data)
  }
}
