export function MapSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Location</h2>
          <p className="mt-4 text-lg text-muted-foreground">Find us at Lutheran House in Bulawayo, Zimbabwe</p>
        </div>
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5963666889386!2d28.58333!3d-20.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5547f3f3b9bf7%3A0x4b7fe7ce3f0b1ce1!2sLutheran%20House%2C%20Herbert%20Chitepo%20St%2C%20Bulawayo%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1645789012345!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

