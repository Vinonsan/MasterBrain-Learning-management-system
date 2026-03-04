"use client";

import { RegisterFlowProvider, useRegisterFlow } from "@/src/app/(auth)/register/_components/RegisterFlowProvider";

import {
  RegisterFormValues,
  registerDefaultValues,
} from "@/src/app/(auth)/register/_types/registerForm.types";
import { registerFormSchema } from "@/src/app/(auth)/register/_validations/registerForm.schema";
import AccountStep from "@/src/app/(auth)/register/_components/steps/AccountStep";
import AddressStep from "@/src/app/(auth)/register/_components/steps/AddressStep";
import PersonalInfoStep from "@/src/app/(auth)/register/_components/steps/PersonalInfoStep";
import Button from "@/src/components/base/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const RegisterPageContent = () => {
  const { step, totalSteps, nextStep, prevStep } = useRegisterFlow();
  const methods = useForm<RegisterFormValues>({
    mode: "onChange",
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerDefaultValues,
  });

  const progressPercentage = Math.round((step / totalSteps) * 100);
  const fieldsByStep: Record<number, (keyof RegisterFormValues)[]> = {
    1: ["firstName", "lastName", "phoneNumber", "email", "nic", "dateOfBirth", "gender"],
    2: ["lane1", "city", "district", "province"],
    3: ["username", "password"],
  };

  const renderStep = () => {
    if (step === 1) return <PersonalInfoStep />;
    if (step === 2) return <AddressStep />;
    return <AccountStep />;
  };

  const handleNext = async () => {
    const valid = await methods.trigger(fieldsByStep[step]);
    if (valid) nextStep();
  };

  const onSubmit = methods.handleSubmit(async (data) => {
    const valid = await methods.trigger(fieldsByStep[step]);
    if (!valid) return;
    console.log("register data", data);
  });

  return (
    <div className="mx-auto flex w-md flex-col items-start justify-center rounded-b-xl border border-black/10">
      <div className="h-1 w-full rounded-xl bg-black/10">
        <div
          className="h-1 rounded-xl bg-primary transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="w-full p-6">
        <div className="flex w-full flex-col items-center justify-center space-y-1 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full">
            <Image src="/siteicon.png" alt="Logo" width={56} height={56} className="object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-dark">Register</h2>
          <p className="text-sm text-gray-500">Create your account to get started</p>
        </div>

        <FormProvider {...methods}>
          <form className="mt-6 w-full space-y-4" onSubmit={onSubmit}>
           

            {step > 1 && (
              <Button type="button" variant="outline" size="sm" className="w-full" onClick={prevStep}>
                Back
              </Button>
            )}

            {renderStep()}

            {step < totalSteps ? (
              <Button type="button" variant="primary" size="md" className="w-full" onClick={handleNext}>
                Continue
              </Button>
            ) : (
              <Button type="submit" variant="primary" size="md" className="w-full">
                Register
              </Button>
            )}
          </form>
        </FormProvider>

        <div className="flex w-full items-center justify-center">
          <p className="mt-5 text-sm text-zinc-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  return (
    <RegisterFlowProvider>
      <RegisterPageContent />
    </RegisterFlowProvider>
  );
};

export default RegisterPage;
