import { Observable } from 'rxjs';
import { ChatService, Message } from './../services/chat.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss'],
})
export class AiChatComponent implements OnInit {
  messages: Observable<any>;
  newMsg;
  @ViewChild('chatBox') chatBox: ElementRef;
  constructor(public cs: ChatService) {
    this.messages = this.cs.conversation
      .asObservable()
      .pipe(scan((acc, msg) => acc.concat(msg)));
  }

  ngOnInit(): void {
    this.scrollBottom();
  }

  sendMsg() {
    this.cs.converse(this.newMsg);
    this.newMsg = '';
    this.scrollBottom();
  }

  private scrollBottom() {
    setTimeout(
      () =>
        this.chatBox.nativeElement.scrollTo(
          0,
          this.chatBox.nativeElement.scrollHeight
        ),
      500
    );
  }
}
