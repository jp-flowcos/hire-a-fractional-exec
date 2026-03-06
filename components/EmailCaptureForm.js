"use client";

import { useState } from "react";

const EmailCaptureForm = ({
  roleType,
  title = "Get notified about new roles",
  description = "We'll send you relevant job listings as they're posted.",
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          roleType: roleType || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
      setName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="card bg-base-100 shadow-sm border border-base-300">
        <div className="card-body items-center text-center">
          <div className="text-success text-3xl mb-2">&#10003;</div>
          <h3 className="card-title text-base">You&apos;re subscribed!</h3>
          <p className="text-sm text-base-content/70">
            We&apos;ll notify you when new roles are posted.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-sm border border-base-300">
      <div className="card-body">
        <h3 className="card-title text-base">{title}</h3>
        <p className="text-sm text-base-content/70">{description}</p>

        <form onSubmit={handleSubmit} className="mt-3 space-y-3">
          <input
            type="text"
            placeholder="Name (optional)"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {status === "error" && (
            <p className="text-error text-sm">{errorMsg}</p>
          )}

          <button
            type="submit"
            className={`btn btn-primary w-full ${
              status === "loading" ? "btn-disabled" : ""
            }`}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureForm;
