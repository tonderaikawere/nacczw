import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate",
  description: "Support our mission by making a donation to NACC.",
}

export default function DonatePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Support Our Mission</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Your generous donation helps us continue our work in the community and spread God's love.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card className="p-6">
              <form className="space-y-6" action="/api/donate" method="POST">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Donation Amount (USD)</Label>
                    <Select name="amount" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">$10</SelectItem>
                        <SelectItem value="25">$25</SelectItem>
                        <SelectItem value="50">$50</SelectItem>
                        <SelectItem value="100">$100</SelectItem>
                        <SelectItem value="custom">Custom Amount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="custom-amount">Custom Amount (USD)</Label>
                    <Input
                      id="custom-amount"
                      name="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Enter custom amount"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <textarea
                      id="message"
                      name="message"
                      className="h-24 rounded-md border p-2"
                      placeholder="Leave a message..."
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Proceed to Payment
                </Button>
              </form>
            </Card>

            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold">Other Ways to Give</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold">Bank Transfer</h3>
                  <p>Account Name: NACC Zimbabwe</p>
                  <p>Bank: Example Bank</p>
                  <p>Account Number: XXXX-XXXX-XXXX-XXXX</p>
                </div>
                <div>
                  <h3 className="font-semibold">Mobile Money</h3>
                  <p>EcoCash: +263 77 327 0362</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

