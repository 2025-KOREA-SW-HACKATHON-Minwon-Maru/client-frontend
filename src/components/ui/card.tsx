import * as React from "react";

import { cn } from "./utils";

interface CardTabProps extends React.ComponentProps<"button"> {
  value: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

// Tab Components
interface CardTabsProps extends React.ComponentProps<"div"> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

function CardTabs({ className, defaultValue, value, onValueChange, ...props }: CardTabsProps) {
  const [selectedTab, setSelectedTab] = React.useState(value || defaultValue || "");

  const handleTabChange = (tabValue: string) => {
    setSelectedTab(tabValue);
    onValueChange?.(tabValue);
  };

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
    }
  }, [value]);

  return (
    <div
      data-slot="card-tabs"
      className={cn("", className)}
      data-selected-tab={selectedTab}
      {...props}
    />
  );
}

function CardTabList({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-tab-list"
      className={cn(
        "flex h-10 items-center justify-start rounded-md bg-transparent p-1 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CardTab({ className, value, children, disabled, onClick, ...props }: CardTabProps) {
  return (
    <button
      data-slot="card-tab"
      data-value={value}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface CardTabPanelProps extends React.ComponentProps<"div"> {
  value: string;
  children?: React.ReactNode;
  className?: string;
}

function CardTabPanel({ className, value, children, ...props }: CardTabPanelProps) {
  return (
    <div
      data-slot="card-tab-panel"
      data-value={value}
      className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardTabs, CardTabList, CardTab, CardTabPanel,
};
