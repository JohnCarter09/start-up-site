import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart, Target, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "No Generic Software Compromises",
    content: "Built specifically for how YOUR business operates. Pool route software understanding seasonality and chemicals.",
    image: "/dashboard.png",
    icon: <Target className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Industry Expertise Built In",
    content: "Understanding specific service business challenges. HVAC dispatch accounting for emergencies and technician skills.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Ongoing Optimization",
    content: "Continuous improvements based on your feedback. Added 15 features to ABC Accounting over first year.",
    image: "/dashboard.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="Why Small Businesses Choose Our Custom Application Approach">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
