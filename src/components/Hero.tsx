"use client";

import { useState } from "react";
import { DemoContactPopup } from "@/components/DemoContactPopup";
import { heroImage } from "@/lib/site-content";

export function Hero() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 lg:px-gutter lg:py-section-padding"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-stack-lg">
          <div className="z-10 space-y-stack-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container/50 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary-fixed" />
              <span className="font-label-xs uppercase tracking-[0.2em] text-on-surface">
                Multi-Sector Agency
              </span>
            </div>

            <h1 className="font-display-xl text-4xl font-extrabold leading-tight text-on-surface sm:text-5xl lg:text-6xl">
              Marketing Systems
              <br />
              <span className="text-primary-container">
                for Multi-Sector Growth
              </span>
            </h1>

            <p className="max-w-xl font-body-lg text-base text-on-surface-variant sm:text-lg">
              Nova Sync helps clinics, gyms, restaurants, real estate teams,
              wedding venues, salons, and service brands grow with performance
              ads, SEO, websites, automation, and reporting tied to revenue.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => setIsDemoPopupOpen(true)}
                className="w-full rounded-DEFAULT bg-primary-container px-8 py-4 font-title-md text-on-primary-container transition-all duration-300 hover:bg-primary-fixed hover:shadow-[0_0_20px_rgba(195,244,0,0.4)] active:scale-95 sm:w-auto"
              >
                Ignite Growth
              </button>
              <button
                type="button"
                onClick={() => setIsDemoPopupOpen(true)}
                className="group flex w-full items-center justify-center gap-2 rounded-DEFAULT border border-outline-variant bg-transparent px-8 py-4 font-title-md text-on-surface transition-all duration-300 hover:border-primary-fixed hover:text-primary-container active:scale-95 sm:w-auto"
              >
                <span className="material-symbols-outlined text-xl group-hover:text-primary-container">
                  play_circle
                </span>
                View Demo
              </button>
            </div>
          </div>

          <div className="relative flex h-[360px] w-full items-center justify-center transition-transform duration-700 hover:rotate-0 sm:h-[460px] lg:h-[600px] lg:rotate-2">
            <div className="absolute inset-0 overflow-hidden rounded-xl border border-outline-variant/20 bg-gradient-to-tr from-surface-container-lowest to-surface-container shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="h-full w-full object-cover opacity-60 mix-blend-overlay"
              />

              <div className="animate-bounce-slow absolute left-3 top-4 flex items-center gap-3 rounded-lg border border-outline-variant/30 bg-surface-dim/80 p-4 shadow-2xl backdrop-blur-xl sm:left-4 sm:top-12 sm:gap-4 sm:p-6">
                <div className="rounded-full bg-primary-container/20 p-2 sm:p-3">
                  <span
                    className="material-symbols-outlined text-lg text-primary-container sm:text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    trending_up
                  </span>
                </div>
                <div>
                  <p className="font-label-xs uppercase text-on-surface-variant">
                    Average ROI
                  </p>
                  <p className="font-title-md text-sm text-primary-container sm:text-base">
                    230%
                  </p>
                </div>
              </div>

              <div className="animate-bounce-slow-reverse absolute bottom-4 right-3 flex items-center gap-3 rounded-lg border border-outline-variant/30 bg-surface-dim/80 p-4 shadow-2xl backdrop-blur-xl sm:bottom-12 sm:right-4 sm:gap-4 sm:p-6">
                <div className="rounded-full bg-primary-container/20 p-2 sm:p-3">
                  <span
                    className="material-symbols-outlined text-lg text-primary-container sm:text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    group
                  </span>
                </div>
                <div>
                  <p className="font-label-xs uppercase text-on-surface-variant">
                    Active Agencies
                  </p>
                  <p className="font-title-md text-sm text-on-surface sm:text-base">
                    16K+
                  </p>
                </div>
              </div>

              <div
                className="absolute inset-x-8 bottom-20 top-28 flex items-end gap-3 sm:inset-x-14 sm:bottom-24 sm:top-32 sm:gap-4 lg:inset-x-20 lg:bottom-28 lg:top-36"
                role="img"
                aria-label="Campaign performance chart"
              >
                <div className="h-1/4 w-full rounded-t-sm bg-primary-container/25 transition-colors hover:bg-primary-container/40" />
                <div className="h-2/4 w-full rounded-t-sm bg-primary-container/35 transition-colors hover:bg-primary-container/50" />
                <div className="relative h-3/4 w-full rounded-t-sm bg-primary-container/55 transition-colors hover:bg-primary-container/70">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-outline-variant bg-surface/90 px-2 py-1 text-xs font-bold text-on-surface backdrop-blur">
                    Peak
                  </div>
                </div>
                <div className="h-1/2 w-full rounded-t-sm bg-primary-container/45 transition-colors hover:bg-primary-container/60" />
                <div className="h-full w-full rounded-t-sm bg-primary-container/90 shadow-[0_0_18px_rgba(195,244,0,0.35)] transition-colors hover:bg-primary-container" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoContactPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
      />
    </>
  );
}
