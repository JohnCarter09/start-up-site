import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Generic Software Doesn't Fit",
    description:
      "Every pool company, HVAC contractor, or law firm operates differently. Cookie-cutter AI tools force you to change how you work instead of working how you actually operate.",
    icon: Brain,
  },
  {
    title: "Massive Upfront Costs with Uncertain Results",
    description:
      "Most AI solutions demand huge investments before you know if they'll work. Six-figure implementations with no guarantee of results that fit your business.",
    icon: Zap,
  },
  {
    title: "Technical Complexity Overwhelms Teams",
    description:
      "Your team shouldn't need computer science degrees to use business software. Complex AI platforms create more headaches than solutions.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Why Most Small Businesses Struggle to Benefit from AI"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
