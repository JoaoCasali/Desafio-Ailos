import { User } from './../classes/user.model';
import { USER_DATA } from './../constants/user.const';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  verified = false
  CPF = ''

  constructor() { }

  searchCPF(userCPF: any): any {
    for (var i in USER_DATA) {
      if (userCPF == USER_DATA[i].Cpf) {
        return USER_DATA[i]
      }
    }
    return -1
  }
}
