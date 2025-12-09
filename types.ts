export interface HighlightSlide {
  id: number;
  textLists: string[];
  videoDuration: number;
  thumbnail: string;
}

export interface NavItem {
  name: string;
  link: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  isThinking?: boolean;
}
