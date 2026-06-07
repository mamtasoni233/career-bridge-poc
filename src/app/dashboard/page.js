'use client';
import {Suspense} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Dashboard from '../../components/Dashboard';
import Header from '@/components/Header';

function DashboardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const career = searchParams.get('type') || 'Web Development';

  const handleReset = () => {
    router.push('/');
  };

  return (
      <main className="py-6">
        {/* main dashboard */}
        <Dashboard career={career} onReset={handleReset} />
      </main>
  );
}
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header/>
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading Your Dashboard...</div>}>
        <DashboardContent />
      </Suspense>
    </div>
    
  );
}
