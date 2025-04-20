"use client"
import "app/globals.css"
import "@fontsource/raleway"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { InstagramEmbed } from "react-social-media-embed"

import cranes from "/public/images/2024-2025/families/cranes.jpg"
import eagles from "/public/images/2024-2025/families/eagles.jpg"
import swans from "/public/images/2024-2025/families/swans.jpg"

const Families = () => {
  return (
    <div className="content">
      <div className="header">
        <h1>Families</h1>
        <h3>
          Every year, all members are assigned to different families. Families play a major role in CSA&apos;s social
          activities, from organizing family events to creating a sense of community for both new and old members. The
          family system cultivates strong connections, fostering friendships and shared experiences that define the
          essence of the CSA.
        </h3>
      </div>
      <Swiper slidesPerView={1} loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="header">
            <h2>Crimson Cranes</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={cranes} alt="Cranes' family picture at Sunset Series" height={375} />
            <InstagramEmbed url="https://www.instagram.com/p/C_s1qT2RZy4/" height={375} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header">
            <h2>Emerald Eagles</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={eagles} alt="Eagles' family picture at Sunset Series" height={375} />
            <InstagramEmbed url="https://www.instagram.com/p/C_qkcHtR6V1/" height={375} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header">
            <h2>Sapphire Swans</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={swans} alt="Swans' family picture at Sunset Series" height={375} />
            <InstagramEmbed url="https://www.instagram.com/p/C_tZTNUpvA7/?img_index=7" height={375} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Families
