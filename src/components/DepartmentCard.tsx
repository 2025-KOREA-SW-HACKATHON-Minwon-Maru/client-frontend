import React from 'react';
import { Phone } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  phone: string;
}

interface DepartmentCardProps {
  department: Department;
  [key: string]: any;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
    return (
      <div className="w-full bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow group duration-200 m-2">
        <div className="mb-3">
          <h3 className="text-gray-900 text-base font-medium">
            {department.name}
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
            <Phone className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-gray-600 text-sm font-medium">
            {department.phone}
          </span>
        </div>
      </div>
    );
  }