'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: '', 
    education: 'Undergraduate',
    interest: 'coding',
    careerField: 'Web Development'
  });

  const handleInterestChange = (interestValue) => {
    let defaultCareer = 'Web Development';
    if (interestValue === 'data-science') {
      defaultCareer = 'Data Scientist';
    }else if(interestValue === "design"){
      defaultCareer = 'UI/UX Designer'
    }else if(interestValue === 'marketing'){
      defaultCareer ='Digital Marketing Specialist'
    }
    
    setFormData({
      ...formData,
      interest: interestValue,
      careerField: defaultCareer
    });
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.name.trim()) {
      alert("Please enter your name first!");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/dashboard?type=${formData.careerField}&education=${formData.education}&interest=${formData.interest}&name=${encodeURIComponent(formData.name)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-100 p-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-black tracking-tight text-blue-600">CareerBridge</h1>
          <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-md uppercase">POC Assessment</span>
        </div>
      </header>
      
      <main className="py-10">
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-md border border-slate-100 mt-10">
          <div className="w-full bg-slate-100 h-1.5 rounded-full mb-6">
            <div 
              className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>

          <p className="text-xs font-bold text-blue-600 uppercase mb-1">Step {currentStep} of 3</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Let's get to know you</h2>
                <p className="text-xs text-slate-500 mb-4">Tell us your name and current education level.</p>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Your Full Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="Enter your name (e.g., Priya)"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Education Level</label>
                  <select 
                    value={formData.education} 
                    onChange={(e) => setFormData({...formData, education: e.target.value})} 
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Undergraduate">Undergraduate / Studying in College</option>
                    <option value="Fresh Graduate">Fresh Graduate (Passed Out)</option>
                    <option value="College Dropout">College Dropout</option>
                  </select>
                </div>

                <button type="button" onClick={nextStep} className="w-full mt-6 bg-blue-600 text-white p-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                  Next Step →
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">What interests you the most?</h2>
                <p className="text-xs text-slate-500 mb-4">Choose a broad field you like.</p>
                <select 
                  value={formData.interest} 
                  onChange={(e) => handleInterestChange(e.target.value)} 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="coding">Software Development & Coding</option>
                  <option value="data-science">Data Science & Analytics</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                </select>
                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={prevStep} className="w-1/2 bg-slate-100 text-slate-700 p-3 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-colors">
                    ← Back
                  </button>
                  <button type="button" onClick={nextStep} className="w-1/2 bg-blue-600 text-white p-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                    Next Step →
                  </button>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Pick your target role</h2>
                <p className="text-xs text-slate-500 mb-4">Select the specific job track based on your interest.</p>
                
                <select 
                value={formData.careerField} 
                onChange={(e) => setFormData({...formData, careerField: e.target.value})} 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                
                {(formData.interest === 'coding') && (
                  <>
                    <option value="Web Development">Web Developer Track</option>
                    <option value="Frontend Developer">Frontend Developer Specialization</option>
                  </>
                )}

                {(formData.interest === 'data-science' ) && (
                  <>
                    <option value="Data Scientist">Data Scientist Track</option>
                    <option value="Data Analyst"> Data Analyst Track</option>
                  </>
                )}

                {(formData.interest === 'design') && (
                  <>
                    <option value="UI/UX Designer">UI/UX Designer Track</option>
                  </>
                )}

                {(formData.interest === 'marketing') && (
                  <>
                    <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
                  </>
                )}
                </select>

                <div className="flex gap-3 mt-6">
                  <button type="button" onClick={prevStep} className="w-1/2 bg-slate-100 text-slate-700 p-3 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-colors">
                    ← Back
                  </button>
                  <button type="submit" className="w-1/2 bg-blue-600 text-white p-3 rounded-xl font-semibold text-sm hover:bg-blue-700 shadow-sm shadow-blue-200 transition-colors">
                    Submit Profile
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>
      </main>
    </div>
  );
}
