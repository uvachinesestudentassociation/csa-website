"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Background" fill priority className="object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Welcome to CSA!</h1>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/95 dark:bg-card/95 backdrop-blur shadow-lg">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg md:text-xl text-center mb-6">
                  The Chinese Student Association at the University of Virginia (CSA@UVA), as one of the largest
                  Asian-American cultural organizations on grounds, seeks to promote awareness and appreciation for
                  Chinese culture within the University and greater Charlottesville community.
                </p>

                <div className="flex justify-center space-x-6 mb-8">
                  <Link
                    href="https://www.facebook.com/csa.uva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Facebook className="h-8 w-8" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.facebook.com/groups/csaatuva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Facebook className="h-8 w-8" />
                    <span className="sr-only">Facebook Group</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/csaatuva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Instagram className="h-8 w-8" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@TheCSAatUVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Youtube className="h-8 w-8" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/11_qaSL1IiBrtmic8Z_uvV28ASoNvcUp2JaCFi7mtRVk/viewform",
                      )
                    }
                  >
                    Returning Members Form
                  </Button>
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/1IJpfdlxr7xssdubWsDVTqSrGaAiJyIdtcGHYZXeInhw/viewform",
                      )
                    }
                  >
                    New Members Form
                  </Button>
                </div>

                <div className="mt-4 flex justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://facebook.us20.list-manage.com/subscribe?u=5df38cf096c70a0a7d9613210&id=a7ebb0ef17",
                      )
                    }
                  >
                    Subscribe to Our Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
