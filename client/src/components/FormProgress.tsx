/*
 * FormProgress – 3-step progress indicator for multi-step form
 */
import { CheckCircle } from "lucide-react";

interface FormProgressProps {
  currentStep: 1 | 2 | 3;
}

const steps = [
  { num: 1, label: "Dein Anliegen" },
  { num: 2, label: "Deine Daten" },
  { num: 3, label: "Termin" },
];

export default function FormProgress({ currentStep }: FormProgressProps) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
      {steps.map((step, i) => (
        <div key={step.num} className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step.num < currentStep
                  ? "bg-[#E91E8C] text-white"
                  : step.num === currentStep
                  ? "bg-[#E91E8C] text-white ring-4 ring-[#E91E8C]/20"
                  : "bg-[#eee] text-[#999]"
              }`}
            >
              {step.num < currentStep ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                step.num
              )}
            </div>
            <span
              className={`text-xs md:text-sm font-medium hidden sm:inline ${
                step.num <= currentStep ? "text-[#2D2D2D]" : "text-[#999]"
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-8 md:w-16 h-0.5 ${
                step.num < currentStep ? "bg-[#E91E8C]" : "bg-[#eee]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
