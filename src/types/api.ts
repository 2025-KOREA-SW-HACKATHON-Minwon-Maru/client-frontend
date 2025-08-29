export interface DepartmentInfo {
  id: string;
  name: string;
  phone: string;
}

export interface AskQuestionRequest {
  chatId: string;
  question: string;
}

export interface AskQuestionResponse {
  success: boolean;
  answer: string;
  relevantDepartments?: DepartmentInfo[];
  context?: string;
  message?: string;
}

export interface ChatMessage {
  id: string;
  question: string;
  answer: string;
  timestamp: Date;
  relevantDepartments?: DepartmentInfo[];
  context?: string;
}


