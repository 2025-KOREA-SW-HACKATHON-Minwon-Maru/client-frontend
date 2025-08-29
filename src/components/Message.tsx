import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "./ui/utils";

interface MessageProps {
  content: string;
  isUser: boolean;
  timestamp?: Date;
}

export function Message({ content, isUser, timestamp }: MessageProps) {
  return (
    <div className={cn(
      "flex gap-3 mb-4",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className="size-8">
        <AvatarFallback className={cn(
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        )}>
          {isUser ? "U" : "AI"}
        </AvatarFallback>
      </Avatar>
      
      <div className={cn(
        "flex flex-col gap-1 max-w-[80%]",
        isUser ? "items-end" : "items-start"
      )}>
        <div className={cn(
          "rounded-lg px-3 py-2",
          isUser 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground"
        )}>
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
        {timestamp && (
          <span className="text-xs text-muted-foreground">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
    </div>
  );
}