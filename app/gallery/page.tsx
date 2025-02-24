import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our collection of photos from various church events, programs, and community outreach initiatives.",
}

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format",
    alt: "Church congregation during worship",
    caption: "Sunday Worship Service",
    category: "Worship",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format",
    alt: "Youth group activities",
    caption: "Youth Leadership Program",
    category: "Youth",
  },
  {
    src: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&auto=format",
    alt: "Community outreach program",
    caption: "Community Outreach",
    category: "Outreach",
  },
  {
    src: "https://images.unsplash.com/photo-1511649475669-e288648b2339?w=800&auto=format",
    alt: "Bible study group",
    caption: "Bible Study",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format",
    alt: "Church choir",
    caption: "Praise & Worship",
    category: "Music",
  },
  {
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&auto=format",
    alt: "Community service",
    caption: "Serving the Community",
    category: "Outreach",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&auto=format",
    alt: "Prayer meeting",
    caption: "Prayer Groups",
    category: "Prayer",
  },
  {
    src: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?w=800&auto=format",
    alt: "Church building",
    caption: "Our Facilities",
    category: "Facilities",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Explore our collection of photos showcasing our church community, events, and outreach programs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-lg font-medium text-white">{image.caption}</p>
                  <span className="mt-2 text-sm text-white/80">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

