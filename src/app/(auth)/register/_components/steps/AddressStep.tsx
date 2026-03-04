"use client";

import Input from "@/src/components/base/Input";
import Select from "@/src/components/base/Select";
import { cityOptions, provinceOptions } from "../../_constants/registerSelectOptions";
import { RegisterFormValues } from "../../_types/registerForm.types";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const AddressStep = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RegisterFormValues>();

  useEffect(() => {
    register("lane1");
    register("city");
    register("district");
    register("province");
  }, [register]);

  return (
    <div className="space-y-4">
      <Input
        id="lane1"
        label="Lane 1"
        type="text"
        placeholder="Enter lane 1"
        value={watch("lane1") || ""}
        onChange={(value) => setValue("lane1", String(value), { shouldDirty: true, shouldValidate: true })}
        error={errors.lane1?.message}
        required
      />

      <Select
        label="City"
        options={cityOptions}
        labelKey="label"
        valueKey="value"
        placeholder="Select your city"
        value={watch("city") || ""}
        onChange={(value) => setValue("city", String(value || ""), { shouldDirty: true, shouldValidate: true })}
        error={errors.city?.message}
        required
      />

      <Input
        id="district"
        label="District"
        type="text"
        placeholder="Enter your district"
        value={watch("district") || ""}
        onChange={(value) =>
          setValue("district", String(value), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.district?.message}
        required
      />

      <Select
        label="Province"
        options={provinceOptions}
        labelKey="label"
        valueKey="value"
        placeholder="Select your province"
        value={watch("province") || ""}
        onChange={(value) =>
          setValue("province", String(value || ""), { shouldDirty: true, shouldValidate: true })
        }
        error={errors.province?.message}
        required
      />
    </div>
  );
};

export default AddressStep;
