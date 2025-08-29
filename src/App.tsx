import React, { useState } from "react";
import Dashboard from "./imports/Dashboard";
import { PromptBox } from "./components/PromptBox";
import { Card, CardTabs, CardTabList, CardTab, CardTabPanel } from "./components/ui/card";
import { Sparkles, Building2, FileText } from "lucide-react";
import apiService from "./services/api";
import { AskQuestionRequest, AskQuestionResponse } from "./types/api";
import { DepartmentCard } from "./components/DepartmentCard";
import { ContextCard } from "./components/ContextCard";

export default function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<AskQuestionResponse | null>(null);
  const [activeTab, setActiveTab] = useState<"answer" | "departments" | "context">("answer");

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

          {/* UI 테스트 버튼 */}
          <div className="mb-4 text-center">
            <button
              onClick={() => setResponse({
                success: true,
                answer: "이 응답은 UI 테스트를 위한 더미 데이터입니다. 실제 API 호출은 하지 않습니다.",
                message: "더미 데이터 테스트",
                relevantDepartments: [
                  { id: "1", name: "청와대", phone: "02-123-4567" },
                  { id: "2", name: "국무총리실", phone: "02-234-5678" },
                  { id: "3", name: "외교부", phone: "02-345-6789" },
                ],
                context: "이 참고 정보는 UI 테스트를 위한 더미 데이터입니다. 실제 API 호출은 하지 않습니다."
              })}
              className="px-4 py-2 bg-purple-600 text-black rounded-lg hover:bg-purple-700 transition-colors"
            >
              🎨 UI 테스트 (더미 데이터)
            </button>
          </div>
          
          {/* Response area with tabs */}
          {response && (
            <Card className="p-6 max-w-4xl mx-auto bg-muted/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center size-10 bg-primary rounded-full flex-shrink-0">
                  <Sparkles className="size-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTabs defaultValue="answer">
                    <CardTabList className="mb-4 justify-start">
                      <CardTab
                        value="answer"
                        onClick={() => setActiveTab("answer")}
                        className={`px-4 py-2 transition-all font-medium relative ${
                          activeTab === "answer" 
                            ? "text-black !border-b-2 !border-black !border-solid" 
                            : "text-gray-600 hover:text-gray-900 !border-b-2 !border-transparent"
                        }`}
                      >
                        응답
                      </CardTab>
                      <CardTab
                        value="departments"
                        onClick={() => setActiveTab("departments")}
                        disabled={!response?.relevantDepartments || response.relevantDepartments.length === 0}
                        className={`px-4 py-2 transition-all font-medium relative ${
                          activeTab === "departments" 
                            ? "text-black !border-b-2 !border-black !border-solid" 
                            : response?.relevantDepartments && response.relevantDepartments.length > 0
                              ? "text-gray-600 hover:text-gray-900 !border-b-2 !border-transparent"
                              : "text-gray-400 cursor-not-allowed !border-b-2 !border-transparent"
                        }`}
                      >
                        관련 부서
                        {response?.relevantDepartments && response.relevantDepartments.length > 0 && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-purple-100 text-purple-700 rounded-full">
                            {response.relevantDepartments.length}
                          </span>
                        )}
                      </CardTab>
                      <CardTab
                        value="context"
                        onClick={() => setActiveTab("context")}
                        disabled={!response?.context}
                        className={`px-4 py-2 transition-all font-medium relative ${
                          activeTab === "context" 
                            ? "text-black !border-b-2 !border-black !border-solid" 
                            : response?.context
                              ? "text-gray-600 hover:text-gray-900 !border-b-2 !border-transparent"
                              : "text-gray-400 cursor-not-allowed !border-b-2 !border-transparent"
                        }`}
                      >
                        참고 정보
                        {response?.context && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-purple-100 text-purple-700 rounded-full">
                            ✓
                          </span>
                        )}
                      </CardTab>
                    </CardTabList>

                    {/* Answer Panel */}
                    {activeTab === "answer" && (
                      <CardTabPanel value="answer">
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">민원마루 응답</h3>
                        {response.message && !response.success && (
                          <p className="text-red-500 mb-2">{response.message}</p>
                        )}
                        {response.answer && (
                          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{response.answer}</p>
                        )}
                      </CardTabPanel>
                    )}

                    {/* Departments Panel */}
                    {activeTab === "departments" && (
                      <CardTabPanel value="departments">
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">관련 부서</h3>
                        {response?.relevantDepartments && response.relevantDepartments.length > 0 ? (
                          <div className="flex gap-3">
                            {response.relevantDepartments.map((dept) => (
                              <DepartmentCard key={dept.id} department={dept} />
                            ))}
                          </div>
                        ) : (
                          <div className="p-8 text-center bg-gray-50 rounded-lg border border-gray-200">
                            <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <h4 className="text-lg font-medium text-gray-600 mb-2">관련 부서 정보 없음</h4>
                            <p className="text-gray-500">이 질문과 관련된 부서 정보가 없습니다.</p>
                          </div>
                        )}
                      </CardTabPanel>
                    )}

                    {/* Context Panel */}
                    {activeTab === "context" && (
                      <CardTabPanel value="context">
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">참고 정보</h3>
                        {response?.context ? (
                          <ContextCard context={response.context} />
                        ) : (
                          <div className="p-8 text-center bg-gray-50 rounded-lg border border-gray-200">
                            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <h4 className="text-lg font-medium text-gray-600 mb-2">참고 정보 없음</h4>
                            <p className="text-gray-500">이 질문과 관련된 참고 정보가 없습니다.</p>
                          </div>
                        )}
                      </CardTabPanel>
                    )}
                  </CardTabs>
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