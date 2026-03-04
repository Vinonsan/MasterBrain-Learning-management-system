"use client";

import Input from "@/src/components/base/Input";
import Select from "@/src/components/base/Select";
import { genderOptions } from "../../_constants/registerSelectOptions";
import { RegisterFormValues } from "../../_types/registerForm.types";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const PersonalInfoStep = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RegisterFormValues>();

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("phoneNumber");
    register("email");
    register("nic");
    register("dateOfBirth");
    register("gender");
  }, [register]);

  return (
    <div className="space-y-4">
      <Input
        id="firstName"
        label="First Name"
        type="text"
        placeholder="Enter your first name"
        value={watch("firstName") || ""}
        onChange={(value) =>
          setValue("firstName", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.firstName?.message}
      />

      <Input
        id="lastName"
        label="Last Name"
        type="text"
        placeholder="Enter your last name"
        value={watch("lastName") || ""}
        onChange={(value) =>
          setValue("lastName", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.lastName?.message}
      />

      <Input
        id="phoneNumber"
        label="Phone Number"
        type="text"
        placeholder="Enter your phone number"
        value={watch("phoneNumber") || ""}
        onChange={(value) =>
          setValue("phoneNumber", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.phoneNumber?.message}
      />

      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={watch("email") || ""}
        onChange={(value) =>
          setValue("email", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.email?.message}
      />

      <Input
        id="nic"
        label="NIC"
        type="text"
        placeholder="Enter your NIC"
        value={watch("nic") || ""}
        onChange={(value) => setValue("nic", String(value), { shouldDirty: true, shouldValidate: true })}
        error={errors.nic?.message}
      />

      <Input
        id="dateOfBirth"
        label="Date of Birth"
        type="date"
        value={watch("dateOfBirth") || ""}
        onChange={(value) =>
          setValue("dateOfBirth", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.dateOfBirth?.message}
      />

      <Select
        label="Gender"
        options={genderOptions}
        labelKey="label"
        valueKey="value"
        placeholder="Select gender"
        value={watch("gender") || ""}
        onChange={(value) =>
          setValue("gender", String(value || ""), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.gender?.message}
      />
    </div>
  );
};

export default PersonalInfoStep;
