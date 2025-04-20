import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero section with improved height and styling */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/images/about_cover.jpg"
          alt="CSA Group Photo"
          fill
          className="object-contain md:object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70 dark:to-background/80"></div>
      </div>

      <div className="container-custom max-w-6xl">
        <div className="section-title -mt-16 md:-mt-24 relative z-10 mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary dark:text-primary-foreground drop-shadow-sm">
            About CSA@UVA
          </h1>
          <div className="max-w-3xl mx-auto bg-card/90 dark:bg-card/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md">
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4 text-center">
              The Chinese Student Association at the University of Virginia (CSA@UVA) seeks to promote Chinese culture
              within the University and greater Charlottesville community.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-center">
              CSA welcomes and encourages people of all ages, races, and backgrounds!
            </p>
          </div>
        </div>

        {/* Culture section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">Culture</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-4 leading-relaxed">
                Our primary goal is to nurture and celebrate Chinese culture and heritage. We hold two large cultural
                showcases annually: <span className="font-semibold">FullMoonFest</span> for Mid-Autumn Festival, and{" "}
                <span className="font-semibold">Chinafest</span> for Lunar New Year. Both include dances, skits, and
                other entertainment, exhibiting facets of both traditional and modern Chinese culture.
              </p>
              <p className="leading-relaxed">
                Even though our primary goal is to celebrate Chinese culture, we invite people from all cultures and
                backgrounds to join CSA. Our events like <span className="font-semibold">Dollar Dim Sum</span> provide
                opportunities for everyone to experience authentic Chinese cuisine and traditions.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-lg order-1 md:order-2 transform transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/gallery/chinafest_dragon_justin_2023.JPG"
              alt="Dragon Dance at Chinafest"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Community section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32 items-center">
          <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
            <Image src="/images/gallery/asu_exec_2023.jpg" alt="CSA Executive Board" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">Community</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="leading-relaxed">
                Beyond cultural celebrations, CSA prides itself on our community and unity. Our{" "}
                <span className="font-semibold">family system</span> forges lifelong connections, where individuals find
                support, mentorship, and a sense of belonging. We spend time and connect with friends old and new,
                whether through sports, parties, or other social events. We create bonds beyond just cultural
                affiliations.
              </p>
            </div>
          </div>
        </div>

        {/* Outreach section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">Outreach</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="leading-relaxed">
                Finally, CSA spreads our goals throughout the whole surrounding community. We participate in{" "}
                <span className="font-semibold">Culturefest</span>, UVA's annual multicultural showcase; interact and
                co-host events with other CIOs on-grounds such as UPC and other multicultural organizations; and invite
                the whole UVA and Charlottesville community to come to our events, especially for our large culture
                shows like FullMoonFest and Chinafest. We celebrate Chinese culture with anyone and everyone.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-lg order-1 md:order-2 transform transition-transform duration-500 hover:scale-[1.02]">
            <Image src="/images/gallery/yar_2023.jpg" alt="YAR Tailgate" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}