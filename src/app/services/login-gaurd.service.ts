import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGaurdService implements CanActivate {

  canActivate(): boolean{
    return false;
  }
  constructor() { }

}
