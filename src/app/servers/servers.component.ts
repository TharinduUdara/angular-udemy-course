import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]', // element selector chenge to attribute selector by using []
  selector: '.app-servers', //element change to class by using .
  //templateUrl: './servers.component.html',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {}
