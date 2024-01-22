import React, { Dispatch, PropsWithChildren, useReducer } from 'react';
import content from './data/data/resumeInfo';
import { createContext } from './config/createContext';
import { Education } from './data/data/eduData';
import { Project } from './data/data/projectsData';
import { WorkExperience } from './data/data/jobData';
import { Chat, chatty } from './types/Chats';

type GrantAcess = {
  type: 'GRANT_ACCESS';
}

type AddUserMessage = {
  type: 'ADD_USER_MESSAGE';
  content: string;
}

type AddLoadingMessage = {
  type: 'ADD_LOADING_MESSAGE';
}

type AddChatGPTMessage = {
  type: 'ADD_CHATGPT_MESSAGE';
  content: string;
}

type AccessActions = GrantAcess | AddUserMessage | AddLoadingMessage | AddChatGPTMessage;

type AccessState = {
  access: boolean;
  chat: Chat;
  content: {
    education: Education[],
    projects: Project[],
    workExperience: WorkExperience[],
  };
}

const initialState: AccessState = {
  access: false,
  chat: chatty,
  content: {
    education: [],
    projects: [],
    workExperience: [],
  },
}

type AccessContextType = {
  access: boolean;
  chat: Chat;
  content: {
    education: Education[],
    projects: Project[],
    workExperience: WorkExperience[],
  };
  dispatch: Dispatch<AccessActions>;
}

const reducer = (state: AccessState = initialState, action: AccessActions) => {
  const chat = state.chat;
  switch (action.type) {
    case 'GRANT_ACCESS':
      return { ...state, access: true, content };
    case 'ADD_USER_MESSAGE':
      chat.push({ type: 'user', content: action.content, })
      return { ...state, chat, access: true, content };
    case 'ADD_LOADING_MESSAGE':
      chat.push({ type: 'user', content: '...', })
      return { ...state, chat, access: true, content };
    case 'ADD_CHATGPT_MESSAGE':
      chat.pop()
      chat.push({ type: 'chatgpt', content: action.content, })
      return { ...state, chat, access: true, content };
    default:
      return state;
  }
}

const [useAccessContext, ContextProvider] = createContext<AccessContextType>();

export const useContext = useAccessContext;

export const AccessProvider = ({ children }: PropsWithChildren) => {
  const [{ access, chat, content }, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextProvider value={{ access, chat, content, dispatch }}>
      {children}
    </ContextProvider>
  );
}

export default AccessProvider;
