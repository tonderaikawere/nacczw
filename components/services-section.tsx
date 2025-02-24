import { Book, Heart, Users, Sunrise, UserPlus, HandHeart, GraduationCap, Church } from "lucide-react"

const services = [
  {
    title: "Morning Prayer",
    description:
      "Start your day with our Morning Prayer service, a peaceful and reflective time to connect with God and seek His guidance for the day ahead.",
    icon: Sunrise,
  },
  {
    title: "Prayer Groups",
    description:
      "Our Prayer Groups offer a supportive environment for sharing burdens and praying for one another, fostering community and strengthening faith.",
    icon: Users,
  },
  {
    title: "Sunday Services",
    description:
      "Join us every Sunday for worship, sermons, communion, and uplifting music to renew your faith and connect with believers.",
    icon: Church,
  },
  {
    title: "Marriage Counseling",
    description:
      "We provide marriage counseling based on Christian principles to help couples build strong, healthy relationships.",
    icon: Heart,
  },
  {
    title: "Community Outreach",
    description:
      "Join our Community Outreach programs to extend Christ's love through food drives and volunteer services in our local communities.",
    icon: HandHeart,
  },
  {
    title: "Bible Study",
    description:
      "Join our weekly Bible study for an in-depth exploration of Scripture led by knowledgeable leaders, fostering spiritual growth.",
    icon: Book,
  },
  {
    title: "Youth Programs",
    description: "Our Youth Programs are designed to engage and inspire the younger members of our community.",
    icon: GraduationCap,
  },
  {
    title: "Baptisms",
    description:
      "Join us to witness the profound and joyous occasion of baptism, as we welcome new believers into the Christian faith.",
    icon: UserPlus,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join us to enrich your spiritual journey and strengthen your connection with our community.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              <service.icon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

