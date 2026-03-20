"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type RegisterFlowContextValue = {
  step: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
};

const TOTAL_STEPS = 3;

const RegisterFlowContext = createContext<RegisterFlowContextValue | null>(null);

export const RegisterFlowProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const value = {
    step,
    totalSteps: TOTAL_STEPS,
    nextStep,
    prevStep,
  };

  return <RegisterFlowContext.Provider value={value}>{children}</RegisterFlowContext.Provider>;
};

export const useRegisterFlow = () => {
  const context = useContext(RegisterFlowContext);

  if (!context) {
    throw new Error("useRegisterFlow must be used within RegisterFlowProvider");
  }

  return context;
};
