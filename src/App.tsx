import React, { useState } from "react";
import Dashboard from "./imports/Dashboard";
import { PromptBox } from "./components/PromptBox";
import { Card } from "./components/ui/card";
import { Sparkles } from "lucide-react";

export default function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<string>("");

  const handleSendMessage = async (message: string) => {
    setIsProcessing(true);
    setResponse("");

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));

    // Generate mock AI response based on the message
    const responses = [
      "민원 안내: 온라인으로 신청 가능한 업무입니다. 필요한 서류는 신분증, 공동/간편인증이며 접수 경로는 국민신문고 또는 해당 지자체 민원 포털입니다. 원하시면 접수 링크와 단계별 절차를 안내해 드릴게요.",
      "부서 추천: 문의하신 내용은 도로 시설물(포트홀) 관련 민원으로 보입니다. 관할 지자체 도로과 소관이며, 사진 첨부 시 처리 속도가 빨라집니다. 접수 후 평균 처리기한은 5일입니다.",
      "진행 조회: 접수번호가 있으시면 국민신문고 또는 지자체 포털에서 '민원처리현황' 메뉴로 조회할 수 있어요. 접수번호가 없을 경우, 성명/생년월일과 접수일 범위로도 검색이 가능합니다.",
      "신고 가이드: 불법 주정차는 생활불편신고(안전신문고) 앱으로 1분 간격 2장의 사진을 업로드해야 합니다. 위치 정보가 포함되도록 설정을 켜고, 차량번호가 식별되게 촬영해 주세요.",
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setResponse(randomResponse);
    setIsProcessing(false);
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
                  <p className="text-muted-foreground leading-relaxed">{response}</p>
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