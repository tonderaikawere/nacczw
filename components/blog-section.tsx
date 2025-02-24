import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Community Outreach Success",
    description:
      "Our recent community outreach program reached over 500 families, providing essential supplies and spiritual support...",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format",
    date: "March 15, 2024",
    author: "Pastor John Moyo",
    category: "Outreach",
    link: "/blog/community-outreach-success",
  },
  {
    title: "Youth Ministry Highlights",
    description:
      "Celebrating the achievements of our youth ministry programs and their impact on young lives in our community...",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format",
    date: "March 10, 2024",
    author: "Youth Leader Sarah Ndlovu",
    category: "Youth",
    link: "/blog/youth-ministry-highlights",
  },
  {
    title: "Prayer & Worship Night",
    description:
      "Join us for our monthly prayer and worship night, where we come together as a community to seek God's presence...",
    image: "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?w=800&auto=format",
    date: "March 5, 2024",
    author: "Worship Leader David Mutasa",
    category: "Worship",
    link: "/blog/prayer-worship-night",
  },
]

export function BlogSection() {
  return (
    <section className="py-24" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with our latest news, events, and spiritual insights.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden group">
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
                  <CardDescription>{post.date}</CardDescription>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>By {post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">{post.description}</p>
                <Button asChild variant="link" className="p-0">
                  <Link href={post.link}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

