const sectorImages = {
  clinics:
    "https://images.pexels.com/photos/31844508/pexels-photo-31844508.jpeg?cs=srgb&dl=pexels-drharorswellness-31844508.jpg&fm=jpg",
  wedding:
    "https://unsplash.com/photos/iXTkKQyVqbM/download?force=true",
  restaurants:
    "https://images.pexels.com/photos/26626728/pexels-photo-26626728.jpeg?cs=srgb&dl=pexels-duartefotografia-26626728.jpg&fm=jpg",
};

export function TargetedSectors() {
  return (
    <section
      id="solutions"
      className="mx-auto max-w-container-max border-t border-outline-variant/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-gutter lg:py-section-padding"
    >
      <div className="mb-stack-lg flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <span className="mb-4 block font-label-xs uppercase tracking-[0.3em] text-primary-container">
            Precision Targeting
          </span>
          <h2 className="font-headline-lg text-on-surface">
            Targeted Sectors
          </h2>
        </div>
        <p className="max-w-md font-body-lg text-on-surface-variant">
          We deploy industry-specific growth algorithms designed for
          high-ticket, premium service providers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 auto-rows-[180px] sm:auto-rows-[200px] md:grid-cols-2 lg:grid-cols-4">
        <div
          aria-label="Digital marketing services for private clinics"
          className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low transition-colors hover:border-primary-fixed/50 lg:col-span-2 lg:row-span-2"
        >
          <img
            src={sectorImages.clinics}
            alt="A high-end modern private medical clinic reception area."
            className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 lg:p-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-full border border-white/10 bg-surface/50 p-2 backdrop-blur-md sm:p-3">
                <span className="material-symbols-outlined text-primary-container">
                  medical_services
                </span>
              </div>
              <h3 className="font-title-md text-on-surface">
                Private Clinics
              </h3>
            </div>
            <p className="max-w-md translate-y-4 font-body-sm text-on-surface-variant opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Patient acquisition systems focusing on high-LTV procedures and
              premium care services.
            </p>
          </div>
        </div>

        <div
          aria-label="Gym and fitness center marketing agency"
          className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low transition-colors hover:border-primary-fixed/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-highest to-surface-dim opacity-80 transition-opacity group-hover:opacity-100" />
          <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
            <span className="material-symbols-outlined mb-auto text-3xl text-on-surface transition-colors group-hover:text-primary-container">
              fitness_center
            </span>
            <h3 className="mt-4 font-title-md text-on-surface">
              Gyms & Fitness
            </h3>
          </div>
        </div>

        <div
          aria-label="Wedding venue and banquet hall marketing"
          className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low transition-colors hover:border-primary-fixed/50"
        >
          <img
            src={sectorImages.wedding}
            alt="An elegant modern luxury wedding venue set up for a night reception."
            className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
            <span className="material-symbols-outlined mb-auto text-3xl text-primary-container drop-shadow-lg">
              celebration
            </span>
            <h3 className="mt-4 font-title-md text-on-surface">
              Wedding Venues
            </h3>
          </div>
        </div>

        <div
          aria-label="Coaching institute and education marketing"
          className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low transition-colors hover:border-primary-fixed/50"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim to-surface-container-highest opacity-80 transition-opacity group-hover:opacity-100" />
          <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
            <span className="material-symbols-outlined mb-auto text-3xl text-on-surface transition-colors group-hover:text-primary-container">
              school
            </span>
            <h3 className="mt-4 font-title-md text-on-surface">
              Coaching Institutes
            </h3>
          </div>
        </div>

        <div
          aria-label="Restaurant and cafe digital marketing"
          className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low transition-colors hover:border-primary-fixed/50"
        >
          <img
            src={sectorImages.restaurants}
            alt="A dark, moody, ultra-luxurious modern restaurant interior."
            className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
            <span className="material-symbols-outlined mb-auto text-3xl text-primary-container drop-shadow-lg">
              restaurant
            </span>
            <h3 className="mt-4 font-title-md text-on-surface">
              Luxury Restaurants
            </h3>
          </div>
        </div>

        <div
          aria-label="Real estate lead generation and property marketing"
          className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-5 transition-colors hover:border-primary-fixed/50 sm:p-6 lg:col-span-2 lg:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-highest to-surface-dim opacity-80 transition-opacity group-hover:opacity-100" />
          <div className="relative z-10 flex min-w-0 items-center gap-4 sm:gap-6">
            <div className="shrink-0 rounded-lg border border-outline-variant/30 bg-surface-dim p-3 sm:p-4">
              <span className="material-symbols-outlined text-3xl text-on-surface transition-colors group-hover:text-primary-container sm:text-4xl">
                domain
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-title-md text-on-surface">
                Real Estate Developers
              </h3>
              <p className="mt-1 font-body-sm text-on-surface-variant">
                High-ticket lead generation for premium properties.
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined relative z-10 shrink-0 text-on-surface-variant transition-transform group-hover:translate-x-2">
            arrow_forward
          </span>
        </div>
      </div>
    </section>
  );
}
