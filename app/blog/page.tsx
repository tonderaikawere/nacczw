import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with our latest news, events, and spiritual insights.",
}

const posts = [
  {
    slug: "community-outreach-success",
    title: "Community Outreach Success",
    description:
      "Our recent community outreach program has made a significant impact in the local community, reaching over 500 families with essential supplies and spiritual support.",
    image: "./images/g2.jpg",
    date: "March 15, 2024",
    author: "Pastor John Moyo",
    category: "Outreach",
  },
  {
    slug: "youth-ministry-highlights",
    title: "Youth Ministry Highlights",
    description:
      "Celebrating the achievements of our youth ministry programs and their impact on young lives in our community.",
    image: "./images/g6.jpg",
    date: "March 10, 2024",
    author: "Youth Leader Sarah Ndlovu",
    category: "Youth",
  },
  {
    slug: "prayer-worship-night",
    title: "Prayer & Worship Night",
    description:
      "Join us for our monthly prayer and worship night, where we come together as a community to seek God's presence.",
    image: "./images/g3.jpg",
    date: "March 5, 2024",
    author: "Worship Leader David Mutasa",
    category: "Worship",
  },
  {
    slug: "building-strong-families",
    title: "Building Strong Families",
    description:
      "Discover biblical principles for building and maintaining strong, Christ-centered families in today's world.",
    image: "./images/g1.jpg",
    date: "March 1, 2024",
    author: "Pastor James Dube",
    category: "Family",
  },
  {
    slug: "serving-our-community",
    title: "Serving Our Community",
    description:
      "Learn about our latest community service initiatives and how you can get involved in making a difference.",
    image: "./images/g5.jpg",
    date: "February 25, 2024",
    author: "Outreach Coordinator Peter Ncube",
    category: "Outreach",
  },
  {
    slug: "power-of-prayer",
    title: "The Power of Prayer",
    description: "Exploring the transformative power of prayer in our daily lives and community.",
    image: "./images/g3.jpg",
    date: "February 20, 2024",
    author: "Elder Mary Sibanda",
    category: "Spiritual Growth",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">NACC Blog</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Stay updated with our latest news, events, and spiritual insights. Our blog features articles from church
            leaders and members of our community.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>By {post.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{post.description}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-foreground">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-secondary-foreground">
            Get our latest blog posts and updates delivered directly to your inbox.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-md border px-4 py-2" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

