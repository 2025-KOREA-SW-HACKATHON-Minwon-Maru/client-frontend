import React, { useState, useRef, useEffect } from "react";
import Dashboard from "./imports/Dashboard";
import { PromptBox } from "./components/PromptBox";
import { Card, CardTabs, CardTabList, CardTab, CardTabPanel } from "./components/ui/card";
import { Sparkles, Building2, FileText, Trash2 } from "lucide-react";
import { DepartmentCard } from "./components/DepartmentCard";
import { ContextCard } from "./components/ContextCard";
import ReactMarkdown from 'react-markdown';
import { useChat } from "./hooks/useChat";

export default function App() {
  const { messages, isProcessing, error, sendMessage, clearMessages } = useChat();
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: "answer" | "departments" | "context" }>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const setActiveTab = (messageId: string, tab: "answer" | "departments" | "context") => {
    setActiveTabs(prev => ({ ...prev, [messageId]: tab }));
  };

  const getActiveTab = (messageId: string) => {
    return activeTabs[messageId] || "answer";
  };

  const handleSendMessage = async (message: string) => {
    await sendMessage(message);
  };

  // 새 메시지가 추가될 때마다 스크롤을 아래로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

          {/* UI 테스트 버튼 - 주석처리됨
          <div className="mb-4 text-center">
            <button
              onClick={() => setResponse({
                success: true,
                answer: "이 **응답은** UI 테스트를 위한 더미 데이터입니다.\n - 실제 *API* 호출은 하지 않습니다.",
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
          */}
          
          {/* Chat messages area */}
          {messages.length > 0 && (
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* Clear messages button */}
              <div className="flex justify-end">
                <button
                  onClick={clearMessages}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  대화 기록 지우기
                </button>
              </div>
              {messages.map((message, index) => (
                <Card key={message.id} className="p-6 bg-muted/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center size-10 bg-primary rounded-full flex-shrink-0">
                      <Sparkles className="size-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      {/* Question */}
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">질문</h3>
                        <p className="text-gray-700">{message.question}</p>
                      </div>

                      {/* Answer with tabs */}
                      <CardTabs 
                        value={getActiveTab(message.id)} 
                        onValueChange={(value) => setActiveTab(message.id, value as "answer" | "departments" | "context")}
                      >
                        <CardTabList className="mb-4 justify-start">
                          <CardTab
                            value="answer"
                            className={`px-4 py-2 transition-all font-medium relative ${
                              getActiveTab(message.id) === "answer"
                                ? "text-black border-b-2 border-black border-solid"
                                : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
                            }`}
                          >
                            응답
                          </CardTab>
                          <CardTab
                            value="departments"
                            disabled={!message.relevantDepartments || message.relevantDepartments.length === 0}
                            className={`px-4 py-2 transition-all font-medium relative ${
                              getActiveTab(message.id) === "departments"
                                ? "text-black border-b-2 border-black border-solid"
                                : message.relevantDepartments && message.relevantDepartments.length > 0
                                  ? "text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
                                  : "text-gray-400 cursor-not-allowed border-b-2 border-transparent"
                            }`}
                          >
                            관련 부서
                            {message.relevantDepartments && message.relevantDepartments.length > 0 && (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-purple-100 text-purple-700 rounded-full">
                                {message.relevantDepartments.length}
                              </span>
                            )}
                          </CardTab>
                          <CardTab
                            value="context"
                            disabled={!message.context}
                            className={`px-4 py-2 transition-all font-medium relative ${
                              getActiveTab(message.id) === "context"
                                ? "text-black border-b-2 border-black border-solid"
                                : message.context
                                  ? "text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
                                  : "text-gray-400 cursor-not-allowed border-b-2 border-transparent"
                            }`}
                          >
                            참고 정보
                            {message.context && (
                              <span className="ml-2 px-2 py-0.5 text-xs bg-purple-100 text-purple-700 rounded-full">
                                ✓
                              </span>
                            )}
                          </CardTab>
                        </CardTabList>

                        {/* Answer Panel */}
                        {getActiveTab(message.id) === "answer" && (
                          <CardTabPanel value="answer">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">민원마루 응답</h3>
                            {message.answer && (
                              <div className="text-gray-700 leading-relaxed max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mb-2 [&>p]:mb-3 [&>ul]:mb-3 [&>ol]:mb-3 [&>li]:mb-1 [&>strong]:font-bold [&>em]:italic [&>code]:bg-gray-100 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm [&>pre]:bg-gray-100 [&>pre]:p-3 [&>pre]:rounded [&>pre]:overflow-x-auto [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600">
                                <ReactMarkdown>{message.answer}</ReactMarkdown>
                              </div>
                            )}
                          </CardTabPanel>
                        )}

                        {/* Departments Panel */}
                        {getActiveTab(message.id) === "departments" && (
                          <CardTabPanel value="departments">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">관련 부서</h3>
                            {message.relevantDepartments && message.relevantDepartments.length > 0 ? (
                              <div className="flex gap-3">
                                {message.relevantDepartments.map((dept) => (
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
                        {getActiveTab(message.id) === "context" && (
                          <CardTabPanel value="context">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">참고 정보</h3>
                            {message.context ? (
                              <ContextCard context={message.context} />
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
              ))}
              
              {/* Auto-scroll target */}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Error display */}
          {error && (
            <Card className="p-6 max-w-4xl mx-auto bg-red-50 border-red-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 bg-red-100 rounded-full flex-shrink-0">
                  <Sparkles className="size-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">오류 발생</h3>
                  <p className="text-red-700">{error}</p>
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