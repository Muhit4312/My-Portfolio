export const projects = [

  {
    title: "DistrictFix",
    category: "Service Management Platform",
    image: "/gofullpage-district-fix-fontend-a7-nine-vercel-app-2026-10-15-09_55_56.png",
    description:
      "A district-based service management platform that connects customers with service holders and workers. It manages service requests, district-based worker assignments, application payments, and the complete service delivery workflow.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Bkash"
    ],
    features: [
      "Role-based authentication and access control",
      "Customer service request submission and tracking",
      "Service holder and worker application management",
      "District-based service request assignment",
      "Worker assignment and service status tracking",
      "Service completion and workflow management",
      "Application payment integration",
      "Role-specific dashboards and management tools",
    ],
    myContribution: [
      "Developed the service management platform frontend",
      "Implemented role-based interfaces for different user types",
      "Built the customer service request workflow",
      "Worked on service holder and worker application flows",
      "Implemented district-based assignment interfaces",
      "Integrated payment and service tracking workflows",
      "Designed responsive dashboards and reusable UI components",
    ],
    demo: "https://district-fix-fontend-a7-nine.vercel.app/",
    github: "https://github.com/Muhit4312",
  },


  {
    title: "RentNest",
    category: "Rental Property Platform",
    image: "/gofullpage-rent-next-fontend-l7-a5-livid-vercel-app-2026-10-15-09_56_48.png",
    description:
      "A rental property platform that connects tenants with landlords, making it easy to discover properties, submit rental requests, and complete payments through a simple and transparent rental experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Stripe"
    ],
    features: [
      "Property listings with location-based search",
      "Property details, pricing, and rental information",
      "Featured properties and rental recommendations",
      "Rental requests with landlord approval workflow",
      "Secure rental payment process",
      "Responsive design for desktop and mobile devices",
    ],
    myContribution: [
      "Developed the rental platform interface",
      "Built reusable property cards and listing sections",
      "Implemented property search and discovery UI",
      "Designed the rental request user experience",
      "Created responsive layouts for different screen sizes",
    ],
    demo: "https://rent-next-fontend-l7-a5-livid.vercel.app/",
    github: "https://github.com/Muhit4312",
  },

  {
    title: "WordPress Website",
    category: "Kingfisher Hypnotherapy",
    image: "/gofullpage-kingfisherhypnotherapy-2026-10-15-13_01_27.png",
    description:
      "A professional hypnotherapy website built with WordPress, showcasing therapy services, client testimonials, practitioner information, and appointment booking with a calm and welcoming design.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
      "JavaScript",
    ],
    myContribution: [
      "Designed and customized the website using WordPress",
      "Created responsive layouts for different screen sizes",
      "Organized hypnotherapy services and content sections",
      "Integrated contact and appointment booking features",
      "Improved website usability and visual consistency",
    ],
    features: [
      "Responsive and user-friendly design",
      "Hypnotherapy services and treatment information",
      "Client testimonials and Google reviews",
      "Practitioner profile and clinic information",
      "Appointment booking and contact details",
      "Blog section for educational articles",
    ],
    demo: "https://www.kingfisherhypnotherapy.com/",
    github: "#",
  },
] as const;

export type Project = (typeof projects)[number];