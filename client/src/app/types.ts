export interface SearchInfo {
  stages: string[];
  query: string;
  urls: string[];
  error?: string;
}

export interface Message {
  id: number;
  content: string;
  isUser: boolean;
  searchInfo?: SearchInfo;
}
