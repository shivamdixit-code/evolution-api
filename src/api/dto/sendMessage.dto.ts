import { proto, WAPresence } from 'baileys';

export class Quoted {
  key: proto.IMessageKey;
  message: proto.IMessage;
}

export class Options {
  delay?: number;
  presence?: WAPresence;
  quoted?: Quoted;
  linkPreview?: boolean;
  encoding?: boolean;
  mentionsEveryOne?: boolean;
  mentioned?: string[];
  webhookUrl?: string;
}

export class MediaMessage {
  mediatype: MediaType;
  mimetype?: string;
  caption?: string;
  // for document
  fileName?: string;
  // url or base64
  media: string;
}

export class StatusMessage {
  type: string;
  content: string;
  statusJidList?: string[];
  allContacts?: boolean;
  caption?: string;
  backgroundColor?: string;
  font?: number;
}

export class Metadata {
  number: string;
  delay?: number;
  quoted?: Quoted;
  linkPreview?: boolean;
  mentionsEveryOne?: boolean;
  mentioned?: string[];
  encoding?: boolean;
  notConvertSticker?: boolean;
}

export class SendTextDto extends Metadata {
  text: string;
}
export class SendPresence extends Metadata {
  text: string;
}

export class SendStatusDto extends Metadata {
  type: string;
  content: string;
  statusJidList?: string[];
  allContacts?: boolean;
  caption?: string;
  backgroundColor?: string;
  font?: number;
}

export class SendPollDto extends Metadata {
  name: string;
  selectableCount: number;
  values: string[];
  messageSecret?: Uint8Array;
}

export type MediaType = 'image' | 'document' | 'video' | 'audio' | 'ptv';

export class SendMediaDto extends Metadata {
  mediatype: MediaType;
  mimetype?: string;
  caption?: string;
  // for document
  fileName?: string;
  // url or base64
  media: string;
}

export class SendPtvDto extends Metadata {
  video: string;
}

export class SendStickerDto extends Metadata {
  sticker: string;
}

export class SendAudioDto extends Metadata {
  audio: string;
}

export type TypeButton = 'reply' | 'copy' | 'url' | 'call' | 'flow' | 'pix';

export type KeyType = 'phone' | 'email' | 'cpf' | 'cnpj' | 'random';

export class Button {
  type: TypeButton;
  displayText?: string;
  id?: string;
  url?: string;
  copyCode?: string;
  phoneNumber?: string;
  currency?: string;
  name?: string;
  keyType?: KeyType;
  key?: string;
}

export class SendButtonsDto extends Metadata {
  /** Optional audio media embedded in the interactive message footer. */
  audio?: string;
  thumbnailUrl?: string;
  title: string;
  description?: string;
  footer?: string;
  buttons: Button[];
}

export type FlowAction = 'navigate' | 'data_exchange';
export type FlowMode = 'published' | 'draft';

export class SendProductDto extends Metadata {
  title: string;
  description?: string;
  body?: string;
  footer?: string;
  productId: string;
  retailerId?: string;
  currencyCode: string;
  priceAmount1000: string | number;
  productImage: string;
  productImageCount?: number;
  businessOwnerJid?: string;
  url?: string;
}

export class SendProductListDto extends Metadata {
  title: string;
  text: string;
  footer?: string;
  buttonText: string;
  businessOwnerJid: string;
  sections: Array<{
    title: string;
    products: Array<{ productId: string }>;
  }>;
}

export class SendFlowDto extends Metadata {
  header?: string;
  body: string;
  footer?: string;
  flowId?: string;
  flowName?: string;
  flowCta: string;
  flowToken?: string;
  flowMessageVersion?: '3';
  mode?: FlowMode;
  flowAction?: FlowAction;
  flowActionPayload?: {
    screen?: string;
    data?: Record<string, any>;
  };
}

export class SendLocationDto extends Metadata {
  latitude: number;
  longitude: number;
  name?: string;
  address?: string;
}

class Row {
  title: string;
  description: string;
  rowId: string;
}
class Section {
  title: string;
  rows: Row[];
}
export class SendListDto extends Metadata {
  title: string;
  description?: string;
  footerText?: string;
  buttonText: string;
  sections: Section[];
}

export class ContactMessage {
  fullName: string;
  wuid: string;
  phoneNumber: string;
  organization?: string;
  email?: string;
  url?: string;
}

export class SendTemplateDto extends Metadata {
  name: string;
  language: string;
  components: any;
  webhookUrl?: string;
}
export class SendContactDto extends Metadata {
  contact: ContactMessage[];
}

export class SendReactionDto {
  key: proto.IMessageKey;
  reaction: string;
}
