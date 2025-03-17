import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    title: "Rebirth Rehabilitation Centre",
    date: "20 October 2023",
    description:
      "Empowering Youth, Enriching Our Community: NACC's Broiler Chicken Project. Join us in an innovative initiative that combines faith, entrepreneurship, and social impact!",
    image: "./images/event1.jpg",
    link: "/events/rebirth-rehabilitation",
    location: "Bulawayo",
  },
  {
    title: "Rural Community Support Project",
    date: "20 October 2023",
    description:
      "NACC visited rural villages, providing medical supplies for livestock and building relationships with local communities. The team distributed vaccines and deworming medication.",
    image: "./images/event3.jpg",
    link: "/events/rural-support",
    location: "Rural Villages",
  },
  {
    title: "Youth Leadership Conference",
    date: "15 April 2024",
    description:
      "Join us for our annual youth leadership conference focusing on spiritual growth and community leadership development.",
    image: "./images/event2.jpg",
    link: "/events/youth-conference",
    location: "Harare",
  },
  {
    title: "Community Prayer Summit",
    date: "1 May 2024",
    description: "A powerful gathering for united prayer focusing on our nation, communities, and families.",
    image: "./images/event4.jpg",
    link: "/events/prayer-summit",
    location: "Multiple Locations",
  },
]

export function EventsSection() {
  return (
    <section className="py-24 bg-gray-50" id="events">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Latest Events and Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join us in making a difference in our communities through these impactful initiatives.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.title} className="overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </div>
                <CardDescription className="text-primary font-medium">{event.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button asChild>
                  <Link href={event.link}>Learn more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

