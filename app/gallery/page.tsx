import Link from "next/link"
import { Button } from "@/components/ui/button"

const galleryItems = [
  { name: "Summer Recap", url: "https://drive.google.com/drive/folders/1NJADqWykVtzM17U-2REx99ikRxAVxC37" },
  { name: "O-Board Photoshoot", url: "https://drive.google.com/drive/folders/14RAcQphMeB_716Es7pKQWGx1kezhXq9t" },
  { name: "FFW", url: "https://drive.google.com/drive/folders/1mP8U8ktVFLqGjOufFvoaSSFnbyT6mgc1" },
  { name: "Big Little Reveals", url: "https://drive.google.com/drive/folders/1dKLKxGMr0qNTViiNH_Qqce09vwofgGUE" },
  { name: "Sunrise Hike", url: "https://drive.google.com/drive/folders/1AuQG_xAYWlvaFoe5HtnDc0ggt8cIlo1z" },
  { name: "September Recap", url: "https://drive.google.com/drive/folders/1dM8PlGnu7wYbpTOswMofGpndMv_KfPjs" },
  { name: "DIGI DIARIES", url: "https://drive.google.com/drive/folders/1bePiOCZr2RKABo3B1EQJkW3LeLMFpW3E" },
  { name: "ASU Semi-Formal", url: "https://drive.google.com/drive/folders/1cyZ16_Tkgd68ZtiUQ7nz6ev20tuORSQP" },
  { name: "FMF Promo", url: "https://drive.google.com/drive/folders/1XCbRjGsSZtiQTRQN0mZ9d4y0FyYbJjt-" },
  { name: "October GBM", url: "https://drive.google.com/drive/folders/1FAGOcM2b0_fefohwWTxHn-iNSb84cg0P" },
  { name: "YAR Tailgate", url: "https://drive.google.com/drive/folders/1fVGfKViJgOMCSGWHQe34rR9813pVAOnj" },
  { name: "Pumpkin Painting", url: "https://drive.google.com/drive/folders/1fibB6wtbgawEoxw4tzKwwZlYTzucFhKw" },
  { name: "October Recap", url: "https://drive.google.com/drive/folders/18aeULYqpb_8gQZNqh9uh40UVBsIQ7b9y" },
  { name: "Full Moon Festival", url: "https://drive.google.com/drive/folders/1TfH-3pSNGCQ1ljoJM3LCoQzJHMunvV10" },
  { name: "FMF Videos", url: "https://drive.google.com/drive/folders/1Q-Is9pSh-MR0LwWHgQZuCHx4DzlzL0VP" },
  { name: "FMF Afterparty", url: "https://drive.google.com/drive/folders/1aQhgEuvZp_c6_CV-sOAvjv8oBZpjk5ga" },
  { name: "November Recap", url: "https://drive.google.com/drive/folders/1NyioMfvNUXoBn9yRYjyaP1ukPESjz6Gz" },
  { name: "December GBM", url: "https://drive.google.com/drive/folders/1daivhPVyvyF_FuGDBdl3mNP7uHMqKiPW" },
  { name: "Dollar Dim Sum", url: "https://drive.google.com/drive/folders/143xSkNjhBqAXPsnvg-hHmpvXPiggrABx" },
  { name: "December/Break Recap", url: "https://drive.google.com/drive/folders/1G_iKNh_3BfsvKCg4tYtXQVk0s30G-_bK" },
  { name: "January GBM", url: "https://drive.google.com/drive/folders/18rjx-dsI2X7BcLiubkEzgAtUo3QoaEN1" },
  { name: "Richmond Trip", url: "https://drive.google.com/drive/folders/19HMCs7Se-JKJatv1AlEqCWhMaDX__RBw" },
  { name: "January/February Recap", url: "https://drive.google.com/drive/folders/1qLIxHghN6GNJFcUyWhlt5uqGuwpvoRLw" },
  { name: "ChinaVAsian", url: "https://drive.google.com/drive/folders/1HOyqw7G83qdNgFzqAFIEDDycmLjBRyfj" },
  { name: "CVA AP", url: "https://drive.google.com/drive/folders/1dzIJdROFhT2AJVtzUzCdYsQ_a5pr6-7R" },
  { name: "Chinaball", url: "https://drive.google.com/drive/folders/1sW9jv73NrBOKnxWN7EtUaTQivGXKZRJv" },
  { name: "March Recap", url: "https://drive.google.com/drive/folders/1ZzkX2V94VTqIkA5dFq7S9yhJIg1NIWRq" },
  { name: "Chinafest", url: "https://drive.google.com/drive/folders/1lS5eubqJc7ml3EUQvb67dxl6G_sdBzDR" },
  { name: "Fourth Year Farewell", url: "https://drive.google.com/drive/folders/1FdTORtfErMS7C7a7QsZka0lFGmARm-tY" },
]

export default function GalleryPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Gallery</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Photos from our 2025–2026 events and activities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="outline" className="w-full h-auto py-6 text-left justify-start">
              <span className="font-semibold">{item.name}</span>
            </Button>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/gallery/archive">View Archive</Link>
        </Button>
      </div>
    </div>
  )
}
