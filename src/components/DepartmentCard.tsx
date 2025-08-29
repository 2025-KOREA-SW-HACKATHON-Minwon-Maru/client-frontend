import React from 'react';
import { Phone } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  phone: string;
}

interface DepartmentCardProps {
  department: Department;
  [key: string]: any; // 추가 props 허용 (key 포함)
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <div className="w-full self-stretch max-w-40 p-2 inline-flex flex-col justify-between items-start bg-white dark:bg-neutral-800 rounded-md shadow-sm hover:shadow-md transition-shadow">
      <div className="self-stretch min-h-12 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch justify-center text-neutral-900 dark:text-neutral-100 text-sm font-medium leading-tight">
          {department.name}
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center">
        <div className="flex justify-start items-center gap-1">
          <div className="inline-flex flex-col justify-start items-start">
            <div className="self-stretch relative rounded-full flex flex-col justify-start items-start overflow-hidden">
              <div className="w-4 h-4 left-0 top-0 absolute bg-purple-600 rounded-full" />
              <Phone className="w-4 h-4 max-w-4 relative text-white" />
            </div>
          </div>
          <div className="inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="justify-center text-neutral-600 dark:text-neutral-400 text-xs font-medium leading-none">
              {department.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
