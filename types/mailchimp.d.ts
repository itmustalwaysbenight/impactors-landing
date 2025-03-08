declare module '@mailchimp/mailchimp_marketing' {
  export function setConfig(config: {
    apiKey: string;
    server: string;
  }): void;

  export const lists: {
    addListMember: (
      listId: string,
      data: {
        email_address: string;
        status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
        merge_fields?: Record<string, any>;
      }
    ) => Promise<{
      id: string;
      email_address: string;
      status: string;
      [key: string]: any;
    }>;
  };
} 