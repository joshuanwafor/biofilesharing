import {makeAutoObservable, observable, runInAction} from 'mobx';
import PubNub from 'pubnub';

let pubnub = new PubNub({
  publishKey: 'pub-c-6cf918a6-23cc-46f0-8a85-705f1ce939e2',
  subscribeKey: 'sub-c-31a33e84-3ed8-11eb-9ec5-221b84410db5',
  uuid: 'myUniqueUUID',
  keepAlive: true,
  autoNetworkDetection: true,
  secretKey: 'sec-c-MjAxOGM1YzctZGY3Mi00NDY3LTg1NWUtNTFmN2I1ZjE3NGFj',
});

export class ChatPubNub {
  messages: {id: any; author: any; content: any; timetoken: any}[];

  constructor() {
    this.messages = [];

    makeAutoObservable(this, {
      messages: observable,
    });
  }

  init = () => {
    pubnub.addListener({
      message: (envelope: PubNub.MessageEvent) => {
        console.log(envelope.message, ' published');

        runInAction(() => {
          this.messages = [
            ...this.messages,
            {
              id: envelope.message.id,
              author: envelope.publisher,
              content: envelope.message.content,
              timetoken: envelope.timetoken,
            },
          ];
        });
      },
    });

    pubnub.subscribe({channels: ['chat']});

    pubnub.fetchMessages(
      {
        channels: ['chat'],
        end: '15343325004275466',
        count: 100,
      },

      (data, d) => {
        // console.log(d);
        runInAction(() => {
          if (data.statusCode == 200) {
            this.messages = d.channels['chat'].map(data => data.message);
          }
        });
        console.log(data);
      },
    );
  };

  loadMessages = () => {};

  sendMessage = (message: string) => {
    const packet = {
      content: message,
      id: Math.random().toString(16).substr(2),
    };
    pubnub
      .publish({channel: 'chat', message: packet, storeInHistory: true})
      .then(v => {
        console.log(v);
      })
      .catch(err => {
        console.log(err.message, err.status);
      });
  };
}

export const PubNubChatStore = new ChatPubNub();
