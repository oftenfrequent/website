// Define the types for a user message and a ChatGPT message
type UserMessage = {
  type: 'user';
  content: string;
  datetime?: string;
};

type ChatGPTMessage = {
  type: 'chatgpt';
  content: string;
  datetime?: string;
};

// Define a generic message type that can be either from the user or ChatGPT
type Message = UserMessage | ChatGPTMessage;

// Define the type for a chat, which is an array of messages
type Chat = Message[];

// Example usage:
const userMessage: UserMessage = {
  type: 'user',
  content: 'Hello, ChatGPT!',
};

const chatGPTMessage: ChatGPTMessage = {
  type: 'chatgpt',
  content: 'Hi there! How can I help you today?',
};

const chatty: Chat = [userMessage, chatGPTMessage];

// You can extend these types as needed based on the additional properties you want to include in your messages.
export type { UserMessage, ChatGPTMessage, Message, Chat };
export { chatty };