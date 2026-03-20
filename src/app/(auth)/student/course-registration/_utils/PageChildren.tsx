"use client";

import { courses, getCourseById } from "@/src/app/(site)/course/_utils/data/courses";
import Button from "@/src/components/base/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import CourseInfoStep from "./components/CourseInfoStep";
import PaymentInfoStep from "./components/PaymentInfoStep";

const PageChildren = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryCourseId = searchParams.get("courseId") || "";
  const [step, setStep] = useState(1);
  const [studentId, setStudentId] = useState("MB-STU-2026-0001");
  const [courseId, setCourseId] = useState(queryCourseId);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const selectedCourse = useMemo(() => getCourseById(courseId), [courseId]);

  const validateStepOne = () => {
    if (!studentId.trim()) {
      setError("Student ID is required.");
      return false;
    }
    if (!courseId.trim()) {
      setError("Please select a course.");
      return false;
    }
    setError("");
    return true;
  };

  const validateStepTwo = () => {
    if (!paymentMethod) {
      setError("Please select a payment method.");
      return false;
    }
    if (!transactionId.trim()) {
      setError("Transaction reference is required.");
      return false;
    }
    if (!paidAmount.trim()) {
      setError("Paid amount is required.");
      return false;
    }
    if (!receiptFile) {
      setError("Please upload receipt file.");
      return false;
    }
    setError("");
    return true;
  };

  const handleNext = () => {
    if (!validateStepOne()) return;
    setStep(2);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStepTwo()) return;

    // Replace with API integration
    console.log("course registration payload", {
      studentId,
      courseId,
      paymentMethod,
      transactionId,
      paidAmount,
      receiptFileName: receiptFile?.name,
    });

    router.push("/student");
  };

  return (
    <div className="mx-auto  w-md">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        <div className="h-1 w-full bg-black/10">
          <div
            className="h-1 bg-primary transition-all duration-300"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>

        <div className="space-y-6 p-6">
          <div>
            <h1 className="text-2xl font-bold text-dark">Course Registration</h1>
          
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <CourseInfoStep
                studentId={studentId}
                setStudentId={setStudentId}
                courseId={courseId}
                setCourseId={setCourseId}
                courseList={courses}
                selectedCourse={selectedCourse}
              />
            )}

            {step === 2 && (
              <PaymentInfoStep
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                transactionId={transactionId}
                setTransactionId={setTransactionId}
                paidAmount={paidAmount}
                setPaidAmount={setPaidAmount}
                setReceiptFile={setReceiptFile}
                receiptFileName={receiptFile?.name}
              />
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex gap-2 pt-2">
              {step === 2 && (
                <Button type="button" variant="outline" size="sm" className="w-full" onClick={() => setStep(1)}>
                  Back
                </Button>
              )}

              {step === 1 ? (
                <Button type="button" variant="primary" size="sm" className="w-full" onClick={handleNext}>
                  Continue to Payment
                </Button>
              ) : (
                <Button type="submit" variant="primary" size="sm" className="w-full">
                  Submit Registration
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageChildren;

