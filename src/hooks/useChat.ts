import { useState, useCallback } from 'react';
import { apiService } from '../services/api';
import { AskQuestionRequest, AskQuestionResponse, ChatMessage } from '../types/api';

export const useChat = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (question: string) => {
    if (!question.trim()) return;

    setIsProcessing(true);
    setError(null);

    try {
      // 고유한 chatId 생성 (실제로는 사용자 세션이나 고유 ID를 사용해야 함)
      const chatId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const request: AskQuestionRequest = {
        chatId,
        question: question.trim(),
      };

      const response: AskQuestionResponse = await apiService.askQuestion(request);

      if (response.success) {
        const newMessage: ChatMessage = {
          id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          question: question.trim(),
          answer: response.answer,
          timestamp: new Date(),
          relevantDepartments: response.relevantDepartments,
          context: response.context,
        };

        setMessages(prev => [...prev, newMessage]);
      } else {
        setError(response.message || '답변을 받아오는데 실패했습니다.');
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('서버와의 연결에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    messages,
    isProcessing,
    error,
    sendMessage,
    clearMessages,
    clearError,
  };
};
