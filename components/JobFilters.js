"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { formatRoleType, formatLocationType } from "@/libs/utils";

const ROLE_TYPES = [
  "fractional_coo",
  "fractional_cfo",
  "fractional_cmo",
  "fractional_cto",
  "fractional_cro",
  "fractional_cpo",
  "fractional_chro",
  "fractional_cso",
  "head_of_ops",
  "head_of_finance",
  "head_of_marketing",
  "head_of_engineering",
  "head_of_sales",
  "head_of_product",
  "head_of_hr",
  "head_of_growth",
];

const LOCATION_TYPES = ["remote", "hybrid", "onsite"];

const JobFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedRoles = searchParams.getAll("role");
  const selectedLocation = searchParams.get("location_type") || "all";

  const updateParams = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === undefined) {
          params.delete(key);
        } else if (Array.isArray(value)) {
          params.delete(key);
          value.forEach((v) => params.append(key, v));
        } else {
          params.set(key, value);
        }
      });

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const handleRoleToggle = (roleType) => {
    const updated = selectedRoles.includes(roleType)
      ? selectedRoles.filter((r) => r !== roleType)
      : [...selectedRoles, roleType];

    updateParams({ role: updated.length > 0 ? updated : null });
  };

  const handleLocationChange = (locationType) => {
    updateParams({
      location_type: locationType === "all" ? null : locationType,
    });
  };

  return (
    <div className="space-y-6">
      {/* Role type filters */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Role Type</h3>
        <div className="space-y-2">
          {ROLE_TYPES.map((role) => (
            <label
              key={role}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-primary"
                checked={selectedRoles.includes(role)}
                onChange={() => handleRoleToggle(role)}
              />
              <span className="text-sm">{formatRoleType(role)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location type filter */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Location</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="location_type"
              className="radio radio-sm radio-primary"
              checked={selectedLocation === "all"}
              onChange={() => handleLocationChange("all")}
            />
            <span className="text-sm">All</span>
          </label>
          {LOCATION_TYPES.map((loc) => (
            <label
              key={loc}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="location_type"
                className="radio radio-sm radio-primary"
                checked={selectedLocation === loc}
                onChange={() => handleLocationChange(loc)}
              />
              <span className="text-sm">{formatLocationType(loc)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(selectedRoles.length > 0 || selectedLocation !== "all") && (
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => router.push("?", { scroll: false })}
        >
          Clear all filters
        </button>
      )}
    </div>
  );
};

export default JobFilters;
