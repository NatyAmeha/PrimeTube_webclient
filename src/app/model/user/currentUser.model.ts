import { Channel } from '../channel/channel.model';

export interface CurrentUser {
    _id? : string;
    firstName? : string;
    lastName? : string,
    username? :string , 
    email? : string,
    password? : string,
    profileImagePath? : string

    favorites? : string[]
    createdChannel? : Channel[]
    subscriptions? : channelSubscriptions[]
}

export interface channelSubscriptions{
    _id? : string
    allowNotification? : boolean,
    channelId? : Channel
}