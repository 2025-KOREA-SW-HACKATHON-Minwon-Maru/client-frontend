import React, { useState, useRef, KeyboardEvent } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

interface PromptBoxProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function PromptBox({ onSendMessage, disabled = false }: PromptBoxProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-8 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center size-12">
          <img src="/logo2.png" alt="민원마루 로고" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">민원마루</h2>
          <p className="text-muted-foreground">민원 절차·서류 안내, 부서 추천, 진행상황 확인을 도와드려요</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="무슨 민원을 처리하고 싶으신가요? (Enter로 전송, Shift+Enter 줄바꿈)"
            disabled={disabled}
            className="min-h-[120px] max-h-[200px] text-lg p-6 resize-none border-2 focus-visible:border-primary transition-colors"
            rows={4}
          />
          {disabled && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-md">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                <span>답변 준비 중 ...</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span>💡 예: 주민등록등초본 발급, 불법주정차 신고, 처리 기한 문의</span>
          </div>
          <Button
            onClick={handleSend}
            disabled={disabled || !message.trim()}
            size="lg"
            className="px-8"
          >
            <Send className="size-4 mr-2" />
            Send
          </Button>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-wrap gap-2 pt-4 border-t">
          <span className="text-sm text-muted-foreground mr-2">Quick actions:</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setMessage("주민등록등초본 온라인 발급 방법 알려줘")}
            disabled={disabled}
          >
            🧾 등초본 발급 안내
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setMessage("불법 주정차 신고 절차와 준비물은?")}
            disabled={disabled}
          >
            🚗 불법주정차 신고
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setMessage("이 민원은 어느 부서/기관에 제출해야 해? '도로 보수 요청' ")}
            disabled={disabled}
          >
            🧭 부서/기관 추천
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setMessage("자동차세 비과세 신청 처리 기한과 진행상황 조회 방법 알려줘")}
            disabled={disabled}
          >
            ⏱ 처리기한·진행조회
          </Button>
        </div>
      </div>
    </Card>
  );
}