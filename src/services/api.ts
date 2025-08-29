/// <reference types="vite/client" />
import { AskQuestionRequest, AskQuestionResponse } from '../types/api';

// 환경 변수에서 API URL을 가져오거나(설정되지 않으면 프록시 사용)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
const API_TIMEOUT = 300000;

class ApiService {
  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // 타임아웃 설정
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
    
    try {
      const response = await fetch(url, {
        ...defaultOptions,
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('요청 시간이 초과되었습니다. 잠시 후 다시 시도해주세요.');
      }
      
      console.error('API request failed:', error);
      throw error;
    }
  }

  async askQuestion(request: AskQuestionRequest): Promise<AskQuestionResponse> {
    return this.makeRequest<AskQuestionResponse>('/api/chat/ask', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }
}

export const apiService = new ApiService();
export default apiService;
