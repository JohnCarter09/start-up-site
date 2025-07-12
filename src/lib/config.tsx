import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "VelocityAI",
  description: "Transform your small business with AI in days, not months",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["AI Consulting", "Small Business AI", "AI Implementation", "Business Automation", "AI Strategy"],
  links: {
    email: "carterpixels@gmail.com",
    twitter: "https://twitter.com/aiconsultingpro",
    calendly: "https://calendly.com/carterpixels/30min",
    linkedin: "https://linkedin.com/company/aiconsultingpro",
    instagram: "https://instagram.com/aiconsultingpro/",
  },
  header: [
    {
      trigger: "Services",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "AI Transformation Services",
          description: "Custom AI solutions delivered in days, not months.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "AI Strategy Development",
            description: "48-hour custom AI roadmap for your business.",
          },
          {
            href: "#",
            title: "Rapid Implementation",
            description: "From concept to live AI in 1-2 weeks.",
          },
          {
            href: "#",
            title: "Integration Support",
            description: "Seamless AI integration with existing systems.",
          },
        ],
      },
    },
    {
      trigger: "Industries",
      content: {
        items: [
          {
            title: "Retail & E-commerce",
            href: "#",
            description: "AI-powered inventory, customer service, and sales optimization.",
          },
          {
            title: "Professional Services",
            href: "#",
            description: "Automate consultations, scheduling, and client management.",
          },
          {
            title: "Healthcare",
            href: "#",
            description: "Patient scheduling, data analysis, and workflow automation.",
          },
          {
            title: "Manufacturing",
            href: "#",
            description: "Production optimization and quality control AI systems.",
          },
          {
            title: "Finance",
            href: "#",
            description: "Risk assessment, fraud detection, and process automation.",
          },
          {
            title: "Restaurant & Hospitality",
            href: "#",
            description: "Order optimization, customer insights, and operational efficiency.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Case Studies",
    },
  ],
  pricing: [
    {
      name: "STARTER",
      href: "https://calendly.com/carterpixels/30min",
      price: "$2,500",
      period: "project",
      yearlyPrice: "$2,500",
      features: [
        "48-Hour AI Strategy Session",
        "Custom AI Roadmap",
        "Implementation Plan",
        "Technology Recommendations",
        "2 Follow-up Consultations",
      ],
      description: "Perfect for businesses ready to explore AI opportunities",
      buttonText: "Book Free Consultation",
      isPopular: false,
    },
    {
      name: "PROFESSIONAL",
      href: "https://calendly.com/carterpixels/30min",
      price: "$15,000",
      period: "project",
      yearlyPrice: "$15,000",
      features: [
        "Complete AI Implementation",
        "Custom AI Solution Development",
        "System Integration",
        "Staff Training",
        "30-Day Support & Optimization",
      ],
      description: "Full AI transformation for growing businesses",
      buttonText: "Schedule Assessment",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "https://calendly.com/carterpixels/30min",
      price: "Custom",
      period: "quote",
      yearlyPrice: "Custom",
      features: [
        "Multi-Department AI Solutions",
        "Advanced Custom Development",
        "Ongoing AI Strategy Partnership",
        "Dedicated Account Manager",
        "Unlimited Support & Updates",
      ],
      description: "Comprehensive AI transformation for established businesses",
      buttonText: "Get Custom Quote",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "How quickly can you implement AI in my business?",
      answer: (
        <span>
          We deliver AI strategies in 48 hours and complete implementations in 1-2 weeks for most small businesses. 
          Our rapid approach focuses on high-impact, custom solutions rather than generic tools that take months to deploy.
        </span>
      ),
    },
    {
      question: "What makes your AI consulting different from others?",
      answer: (
        <span>
          We specialize exclusively in small businesses and focus on speed of delivery. While others offer generic solutions 
          that take quarters to implement, we create custom AI systems tailored to your specific business needs in days and weeks.
        </span>
      ),
    },
    {
      question: "Do I need technical expertise to work with you?",
      answer: (
        <span>
          Not at all! We handle all the technical complexity. You focus on running your business while we build, 
          integrate, and optimize your AI solutions. We also provide training to ensure your team can use the new systems effectively.
        </span>
      ),
    },
    {
      question: "What types of businesses do you work with?",
      answer: (
        <span>
          We work with small to medium businesses across retail, professional services, healthcare, manufacturing, 
          finance, and hospitality. Our solutions are designed for businesses ready to gain a competitive advantage through AI.
        </span>
      ),
    },
    {
      question: "What kind of ROI can I expect from AI implementation?",
      answer: (
        <span>
          Most clients see measurable results within 30-90 days, including 20-40% time savings on routine tasks, 
          improved customer satisfaction, and increased operational efficiency. We focus on solutions that deliver quick, 
          measurable business value.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Services",
      links: [
        { href: "#", text: "AI Strategy", icon: null },
        { href: "#", text: "Implementation", icon: null },
        { href: "#", text: "Integration", icon: null },
        { href: "#", text: "Optimization", icon: null },
      ],
    },
    {
      title: "Industries",
      links: [
        { href: "#", text: "Retail", icon: null },
        { href: "#", text: "Healthcare", icon: null },
        { href: "#", text: "Finance", icon: null },
        { href: "#", text: "Manufacturing", icon: null },
        { href: "#", text: "Professional Services", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", text: "Case Studies", icon: null },
        { href: "https://calendly.com/carterpixels/30min", text: "Book Consultation", icon: null },
        { href: "#", text: "AI Readiness Guide", icon: null },
        { href: "#", text: "ROI Calculator", icon: null },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          href: "https://twitter.com/aiconsultingpro",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "https://linkedin.com/company/aiconsultingpro",
          text: "LinkedIn",
          icon: <RiInstagramFill />,
        },
        {
          href: "mailto:carterpixels@gmail.com",
          text: "Email",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
