import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format",
    alt: "Church congregation during worship",
    caption: "Sunday Worship Service at NACC",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format",
    alt: "Youth group activities",
    caption: "Youth Leadership Program",
  },
  {
    src: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&auto=format",
    alt: "Community outreach program",
    caption: "Community Outreach Initiative",
  },
  {
    src: "https://images.unsplash.com/photo-1511649475669-e288648b2339?w=800&auto=format",
    alt: "Bible study group",
    caption: "Weekly Bible Study Sessions",
  },
]

export function GallerySection() {
  return (
    <section className="py-24" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Gallery</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here at NACC, we believe in putting our faith into action. Our community outreach programs are designed to
            make a difference.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-medium text-white">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/gallery">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

