import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const events = {
  "rebirth-rehabilitation": {
    title: "Rebirth Rehabilitation Centre",
    date: "20 October 2023",
    location: "Bulawayo",
    image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg",
    content: `
      Join us in an innovative initiative that combines faith, entrepreneurship, and social impact! The NACC Broiler Chicken Project is designed to empower youth while creating sustainable income for our community.

      ## Project Overview

      The Rebirth Rehabilitation Centre project aims to:
      - Generate sustainable income for our church
      - Provide job opportunities for local youth
      - Offer skills training in poultry management
      - Create a model for sustainable church-based enterprises

      ## Program Details

      ### Training Components
      - Basic business management
      - Poultry farming techniques
      - Marketing and sales
      - Financial literacy

      ### Project Timeline
      - Initial training: 2 weeks
      - Setup phase: 1 month
      - First batch: 6 weeks
      - Ongoing mentorship: 6 months

      ## How to Get Involved

      We welcome participation from:
      - Youth interested in entrepreneurship
      - Experienced farmers willing to mentor
      - Investors and donors
      - Community volunteers

      Contact us to learn more about how you can support this transformative initiative.
    `,
  },
  "rural-support": {
    title: "Rural Community Support Project",
    date: "20 October 2023",
    location: "Rural Villages",
    image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg",
    content: `
      NACC's rural outreach program focuses on supporting agricultural communities through livestock health initiatives and community development.

      ## Project Impact

      - Distributed vaccines and medication to over 1,000 cattle
      - Provided veterinary training to local farmers
      - Established community support networks
      - Enhanced food security through improved livestock health

      ## Upcoming Activities

      We are planning follow-up visits and expanding our support to include:
      - Additional medical supplies
      - Agricultural training workshops
      - Community development initiatives
      - Spiritual support and counseling
    `,
  },
  "youth-conference": {
    title: "Youth Leadership Conference",
    date: "15 April 2024",
    location: "Harare",
    image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
    content: `
      Join us for our annual youth leadership conference, designed to empower and equip the next generation of Christian leaders.

      ## Conference Highlights

      - Inspiring keynote speakers
      - Interactive workshops
      - Leadership training sessions
      - Networking opportunities
      - Worship and prayer sessions

      ## Topics Covered

      - Spiritual Leadership
      - Community Impact
      - Personal Development
      - Ministry Skills
      - Digital Evangelism

      ## Registration Details

      Early Bird Registration: $50
      Regular Registration: $75
      Group Discounts Available

      Registration includes:
      - Conference materials
      - Lunch and refreshments
      - Certificate of participation
    `,
  },
  "prayer-summit": {
    title: "Community Prayer Summit",
    date: "1 May 2024",
    location: "Multiple Locations",
    image: "https://images.pexels.com/photos/7144439/pexels-photo-7144439.jpeg",
    content: `
      Join us for a powerful day of united prayer as we intercede for our nation, communities, and families.

      ## Event Schedule

      Morning Session (6:00 AM - 9:00 AM)
      - Worship and Praise
      - Prayer for the Nation
      - Prayer for Churches

      Afternoon Session (2:00 PM - 5:00 PM)
      - Prayer for Families
      - Prayer for Youth
      - Prayer for Communities

      Evening Session (6:00 PM - 9:00 PM)
      - Worship Night
      - Testimonies
      - Prophetic Ministry

      ## Prayer Focus Areas

      - National Leadership
      - Economic Recovery
      - Youth and Education
      - Family Values
      - Church Unity
      - Community Development
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = events[params.slug]
  if (!event) return { title: "Not Found" }

  return {
    title: event.title,
    description: event.content.substring(0, 160),
  }
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events[params.slug]
  if (!event) notFound()

  return (
    <div className="min-h-screen pt-20">
      <article className="mx-auto max-w-4xl px-4 py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/events">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </Button>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
        </div>

        <div className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight">{event.title}</h1>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg mt-8 max-w-none">
          {event.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                  {paragraph.replace("### ", "")}
                </h3>
              )
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={index} className="list-disc pl-6 my-4">
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>
      </article>
    </div>
  )
}

