import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap, Rocket } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Business Discovery (Week 1)",
    content:
      "Free 90-minute consultation understanding your processes, challenges, and opportunities. You'll receive a custom automation assessment with investment options.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Solution Design & Proposal",
    content:
      "Custom proposal with proof of concept plan tailored to your business size and needs. Detailed project scope and investment structure.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Development & Testing (Weeks 2-4)",
    content:
      "Development of working prototype with your actual business data, refined until perfect. Production-ready custom application.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: "4. Deployment & Support",
    content:
      "Deploy, train team, establish ongoing support structure. Live application with comprehensive support.",
    image: "/dashboard.png",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="From Consultation to Custom Application in 4 Simple Steps">
      <Features data={data} />
    </Section>
  );
}
