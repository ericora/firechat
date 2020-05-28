import { AiChatService, Message } from './../services/ai-chat.service';
import { Observable } from 'rxjs';
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
  constructor(public cs: AiChatService) {
    this.cs.conversation.next([new Message("Hey, let's chat", 'bot')]);
    this.messages = this.cs.conversation.asObservable().pipe(
      scan((acc, msg) => {
        console.log(acc);

        return acc.concat(msg);
      })
    );
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
