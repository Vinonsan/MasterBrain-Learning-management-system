"use client";

import Input from "@/src/components/base/Input";
import { RegisterFormValues } from "../../_types/registerForm.types";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const AccountStep = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RegisterFormValues>();

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

  return (
    <div className="space-y-4">
      <Input
        id="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={watch("username") || ""}
        onChange={(value) =>
          setValue("username", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.username?.message}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Create a strong password"
        value={watch("password") || ""}
        onChange={(value) =>
          setValue("password", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.password?.message}
        required
      />
    </div>
  );
};

export default AccountStep;
