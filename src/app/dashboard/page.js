'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import Dashboard from '../../components/Dashboard';
import Header from '@/components/Header';

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const career = searchParams.get('type') || 'web-dev';

  const handleReset = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
    
      <Header/>
      
      <main className="py-6">

        {/* main dashboard */}
        <Dashboard career={career} onReset={handleReset} />
      </main>
    </div>
  );
}
