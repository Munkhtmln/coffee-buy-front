"use client";

import { useState } from "react";
import { Coffee } from "lucide-react";
import PaymentForm from "../components/payment-form";
import LoadingScreen from "../components/loading-screen";

export default function Home() {
  const [step, setStep] = useState(1);
  const [showErrors, setShowErrors] = useState(false);

  const handleContinue = () => {
    if (step === 1) {
      setShowErrors(true);
      // In a real app, we would validate the form here
      // For demo purposes, we'll show errors first, then proceed to loading
      setTimeout(() => {
        setStep(2);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5" />
          <h1 className="font-bold text-lg">Buy Me Coffee</h1>
        </div>
        <button className="text-sm text-gray-600 hover:text-gray-900">
          Log out
        </button>
      </header>

      <main className="max-w-2xl mx-auto py-12 px-4">
        {step === 1 && (
          <PaymentForm onContinue={handleContinue} showErrors={showErrors} />
        )}
        {step === 2 && <LoadingScreen />}
      </main>
    </div>
  );
}
