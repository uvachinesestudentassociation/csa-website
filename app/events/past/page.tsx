"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function PastEventsPage() {
  const academicYears = [
    { year: "2023-2024", href: "/events/past/2023-2024" },
    { year: "2022-2023", href: "/events/past/2022-2023" },
    { year: "2021-2022", href: "/events/past/2021-2022" },
    { year: "2020-2021", href: "/events/past/2020-2021" },
    { year: "2019-2020", href: "/events/past/2019-2020" },
    { year: "2018-2019", href: "/events/past/2018-2019" },
    { year: "2017-2018", href: "/events/past/2017-2018" },
  ]

  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Past Events</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Browse through our past events and activities by academic year.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {academicYears.map((year) => (
          <Link key={year.year} href={year.href} className="block">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-2xl font-bold mb-4">{year.year}</h2>
                <Button variant="outline" className="mt-auto">
                  <span>View Events</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
