import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image src="/images/about_cover.jpg" alt="CSA Group Photo" fill className="object-contain md:object-cover object-center" priority />
      </div>

      <div className="container-custom">
        <div className="section-title">
          <h1>About CSA@UVA</h1>
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-xl md:text-2xl font-semibold">
            The Chinese Student Association at the University of Virginia (CSA@UVA) seeks to promote Chinese culture
            within the University and greater Charlottesville community.
          </p>
          <p className="text-xl md:text-2xl font-semibold">
            CSA welcomes and encourages people of all ages, races, and backgrounds!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2>Culture</h2>
            <p>
              Our primary goal is to nurture and celebrate Chinese culture and heritage. We hold two large cultural
              showcases annually: FullMoonFest for Mid-Autumn Festival, and Chinafest for Lunar New Year. Both include
              dances, skits, and other entertainment, exhibiting facets of both traditional and modern Chinese culture.
              We also have other cultural events like Dollar Dim Sum, where we sell Chinese food for $1 a portion.
            </p>
            <p>
              Even though our primary goal is to celebrate Chinese culture, we invite people from all cultures and
              backgrounds to join CSA.
            </p>
          </div>
          <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/gallery/chinafest_dragon_justin_2023.JPG"
                alt="Dragon Dance at Chinafest"
                fill
                className="object-contain"
              />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/gallery/asu_exec_2023.jpg" alt="CSA Executive Board" fill className="object-cover" />
          </div>
          <div>
            <h2>Community</h2>
            <p>
              Beyond cultural celebrations, CSA prides itself on our community and unity. Our family system forges
              lifelong connections, where individuals find support, mentorship, and a sense of belonging. We spend time
              and connect with friends old and new, whether through sports, parties, or other social events. We create
              bonds beyond just cultural affiliations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2>Outreach</h2>
            <p>
              Finally, CSA spreads our goals throughout the whole surrounding community. We participate in Culturefest,
              UVA's annual multicultural showcase; interact and co-host events with other CIOs on-grounds such as UPC
              and other multicultural organizations; and invite the whole UVA and Charlottesville community to come to
              our events, especially for our large culture shows like FullMoonFest and Chinafest. We celebrate Chinese
              culture with anyone and everyone.
            </p>
          </div>
          <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/gallery/yar_2023.jpg" alt="YAR Tailgate" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
