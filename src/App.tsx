import React, { useState } from "react";
import Dashboard from "./imports/Dashboard";
import { PromptBox } from "./components/PromptBox";
import { Card } from "./components/ui/card";
import { Sparkles, Building2, FileText, Phone } from "lucide-react";
import apiService from "./services/api";
import { AskQuestionRequest, AskQuestionResponse } from "./types/api";

export default function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<AskQuestionResponse | null>(null);

  const handleSendMessage = async (message: string) => {
    setIsProcessing(true);
    setResponse(null);

    try {
      const chatId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const request: AskQuestionRequest = { chatId, question: message.trim() };
      const data: AskQuestionResponse = await apiService.askQuestion(request);
      if (data.success) {
        setResponse(data);
      } else {
        setResponse({ success: false, answer: "", message: data.message || "답변을 받아오는데 실패했습니다." });
      }
    } catch (e) {
      setResponse({ success: false, answer: "", message: "서버와의 연결에 실패했습니다. 잠시 후 다시 시도해주세요." });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#ffffff]">
      {/* Dashboard Background - keeping the header and navigation */}
      <div className="absolute inset-0">
        <Dashboard />
      </div>
      
      {/* Overlay content area */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-6xl">
          {/* Main prompt area */}
          <div className="mb-8">
            <PromptBox 
              onSendMessage={handleSendMessage}
              disabled={isProcessing}
            />
          </div>
          
          {/* Response area */}
          {response && (
            <Card className="p-6 max-w-4xl mx-auto bg-muted/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-10 bg-primary rounded-full flex-shrink-0">
                  <Sparkles className="size-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">민원마루 응답</h3>
                  {response.message && !response.success && (
                    <p className="text-red-500 mb-2">{response.message}</p>
                  )}
                  {response.answer && (
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{response.answer}</p>
                  )}

                  {/* 관련 부서 */}
                  {response.relevantDepartments && response.relevantDepartments.length > 0 && (
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100">관련 부서</h4>
                      </div>
                      <div className="grid gap-3">
                        {response.relevantDepartments.map((dept) => (
                          <div key={dept.id} className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md border border-blue-100 dark:border-blue-800">
                            <div className="flex-1">
                              <div className="font-medium text-neutral-900 dark:text-neutral-100">{dept.name}</div>
                              <div className="text-sm text-neutral-500 dark:text-neutral-400">부서 ID: {dept.id}</div>
                            </div>
                            <a 
                              href={`tel:${dept.phone}`} 
                              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              {dept.phone}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 참고 정보 */}
                  {response.context && (
                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h4 className="font-semibold text-green-900 dark:text-green-100">참고 정보</h4>
                      </div>
                      <div className="bg-white dark:bg-neutral-800 p-3 rounded-md border border-green-100 dark:border-green-800">
                        <pre className="whitespace-pre-wrap text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed overflow-auto max-h-60">
                          {response.context}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
      
      {/* Semi-transparent overlay to dim the background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0 pointer-events-none"></div>
    </div>
  );
}