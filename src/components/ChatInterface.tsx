import { useState, useRef, useEffect } from "react";
import { Message } from "./Message";
import { PromptInput } from "./PromptInput";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const simulateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Generate a mock AI response
    const responses = [
      "That's an interesting question! Let me think about that...",
      "I understand what you're asking. Here's my perspective on that topic.",
      "Great point! I'd be happy to help you explore this further.",
      "That's a thoughtful prompt. Let me provide you with some insights.",
      "I see what you're getting at. Here's how I would approach this:",
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const aiMessage: ChatMessage = {
      id: Date.now().toString() + "-ai",
      content: randomResponse,
      isUser: false,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response
    await simulateAIResponse(content);
  };

  return (
    <Card className="flex flex-col h-[600px] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div>
          <h2>AI Assistant</h2>
          <p className="text-muted-foreground">Ask me anything</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-muted-foreground">Online</span>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <h3 className="text-muted-foreground mb-2">Start a conversation</h3>
              <p className="text-sm text-muted-foreground">
                Type a message below to begin chatting with the AI assistant.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <Message
                key={message.id}
                content={message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            {isTyping && (
              <div className="flex gap-3 mb-4">
                <div className="size-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs">AI</span>
                </div>
                <div className="bg-muted rounded-lg px-3 py-2">
                  <div className="flex gap-1">
                    <div className="size-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="size-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="size-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </ScrollArea>

      {/* Input */}
      <PromptInput
        onSendMessage={handleSendMessage}
        disabled={isTyping}
        placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
      />
    </Card>
  );
}