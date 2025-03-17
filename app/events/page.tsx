import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events & Projects",
  description: "Join us in our upcoming events and ongoing projects at NACC.",
}

const events = [
  {
    slug: "rebirth-rehabilitation",
    title: "Rebirth Rehabilitation Centre",
    date: "20 October 2023",
    description:
      "Empowering Youth, Enriching Our Community: NACC's Broiler Chicken Project. Join us in an innovative initiative that combines faith, entrepreneurship, and social impact!",
    image: "./images/event2.jpg",
    location: "Bulawayo",
  },
  {
    slug: "rural-support",
    title: "Rural Community Support Project",
    date: "20 October 2023",
    description:
      "NACC visited rural villages, providing medical supplies for livestock and building relationships with local communities.",
    image: "./images/g1.jpg",
    location: "Rural Villages",
  },
  {
    slug: "youth-conference",
    title: "Youth Leadership Conference",
    date: "15 April 2024",
    description:
      "Join us for our annual youth leadership conference focusing on spiritual growth and community leadership development.",
    image: "./images/event4.jpg",
    location: "Harare",
  },
  {
    slug: "prayer-summit",
    title: "Community Prayer Summit",
    date: "1 May 2024",
    description: "A powerful gathering for united prayer focusing on our nation, communities, and families.",
    image: "./images/g4.jpg",
    location: "Multiple Locations",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Events & Projects</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Join us in our upcoming events and ongoing projects as we work together to make a difference in our
            communities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event) => (
              <Card key={event.slug} className="overflow-hidden group">
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
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button asChild>
                    <Link href={`/events/${event.slug}`}>Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

