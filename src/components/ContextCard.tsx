import React from 'react';

interface ContextCardProps {
  context: string;
}

export function ContextCard({ context }: ContextCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-3 rounded-md shadow-sm">
      <pre className="whitespace-pre-wrap text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed overflow-auto max-h-60">
        {context}
      </pre>
    </div>
  );
}
