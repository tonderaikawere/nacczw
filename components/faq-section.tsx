import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the National Association of Christian Churches (NACC)?",
    answer:
      "The National Association of Christian Churches (NACC) is a Membership Faith-Based Community of Churches that brings together Apostolic, Zion, Pentecostal, and other like-minded churches and institutions across Zimbabwe.",
  },
  {
    question: "Where is the NACC located?",
    answer:
      "Our main office is located at Suite 217 Lutheran House, H. Chitepo Str Bulawayo, Zimbabwe. We also have various member churches and branches throughout Zimbabwe.",
  },
  {
    question: "What areas do you operate in?",
    answer:
      "NACC operates throughout Zimbabwe, with member churches and programs in both urban and rural areas. Our initiatives reach communities across the country.",
  },
  {
    question: "What are the main objectives of NACC?",
    answer:
      "Our main objectives include fostering spiritual growth, promoting unity among churches, supporting social-economic development, and empowering communities through various outreach programs and initiatives.",
  },
  {
    question: "How can my church become a member of NACC?",
    answer:
      "To become a member, churches need to complete our membership application process, which includes submitting required documentation and meeting our membership criteria. Contact us for detailed information about the application process.",
  },
]

export function FaqSection() {
  return (
    <section className="py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We hope this FAQ section helps answer your questions about NACC. If you have any other inquiries, please
            don't hesitate to contact us.
          </p>
        </div>
        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

