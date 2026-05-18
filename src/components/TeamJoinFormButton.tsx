"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

type TeamJoinFormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  linkedinProfile: string;
  role: string;
  yearsOfExperience: string;
  city: string;
  portfolioLink: string;
  message: string;
};

const initialFormData: TeamJoinFormData = {
  fullName: "",
  phoneNumber: "",
  email: "",
  linkedinProfile: "",
  role: "",
  yearsOfExperience: "",
  city: "",
  portfolioLink: "",
  message: "",
};

export function TeamJoinFormButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<TeamJoinFormData>(initialFormData);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const inputClassName =
    "mt-2 w-full rounded-xl border border-outline-variant/30 bg-surface px-3 py-2.5 text-sm text-white placeholder:text-on-surface-variant/70 focus:border-primary-fixed focus:outline-none";
  const labelClassName =
    "text-[11px] font-bold uppercase tracking-wide text-on-surface-variant";
  const totalFields = Object.keys(formData).length;
  const completedFields = Object.values(formData).filter(
    (value) => value.trim().length > 0,
  ).length;
  const completionPercent = Math.round((completedFields / totalFields) * 100);

  const openModal = () => {
    setIsOpen(true);
    setSubmitState("idle");
    setFeedbackMessage("");
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitState("idle");
    setFeedbackMessage("");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/team-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          payload?.message ?? "Could not submit your application right now.",
        );
      }

      setSubmitState("success");
      setFeedbackMessage("Application submitted successfully.");
      setFormData(initialFormData);
    } catch (error) {
      setSubmitState("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Could not submit your application right now.",
      );
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="w-full rounded-xl border border-outline-variant/30 px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black sm:w-auto"
      >
        Join the Elite
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center overflow-y-auto bg-black/70 px-3 py-4 sm:items-center sm:px-4 sm:py-8"
          onClick={closeModal}
        >
          <div
            className="my-2 flex max-h-[94svh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-highest shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-outline-variant/20 px-4 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-headline text-lg font-bold text-white sm:text-xl">
                  Join the Elite Team
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-outline-variant/30 px-3 py-1.5 font-headline text-xs font-bold uppercase tracking-wide text-on-surface-variant transition-colors hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="mt-3">
                <div className="mb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <span>Form Progress</span>
                  <span>{completionPercent}%</span>
                </div>
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-surface"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={completionPercent}
                  aria-label="Team application form completion"
                >
                  <div
                    className="h-full rounded-full bg-primary-fixed transition-all duration-300"
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                <div className="grid gap-3 md:grid-cols-2">
                  <label className={labelClassName}>
                    Full Name *
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className={inputClassName}
                      placeholder="Your full name"
                    />
                  </label>
                  <label className={labelClassName}>
                    Contact Number *
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      className={inputClassName}
                      placeholder="+92..."
                    />
                  </label>
                  <label className={labelClassName}>
                    Gmail *
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className={inputClassName}
                      placeholder="youremail@gmail.com"
                    />
                  </label>
                  <label className={labelClassName}>
                    LinkedIn Profile
                    <input
                      type="url"
                      name="linkedinProfile"
                      value={formData.linkedinProfile}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </label>
                  <label className={labelClassName}>
                    Role You Are Applying For *
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      autoComplete="organization-title"
                      className={inputClassName}
                      placeholder="e.g. Sales Manager"
                    />
                  </label>
                  <label className={labelClassName}>
                    Years of Experience
                    <input
                      type="text"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="e.g. 3 years"
                    />
                  </label>
                  <label className={labelClassName}>
                    Current City
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      autoComplete="address-level2"
                      className={inputClassName}
                      placeholder="e.g. your city"
                    />
                  </label>
                  <label className={labelClassName}>
                    Portfolio / Work Link
                    <input
                      type="url"
                      name="portfolioLink"
                      value={formData.portfolioLink}
                      onChange={handleChange}
                      className={inputClassName}
                      placeholder="https://..."
                    />
                  </label>
                </div>

                <label className={labelClassName}>
                  Why should we choose you?
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputClassName}
                    placeholder="Write a short intro about your skills..."
                  />
                </label>

                {feedbackMessage ? (
                  <p
                    className={`text-sm ${
                      submitState === "success"
                        ? "text-primary-fixed"
                        : "text-red-300"
                    }`}
                  >
                    {feedbackMessage}
                  </p>
                ) : null}
              </div>

              <div className="border-t border-outline-variant/20 px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-outline-variant/30 px-4 py-2 text-xs font-bold uppercase tracking-wide text-on-surface-variant transition-colors hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="rounded-xl bg-primary-container px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-on-primary-container transition-all hover:shadow-[0_0_20px_rgba(202,253,0,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitState === "submitting"
                      ? "Submitting..."
                      : "Submit Application"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
