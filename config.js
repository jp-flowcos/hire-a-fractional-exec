const config = {
  appName: "HireAFractionalExec",
  appDescription:
    "The #1 job board for fractional C-suite executives. Find fractional COO, CMO, CFO, CTO, and Chief of Staff roles.",
  domainName: "hireafractionalexec.com",
  crisp: {
    id: "",
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    plans: [
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? process.env.STRIPE_PRICE_STANDARD || "price_standard_dev"
            : process.env.STRIPE_PRICE_STANDARD || "price_standard_prod",
        name: "Standard",
        description: "30-day job listing",
        price: 299,
        mode: "payment",
        features: [
          { name: "30-day listing" },
          { name: "All category pages" },
          { name: "Job alert emails" },
          { name: "SEO-optimized listing" },
        ],
      },
      {
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? process.env.STRIPE_PRICE_FEATURED || "price_featured_dev"
            : process.env.STRIPE_PRICE_FEATURED || "price_featured_prod",
        name: "Featured",
        description: "Premium visibility for your listing",
        price: 499,
        priceAnchor: 599,
        mode: "payment",
        features: [
          { name: "30-day listing" },
          { name: "Featured on homepage" },
          { name: "Pinned in category pages" },
          { name: "Included in weekly digest" },
          { name: "SEO-optimized listing" },
          { name: "Priority placement" },
        ],
      },
    ],
  },
  resend: {
    fromNoReply: `HireAFractionalExec <noreply@hireafractionalexec.com>`,
    fromAdmin: `Jared at HireAFractionalExec <jared@hireafractionalexec.com>`,
    supportEmail: "jared@hireafractionalexec.com",
  },
  colors: {
    theme: "hafexec",
    main: "#06B6D4",
  },
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/admin",
  },
};

export default config;
