"use client";

import { useState } from "react";
import slugify from "slugify";

const ROLE_TYPES = [
  { value: "fractional_coo", label: "Fractional COO" },
  { value: "fractional_cmo", label: "Fractional CMO" },
  { value: "fractional_cfo", label: "Fractional CFO" },
  { value: "fractional_cto", label: "Fractional CTO" },
  { value: "fractional_cro", label: "Fractional CRO" },
  { value: "fractional_chro", label: "Fractional CHRO" },
  { value: "fractional_cos", label: "Chief of Staff" },
  { value: "head_of_ops", label: "Head of Ops" },
  { value: "other", label: "Other" },
];

const LOCATION_TYPES = [
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "Onsite" },
];

const SALARY_TYPES = [
  { value: "monthly", label: "Per Month" },
  { value: "hourly", label: "Per Hour" },
  { value: "annual", label: "Per Year" },
];

export default function PostJobForm({ plans }) {
  const [form, setForm] = useState({
    title: "",
    company_name: "",
    company_url: "",
    company_logo_url: "",
    description: "",
    role_type: "fractional_coo",
    location_type: "remote",
    location: "",
    salary_min: "",
    salary_max: "",
    salary_type: "monthly",
    hours_per_week: "",
    apply_url: "",
    apply_email: "",
  });
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // Create job in DB first
      const slug =
        slugify(form.title, { lower: true, strict: true }) +
        "-" +
        Date.now().toString(36);

      const res = await fetch("/api/jobs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          slug,
          salary_min: form.salary_min ? parseInt(form.salary_min, 10) : null,
          salary_max: form.salary_max ? parseInt(form.salary_max, 10) : null,
          source: "direct_post",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create job listing");
      }

      const { jobId } = await res.json();

      // Create Stripe checkout session
      const plan = plans[selectedPlan];
      const checkoutRes = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: plan.priceId,
          mode: plan.mode,
          successUrl: `${window.location.origin}/post-a-job/success`,
          cancelUrl: `${window.location.origin}/post-a-job`,
          clientReferenceId: jobId,
        }),
      });

      if (!checkoutRes.ok) {
        const data = await checkoutRes.json();
        throw new Error(data.error || "Failed to create checkout session");
      }

      const { url } = await checkoutRes.json();
      window.location.href = url;
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Job Title *</span>
        </label>
        <input
          type="text"
          name="title"
          required
          placeholder="e.g. Fractional COO for Series A SaaS"
          className="input input-bordered w-full"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      {/* Company Name + URL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Company Name *</span>
          </label>
          <input
            type="text"
            name="company_name"
            required
            placeholder="Acme Corp"
            className="input input-bordered w-full"
            value={form.company_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Company Website</span>
          </label>
          <input
            type="url"
            name="company_url"
            placeholder="https://acme.com"
            className="input input-bordered w-full"
            value={form.company_url}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Company Logo URL */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Company Logo URL</span>
        </label>
        <input
          type="url"
          name="company_logo_url"
          placeholder="https://acme.com/logo.png"
          className="input input-bordered w-full"
          value={form.company_logo_url}
          onChange={handleChange}
        />
        <label className="label">
          <span className="label-text-alt text-base-content/50">
            Direct link to your logo image (PNG or JPG)
          </span>
        </label>
      </div>

      {/* Role Type + Location Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Role Type *</span>
          </label>
          <select
            name="role_type"
            className="select select-bordered w-full"
            value={form.role_type}
            onChange={handleChange}
          >
            {ROLE_TYPES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Location Type *</span>
          </label>
          <select
            name="location_type"
            className="select select-bordered w-full"
            value={form.location_type}
            onChange={handleChange}
          >
            {LOCATION_TYPES.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Location */}
      {form.location_type !== "remote" && (
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. San Francisco, CA"
            className="input input-bordered w-full"
            value={form.location}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Salary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Salary Min</span>
          </label>
          <input
            type="number"
            name="salary_min"
            placeholder="3000"
            className="input input-bordered w-full"
            value={form.salary_min}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Salary Max</span>
          </label>
          <input
            type="number"
            name="salary_max"
            placeholder="10000"
            className="input input-bordered w-full"
            value={form.salary_max}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Salary Type</span>
          </label>
          <select
            name="salary_type"
            className="select select-bordered w-full"
            value={form.salary_type}
            onChange={handleChange}
          >
            {SALARY_TYPES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hours per week */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Hours per Week</span>
        </label>
        <input
          type="text"
          name="hours_per_week"
          placeholder="e.g. 10-15"
          className="input input-bordered w-full"
          value={form.hours_per_week}
          onChange={handleChange}
        />
      </div>

      {/* Description */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Job Description *</span>
        </label>
        <textarea
          name="description"
          required
          rows={10}
          placeholder="Describe the role, responsibilities, ideal candidate, and what success looks like..."
          className="textarea textarea-bordered w-full"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      {/* Apply URL + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Application URL *</span>
          </label>
          <input
            type="url"
            name="apply_url"
            required
            placeholder="https://acme.com/apply"
            className="input input-bordered w-full"
            value={form.apply_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              Contact Email (optional)
            </span>
          </label>
          <input
            type="email"
            name="apply_email"
            placeholder="hiring@acme.com"
            className="input input-bordered w-full"
            value={form.apply_email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Plan Selection */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Select a Plan *</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan, i) => (
            <label
              key={plan.name}
              className={`cursor-pointer border rounded-lg p-4 transition-colors ${
                selectedPlan === i
                  ? "border-primary bg-primary/5"
                  : "border-base-300 hover:border-base-content/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="plan"
                  className="radio radio-primary"
                  checked={selectedPlan === i}
                  onChange={() => setSelectedPlan(i)}
                />
                <div>
                  <span className="font-semibold">{plan.name}</span>
                  <span className="ml-2 text-base-content/60">
                    ${plan.price}
                  </span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="alert alert-error">
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className={`btn btn-secondary btn-lg w-full ${
          status === "loading" ? "btn-disabled" : ""
        }`}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          `Post Job — $${plans[selectedPlan].price}`
        )}
      </button>
    </form>
  );
}
