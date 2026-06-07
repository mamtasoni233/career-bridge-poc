'use client';
import { useSearchParams } from 'next/navigation';
import { allMentorsList } from '../data/mentors';
import { careerData } from '../data/roadmaps';
import Link from 'next/link';
import NextSteps from './NextSteps'; 

export default function Dashboard({ career, onReset }) {
  
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || 'Guest User';
  const education = searchParams.get('education');
  const careerField = searchParams.get('type');
  
  const data = careerData[careerField] || careerData["Web Development"];
  console.log('Career Data for Dashboard:', data);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <button onClick={onReset} className="mb-6 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
        ← Exit Dashboard & Restart Onboarding
      </button>
      
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 animate-fadeIn">
          Welcome back, <span className="text-blue-600">{userName}</span>! 👋
        </h1>

        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Your Profile Summary</h2>
            <div className="flex gap-3 mt-1.5 flex-wrap">
              <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-lg">
                👤 {userName}
              </span>
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                🎓 {education}
              </span>
              <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100">
                💡 {careerField}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Roadmap */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold mb-6 text-slate-900 border-b pb-3">{data.title}</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:bg-gray-100 before:w-0.5">
            {data.steps.map((step, idx) => (
              <div key={idx} className="flex items-start space-x-4 relative">
                <span className="bg-blue-600 text-white rounded-full min-w-[24px] min-h-[24px] flex items-center justify-center text-xs font-bold z-10 shadow-sm">
                  {idx + 1}
                </span>
                <p className="text-slate-700 pt-0.5 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
            
        <div className="space-y-6">
          <NextSteps tasks={data.tasks} career={career} />
        
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-bold text-slate-900">Available Mentors 🧑‍🏫</h3>
              <Link
                href="/mentors"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 underline transition-all"
              >
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {allMentorsList.slice(0, 1).map(m => (
                <div key={m.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={m.image} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                    <h4 className="font-bold text-slate-900 text-sm">{m.name}</h4>
                  </div>
                  <span className="inline-block bg-blue-50 text-blue-700 text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase mt-1 mb-2">
                    {m.domain.replace('-', ' ')}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
