export default function Header() {
  return (
    <header className="bg-white border-b border-slate-100 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-lg font-black tracking-tight text-blue-600">CareerBridge</h1>
            <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-md uppercase">POC Assessment</span>
        </div>
    </header>
  );
}