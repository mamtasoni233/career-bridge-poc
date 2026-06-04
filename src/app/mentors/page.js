'use client';
import { useRouter } from 'next/navigation';
import { allMentorsList } from '../../data/mentors';
import Header from '@/components/Header';

export default function MentorsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto p-6 md:p-10">

        <button 
          onClick={() => router.back()} 
          className="mb-6 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-slate-800">All Available Mentors</h1>
          <p className="text-sm text-slate-500 mt-1">Connect with industry experts across all available domain paths.</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allMentorsList.map((mentor) => (
            <div key={mentor.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <img src={mentor.image} alt={mentor.name} className="w-10 h-10 rounded-full object-cover" />
                  <h3 className="font-bold text-slate-900 text-lg">{mentor.name}</h3>
                  <span className="text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {mentor.domain}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">{mentor.bio}</p>
              </div>

      
              <div className="mt-6 border-t border-slate-50 pt-4 flex justify-end">
                <button 
                  onClick={() => alert(`Connection request sent to ${mentor.name}! (Mock Action)`)}
                  className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Request Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
