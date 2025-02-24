import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

const blogPosts = {
  "community-outreach-success": {
    title: "Community Outreach Success",
    date: "March 15, 2024",
    author: "Pastor John Moyo",
    category: "Outreach",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    content: `
      Our recent community outreach program has made a significant impact in the local community, reaching over 500 families with essential supplies and spiritual support. The initiative, which took place over three weekends, brought together volunteers from various churches within the NACC network.

      ## Program Highlights

      - Distribution of food packages to vulnerable families
      - Free medical check-ups in partnership with local healthcare providers
      - Prayer and counseling services
      - Children's activities and educational support

      ## Impact Stories

      Many families expressed their gratitude for the support received. One recipient, Mrs. Sibanda, shared, "The food packages and medical support came at a crucial time for my family. We are thankful for NACC's presence in our community."

      ## Looking Forward

      Building on this success, we are planning to expand our outreach programs to reach more communities in need. Our next initiative will focus on sustainable development projects that can provide long-term benefits to the communities we serve.

      ## How You Can Help

      If you would like to support our community outreach programs, there are several ways to get involved:
      
      1. Volunteer your time and skills
      2. Donate supplies or funds
      3. Spread awareness about our initiatives
      4. Join our prayer team

      Contact us to learn more about how you can contribute to making a difference in our community.
    `,
  },
  "youth-ministry-highlights": {
    title: "Youth Ministry Highlights",
    date: "March 10, 2024",
    author: "Youth Leader Sarah Ndlovu",
    category: "Youth",
    image: "https://images.pexels.com/photos/8523586/pexels-photo-8523586.jpeg",
    content: `
      Our youth ministry has been experiencing tremendous growth and impact in recent months. We're excited to share some of the highlights and testimonies from our various programs and initiatives.

      ## Recent Activities

      - Weekly Bible study sessions
      - Monthly youth rallies
      - Leadership development workshops
      - Community service projects

      ## Success Stories

      Several young people have shown remarkable growth in their faith and leadership abilities. One such example is Tendai, who started as a participant and is now leading our junior youth program.

      ## Upcoming Events

      We have several exciting events planned for the coming months, including our annual youth camp and leadership conference. Stay tuned for more details!
    `,
  },
  "prayer-worship-night": {
    title: "Prayer & Worship Night",
    date: "March 5, 2024",
    author: "Worship Leader David Mutasa",
    category: "Worship",
    image: "https://images.pexels.com/photos/7144439/pexels-photo-7144439.jpeg",
    content: `
      Join us for our monthly prayer and worship night, where we come together as a community to seek God's presence and lift our voices in praise.

      ## Event Details

      - Date: Last Friday of every month
      - Time: 6:00 PM - 9:00 PM
      - Location: NACC Main Sanctuary
      - Theme: "In His Presence"

      ## What to Expect

      - Powerful worship sessions
      - Intercessory prayer
      - Testimonies and sharing
      - Fellowship and refreshments

      Come prepared to experience God's presence in a powerful way!
    `,
  },
  "building-strong-families": {
    title: "Building Strong Families",
    date: "March 1, 2024",
    author: "Pastor James Dube",
    category: "Family",
    image: "https://images.pexels.com/photos/7282419/pexels-photo-7282419.jpeg",
    content: `
      In today's challenging world, building and maintaining strong, Christ-centered families is more important than ever. Let's explore some biblical principles that can help us create healthy family relationships.

      ## Biblical Foundation

      - Prayer as the cornerstone of family life
      - Regular family devotions
      - Teaching children God's word
      - Living by example

      ## Practical Steps

      1. Establish family prayer times
      2. Create meaningful family traditions
      3. Practice forgiveness and grace
      4. Spend quality time together

      ## Resources Available

      NACC offers various resources and support for families:
      - Marriage counseling
      - Parenting workshops
      - Family retreats
      - Support groups
    `,
  },
  "serving-our-community": {
    title: "Serving Our Community",
    date: "February 25, 2024",
    author: "Outreach Coordinator Peter Ncube",
    category: "Outreach",
    image: "https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg",
    content: `
      Learn about our latest community service initiatives and how you can get involved in making a difference in our local community.

      ## Current Projects

      - Food distribution program
      - After-school tutoring
      - Senior citizen support
      - Youth mentorship

      ## Impact Report

      Our recent initiatives have:
      - Served over 1,000 meals
      - Helped 50 students with homework
      - Visited 30 senior citizens
      - Mentored 25 youth

      ## Get Involved

      There are many ways to serve:
      - Volunteer your time
      - Donate supplies
      - Provide transportation
      - Share your skills
    `,
  },
  "power-of-prayer": {
    title: "The Power of Prayer",
    date: "February 20, 2024",
    author: "Elder Mary Sibanda",
    category: "Spiritual Growth",
    image: "https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg",
    content: `
      Prayer is our direct line to God and a powerful tool for transformation in our lives and communities.

      ## Understanding Prayer

      - Communication with God
      - Building relationship
      - Seeking guidance
      - Intercession for others

      ## Prayer Practices

      1. Daily quiet time
      2. Prayer journaling
      3. Group prayer
      4. Fasting and prayer

      ## Testimonies

      We've seen numerous answers to prayer in our community:
      - Healing testimonies
      - Restored relationships
      - Financial breakthroughs
      - Spiritual transformation
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  if (!post) return { title: "Not Found" }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  if (!post) notFound()

  return (
    <div className="min-h-screen pt-20">
      <article className="mx-auto max-w-4xl px-4 py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary font-medium">{post.category}</span>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="mt-2 text-muted-foreground">By {post.author}</p>
        </div>

        <div className="prose prose-lg mt-8 max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
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
            if (paragraph.startsWith("1. ")) {
              return (
                <ol key={index} className="list-decimal pl-6 my-4">
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\. /, "")}</li>
                  ))}
                </ol>
              )
            }
            return (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">More Articles</Link>
          </Button>
        </div>
      </article>
    </div>
  )
}

