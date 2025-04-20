"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft } from "lucide-react"

// Create the Archive components directly in this file instead of importing them

function Archive2024() {
  const events2024 = [
    { name: "SUMMER RECAP", date: "5/2024 - 8/2024", link: "https://drive.google.com/drive/folders/18i2x4017LPahe4b_-B9gllYAnh35Em-v?usp=sharing" },
    { name: "SEPTEMBER RECAP", date: "9/2024", link: "https://drive.google.com/drive/folders/19jOilPHgtfgGzPATqCGfuzPJb1VyB6Sv?usp=sharing" },
    { name: "Ice Cream Social", date: "9/7/2024", link: "https://drive.google.com/drive/folders/1GR1WV4Mm6W_htLIAmavYtw6m9qKjWBdx?usp=sharing" },
    { name: "Meet the Parents", date: "9/7/2024", link: "https://drive.google.com/drive/folders/1GR1WV4Mm6W_htLIAmavYtw6m9qKjWBdx" },
    { name: "Downtown Night", date: "9/8/2024", link: "https://drive.google.com/drive/folders/1UWyBsWCzQQE3Ijakf1jka_MpNYU0c73a?usp=sharing" },
    { name: "FullMoonFest Showcase", date: "9/10/2024", link: "https://drive.google.com/drive/folders/1qn4rtphmKr_0-gEfJXFEzuz1Y2bK_3jE?usp=sharing" },
    { name: "Sunset Series at Carter's Mountain", date: "9/12/2024", link: "https://drive.google.com/drive/folders/1tXqjZmRAVrHZ6kKIFegCzdWWkN6ZVO3l?usp=sharing" },
    { name: "Chipotle Fundraiser", date: "9/16/2024", link: "https://drive.google.com/drive/folders/19HK3vZZF1pseEXtzQhVWEZF8uxtbnLxr?usp=sharing" },
    { name: "October Recap", date: "10/2024", link: "https://drive.google.com/drive/folders/1oG7XBei6CZpLoMkrvuLuWRS9vYm9OHBD?usp=sharing" },
    { name: "November Recap", date: "11/2024", link: "https://drive.google.com/drive/folders/137QX9eKo1XymrZyxgCsv-C_2EnJRPE7Y?usp=sharing" },
    { name: "FULLMOONFEST", date: "11/2/2024", link: "https://drive.google.com/drive/folders/1YEbOxB12U1QbeAeQyMKeplnPLcV-Cma7?usp=sharing" },
    { name: "NOVEMBER GBM + Chicken Eating Contest", date: "11/6/2024", link: "https://drive.google.com/drive/folders/1-IEsIHSfYoBmSqmkjSi5Rz353GZw5Kg7?usp=sharing" },
    { name: "Winter Recap", date: "12/2024", link: "https://drive.google.com/drive/folders/1yGMhNGJaeFdaaClGFfXsSoaPMvVU79Qw?usp=sharing" },
    { name: "DECEMBER GBM", date: "12/4/2024", link: "https://drive.google.com/drive/folders/1TN4DcuKpdFglEmdvl5T0oaY_MJx2Sc8g?usp=sharing" },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="2024">
        <AccordionTrigger className="text-xl font-bold">2024</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events2024.map((event, index) => (
              <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full h-auto py-6 text-left justify-start">
                  <div>
                    <div className="font-semibold">{event.name}</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function Archive2023() {
  const events2023 = [
    { name: "RTC Ice Skating", date: "1/4/2023", link: "https://drive.google.com/drive/folders/17k1Y7trD0glBA_G3shUFTWZ2otxYKnOL?usp=sharing" },
    { name: "January GBM", date: "1/18/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=c33c399a9e&e=f5afb523ef" },
    { name: "Lunar New Year Event / Chinafest Showcase", date: "1/21/2023", link: "https://drive.google.com/drive/folders/13H9pBXC-cfFbQQwB1lpygdLmtbyVah65?usp=sharing" },
    { name: "ASU Semi-Formal", date: "1/27/2023", link: "https://drive.google.com/drive/folders/1pHr3-K-weeOtKJ-f9tVkIWFNPKU54VVp?usp=sharing" },
    { name: "February GBM", date: "2/1/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=84e2682d7b&e=f5afb523ef" },
    { name: "ChinaVAsian", date: "2/6/2023", link: "https://drive.google.com/drive/folders/1NYmfmw1DsqFuuUgCxttpuGIPSfIpUdCq?usp=sharing" },
    { name: "Chinafest", date: "2/27/2023", link: "https://drive.google.com/drive/folders/1iry03hXnpFcW5hVyuJZgGy1LUBDdUr9Z?usp=sharing" },
    { name: "March GBM", date: "3/7/2023", link: "https://drive.google.com/drive/folders/1JKabO_Mwqn5C5Nmr5XGFH7u462XJ0Qyt?usp=sharing" },
    { name: "April GBM", date: "4/20/2023", link: "https://drive.google.com/drive/folders/1HEyjEAr6cmZl47JAd6LqMl1UrEsiIQWl?usp=sharing" },
    { name: "Fourth Year Reception", date: "4/30/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=3c7ddfa619&e=f5afb523ef" },
    { name: "Beach Week Photoshoot", date: "5/17/2023", link: "https://drive.google.com/drive/folders/1OL2BXskxUtYlyb8_IPVyeVxx1biw2Fww?usp=sharing" },
    { name: "First GBM", date: "8/30/2023", link: "https://drive.google.com/drive/folders/1-0x9jxxWJHg4jo2CRoyKg9jUjHXHEtOf?usp=sharing" },
    { name: "Ice Cream Social", date: "9/2/2023", link: "https://drive.google.com/drive/folders/1NnGwE6FEMdjbXZhgwsQgu7eD8_tCd3pV?usp=sharing" },
    { name: "Meet the Parents", date: "9/2/2023", link: "https://drive.google.com/drive/folders/1-1xxstwsss2fQ6XO71u57oFIrXHxtB_W?usp=sharing" },
    { name: "Downtown Night", date: "9/3/2023", link: "https://drive.google.com/drive/folders/1-7QPg5KPqB2NFxsG6iFHWOAht-OY237g?usp=sharing" },
    { name: "FullMoonFest Showcase", date: "9/6/2023", link: "https://drive.google.com/drive/folders/1Hf4j8D6BiudzReRsOYdIRNiIFkffCbqL?usp=sharing" },
    { name: "Crafts Night", date: "9/10/2023", link: "https://drive.google.com/drive/folders/1Dk1kihhwrj5exWlTBfMqkjXjOyfhcJLM?usp=sharing" },
    { name: "Sunset Series at Carter Mountain", date: "9/14/2023", link: "https://drive.google.com/drive/folders/1gaOJnjiZ73HKH-db3gvViuBQtUeqNVMq?usp=sharing" },
    { name: "Fall 2023 Sports Media", date: "9/15/2023-10/24/2023", link: "https://drive.google.com/drive/folders/1YrcDJY-F2YracJ5D_DYUimhVfaBdIdJs?usp=sharing" },
    { name: "October GBM", date: "10/4/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=79abf9d9cf&e=f5afb523ef" },
    { name: "YAR Tailgate", date: "10/7/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=2346463270&e=f5afb523ef" },
    { name: "Pumpkin Painting", date: "10/14/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a674324198&e=f5afb523ef" },
    { name: "ASU Semi-Formal", date: "10/22/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=3ab36bb1b1&e=f5afb523ef" },
    { name: "FullMoonFest", date: "10/28/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=2f5afb010f&e=f5afb523ef" },
    { name: "November GBM", date: "11/1/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=8c9ef6e86a&e=f5afb523ef" },
    { name: "Thanksgiving Potluck", date: "11/14/2023", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=d7069f4d1c&e=f5afb523ef" },
    { name: "Dollar Dim Sum", date: "12/1/2023", link: "https://drive.google.com/drive/folders/1lFOHypL3k2QJDXaIyVFCiXb5H8qH1ea9?usp=sharing" },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="2023">
        <AccordionTrigger className="text-xl font-bold">2023</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events2023.map((event, index) => (
              <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full h-auto py-6 text-left justify-start">
                  <div>
                    <div className="font-semibold">{event.name}</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function Archive2022() {
  const events2022 = [
    { name: "Fourth Year Reception", date: "5/1/2022", link: "https://drive.google.com/drive/folders/1qk5cGsrDOMXMvYLdYXNWo4cvReZyXJxA?usp=sharing" },
    { name: "Beach Week Photoshoot", date: "5/16/2022", link: "https://drive.google.com/drive/folders/1bqHFE-qj4biYnBVzVOIFVVe2401pUzvi?usp=drive_link" },
    { name: "Activities Fair", date: "8/28/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a409fff355&e=f5afb523ef" },
    { name: "First GBM", date: "8/31/2022", link: "https://drive.google.com/drive/folders/1CROVAysf1e51fkgHDoQO_yInTDvMO0qU?usp=drive_link" },
    { name: "Meet the Parents", date: "9/2/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=344c1b60ed&e=f5afb523ef" },
    { name: "Downtown Night", date: "9/3/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=12ca934e7a&e=f5afb523ef" },
    { name: "FullMoonFest Showcase", date: "9/7/2022", link: "https://drive.google.com/drive/folders/1htnnDtwn6yKIGmwLhukTZ5_kDboWXSPi?usp=drive_link" },
    { name: "Arts and Crafts", date: "9/11/2022", link: "https://drive.google.com/drive/folders/12Fu9ko_nJmosBWA1q1ExDd7GOIUDgbgb?usp=sharing" },
    { name: "Community Dinner", date: "9/14/2022", link: "https://drive.google.com/drive/folders/1kYxj-EjRzSpfyWJbUvqDLPSarHa8jEJu?usp=sharing" },
    { name: "Sunset Series at Carter Mountain", date: "9/15/2022", link: "https://drive.google.com/drive/folders/1viU5zMrRcGsLldezXDxT2t2LLzzxq8HA?usp=drive_link" },
    { name: "Mid-Autumn Festival Potluck", date: "9/16/2022", link: "https://drive.google.com/drive/folders/1viU5zMrRcGsLldezXDxT2t2LLzzxq8HA?usp=drive_link" },
    { name: "Paint Wars", date: "9/18/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a6737e6bc1&e=f5afb523ef" },
    { name: "Fall 2022 Sports Media", date: "9/25/2022-12/6/2022", link: "https://drive.google.com/drive/folders/19q0HM1ICjjHQ8jBQS6mM4xlk-_w9h7hb?usp=sharing" },
    { name: "October GBM", date: "10/5/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a6737e6bc1&e=f5afb523ef" },
    { name: "YAR Tailgate", date: "10/7/2022", link: "https://drive.google.com/drive/folders/1U8BQLDr9jN53bdUGqpj7Qoj0-qUNmXrf?usp=sharing" },
    { name: "Community Dinner", date: "10/12/2022", link: "https://drive.google.com/drive/folders/1oZEl0Mmm2ZhFhc_41934RiT6mP-1oXjR?usp=sharing" },
    { name: "FullMoonFest", date: "10/21/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=7283c5659d&e=f5afb523ef" },
    { name: "Culturefest", date: "10/29/2022", link: "https://drive.google.com/drive/folders/1bvM2bybDEaSD3L5MYLMzskBtYAvJKIFL?usp=sharing" },
    { name: "November GBM", date: "11/2/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=901ffee72e&e=f5afb523ef" },
    { name: "Chinaball", date: "11/13/2022", link: "https://drive.google.com/drive/folders/1Hz6eXskGFjnysXkTNmuun4rdYOEmx7tX?usp=sharing" },
    { name: "Dollar Dim Sum", date: "12/4/2022", link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=d76d715972&e=f5afb523ef" },
    { name: "December GBM", date: "12/7/2022", link: "https://drive.google.com/drive/folders/1yLN9zZyoAsUiEth0nXtLPPGHyLsEQ9AK?usp=sharing" },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="2022">
        <AccordionTrigger className="text-xl font-bold">2022</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events2022.map((event, index) => (
              <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full h-auto py-6 text-left justify-start">
                  <div>
                    <div className="font-semibold">{event.name}</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function ArchivePage() {
  return (
    <div className="container-custom">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/gallery">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="mb-0">Archive</h1>
      </div>

      <div className="space-y-6">
        <Archive2024 />
        <Archive2023 />
        <Archive2022 />
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <a href="https://www.facebook.com/csa.uva/photos_albums" target="_blank" rel="noopener noreferrer">
            Facebook Group Photo Albums (2013-2022)
          </a>
        </Button>
      </div>
    </div>
  )
}
