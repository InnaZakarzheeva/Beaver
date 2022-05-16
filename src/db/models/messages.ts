import Realm from 'realm';

class Messages {
  public static schema: Realm.ObjectSchema = {
    name: 'Messages',
    primaryKey: 'id',
    properties: {
      id: 'string',
      text: 'string',
      createdAt: 'date',
      user_id: 'string',
    },
  };

  public id: string;
  public text: string;
  public createdAt: Date;
  public user_id: string;

  constructor(id: string, text: string, createdAt: Date, user_id: string) {
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.user_id = user_id;
  }
}

class Chats {
  public static schema: Realm.ObjectSchema = {
    name: 'Chats',
    primaryKey: 'key',
    properties: {
      key: 'string',
      name: {type: 'string', default: ''},
      messages: 'Messages[]',
    },
  };

  public key: string;
  public name: string;
  public messages: Messages[];

  constructor(key: string, name: string, messages: Messages[]) {
    this.key = key;
    this.name = name;
    this.messages = messages;
  }
}

export {Chats, Messages};
