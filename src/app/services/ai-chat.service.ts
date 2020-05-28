import { Injectable } from '@angular/core';
import { Observable, combineLatest, of, BehaviorSubject } from 'rxjs';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { environment } from './../../environments/environment.prod';
export class Message {
  constructor(public content: string, public sendBy: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class AiChatService {
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  conversation = new BehaviorSubject<Message[]>([]);
  constructor() {}
  updateBotMsg(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMsg = new Message(msg, 'user');
    this.updateBotMsg(userMsg);
    return this.client.textRequest(msg).then((res) => {
      const speech = res.result.fulfillment.speech;
      const botMsg = new Message(speech, 'bot');
      this.updateBotMsg(botMsg);
    });
  }
}
