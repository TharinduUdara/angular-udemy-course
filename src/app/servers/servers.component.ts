import { Component } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was Created !';
  serverName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created ' + this.serverName;
    this.serverCreated = true;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
