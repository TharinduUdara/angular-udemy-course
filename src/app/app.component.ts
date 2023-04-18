import { Injectable } from '@angular/core';

Injectable({
    providedIn:'root'
})
export class calcService{
  multiply(a: number, b:number){
    return a * b;
  }

}


