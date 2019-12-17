export interface Mail {
  to: string | string[];
  from?: string;
  replyTo?: string;
  toUids?: string[];
  cc?: string | string[];
  ccUids?: string[];
  bcc?: string | string[];
  bccUids?: string[];
  message: {
    messageId?: string;
    subject: string;
    text?: string;
    html?: string;
  };
}
