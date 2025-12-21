export function PresenteeismSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-center gap-8 flex-wrap">
        <div
          className="mx-auto w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full
                     bg-gradient-to-br from-[#ffd518] to-white text-[color:var(--smile-navy)]
                     flex items-center justify-center text-center font-semibold leading-tight
                     ring-1 ring-[color:var(--smile-navy)] ring-offset-2 ring-offset-background
                     shadow-[12px_14px_24px_rgba(0,51,102,0.2)] select-none flex-col"
          aria-label="100% taux de présentéisme"
        >
          <span className="px-6 text-xl md:text-4xl">100%</span>
          <span className="px-6 text-xs md:text-xl">taux de présentéisme</span>
        </div>
        <div
          className="mx-auto w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full
                     bg-gradient-to-br from-[#ffd518] to-white text-[color:var(--smile-navy)]
                     flex items-center justify-center text-center font-semibold leading-tight
                     ring-1 ring-[color:var(--smile-navy)] ring-offset-2 ring-offset-background
                     shadow-[12px_14px_24px_rgba(0,51,102,0.2)] select-none flex-col"
          aria-label="98% taux de satisfaction client"
        >
          <span className="px-6 text-xl md:text-4xl">98%</span>
          <span className="px-6 text-xs md:text-xl">taux de satisfaction client</span>
        </div>
      </div>
    </section>
  );
}
