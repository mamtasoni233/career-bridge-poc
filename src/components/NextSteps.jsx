'use client';
import { useState, useEffect } from 'react';

export default function NextSteps({ tasks, career }) {
  const [completedTasks, setCompletedTasks] = useState({});

  useEffect(() => {
    setCompletedTasks({});
  }, [career]);

  const toggleTask = (index) => {
    setCompletedTasks(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 shadow-sm">
      <h3 className="text-md font-bold mb-4 text-amber-900 flex items-center gap-2">
        🎯 What to do this week
      </h3>
      <ul className="space-y-3 text-amber-950 text-sm font-medium">
        {tasks?.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <input 
              type="checkbox" 
              checked={!!completedTasks[idx]}
              onChange={() => toggleTask(idx)}
              className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4 border-amber-300 cursor-pointer mt-0.5" 
            />
            <span className={`transition-all duration-200 leading-tight ${
              completedTasks[idx] ? 'line-through text-amber-400 font-normal' : ''
            }`}>
              {step}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
