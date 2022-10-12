import {Component} from '@angular/core';
import {SocketioService} from "./socketio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lets-chat';
// @ts-ignore
  thing;

  constructor(private socketioService: SocketioService) {
    socketioService.setupSocketConnection().then(ws => {
      this.thing = ws;
    });
  }

  pushMessage() {
    // @ts-ignore
    this.thing.send(JSON.stringify({roomid: 'alksjdflkajsdf', userId:'aksdjfkajsdf',message:'', onEvent:'join'}));
  }
}
