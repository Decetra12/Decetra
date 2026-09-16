import Link from "next/link";

const plans = [
  {
    name: "Website Assistant",
    price: "$100",
    period: "/month",
    desc: "AI support for your website visitors",
    features: ["Website chat integration", "Answers customer questions 24/7", "Collects customer details and requirements", "Basic appointment booking"],
    buttonText: "Get Started",
    ctaLink: "#",
    popular: false,
  },
  {
    name: "Omnichannel Assistant",
    price: "$150",
    period: "/month",
    desc: "Engage customers wherever they reach out",
    features: ["Website assistant", "Instagram messaging support", "Facebook Messenger support", "Centralized customer conversations"],
    buttonText: "Try Omnichannel Assistant",
    ctaLink: "#",
    popular: true,
  },
  {
    name: "Custom AI Solution",
    price: "Custom",
    period: "Pricing",
    desc: "Built around your business needs",
    features: ["Custom workflows and automations", "Custom CRM integrations", "Advanced customer journeys", "Custom requirements and support"],
    buttonText: "Book Consultation",
    ctaLink: "#",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Flexible Plans for Any Team. Decetra AI 
          </h2>
          <p className="text-lg text-indigo-200/65">
            Choose the plan that keeps your business connected and delivers better customer experiences even after hours.
          </p>
        </div>

        {/* RESPONSIVE GRID LAYOUT - FILLS MAX-W-6XL */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-800/40 p-6 md:p-8 transition-all hover:bg-gray-800/60 w-full ${
                plan.popular 
                  ? "bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] z-10 lg:scale-105 shadow-xl" 
                  : "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.2))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                  Popular
                </div>
              )}

              {/* Top Section: Plan Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-200 font-nacelle">{plan.name}</h3>
                  <p className="mt-2 text-sm text-indigo-200/65 leading-relaxed min-h-[48px]">{plan.desc}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 py-3 border-b border-gray-800/60">
                  <span className="text-4xl font-extrabold text-gray-100">{plan.price}</span>
                  <span className="text-sm text-indigo-200/50">{plan.period}</span>
                </div>
                
                {/* Features List */}
                <ul className="space-y-3 pt-2 text-sm text-gray-400">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="h-4 w-4 mt-0.5 flex-none text-indigo-500" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Section: CTA Action Button */}
              <div className="pt-6 mt-auto">
                <Link
                  href={plan.ctaLink}
                  className={`block w-full whitespace-nowrap rounded-full py-2.5 text-sm font-semibold transition-all focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 text-center ${
                    plan.popular
                      ? "bg-linear-to-b from-indigo-500 to-indigo-600 text-white hover:from-indigo-400 hover:to-indigo-500 shadow-xs shadow-indigo-500/20"
                      : "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
