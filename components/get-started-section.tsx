import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Explore and Connect",
    description:
      "Begin your journey by exploring our programs and connecting with our community. Learn about our mission, vision, and the various ways you can get involved.",
    icon: CheckCircle,
  },
  {
    title: "Apply for Membership",
    description:
      "Complete our membership application process to officially join the NACC family. We welcome churches and individuals who share our values and vision.",
    icon: CheckCircle,
  },
  {
    title: "Engage and Grow",
    description:
      "Participate in our programs, events, and initiatives. Take advantage of our resources and support to strengthen your ministry and community impact.",
    icon: CheckCircle,
  },
]

export function GetStartedSection() {
  return (
    <section className="py-24 bg-gray-50" id="get-started">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Started with NACC</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our growing community of churches and make a difference in Zimbabwe. Here's how you can become part
              of NACC:
            </p>
            <div className="mt-12 space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button asChild size="lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="./images/event2.jpg"
              alt="NACC Community"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

