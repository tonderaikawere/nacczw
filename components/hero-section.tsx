import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-center text-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to
              <span className="block text-primary">National Association Of Christian Churches</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
              A united Church Community that meaningfully contributes to the spiritual and social-economic growth of
              Zimbabwe.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

