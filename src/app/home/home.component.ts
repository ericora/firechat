import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userChats$;
  roomId;
  ifExists = true;
  constructor(
    public auth: AuthService,
    public cs: ChatService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }

  async join() {
    this.ifExists = await this.cs.checkRoom(this.roomId).toPromise();

    if (this.ifExists) {
      this.router.navigate(['chats', this.roomId]);
    }
  }

  toAiChat() {
    this.router.navigate(['ai-chat']);
  }
}
