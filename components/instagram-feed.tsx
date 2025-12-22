"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Instagram, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface InstagramPhoto {
  id: string
  url: string
  thumbnail: string
  link: string
  caption: string
}

interface InstagramFeedData {
  photos: InstagramPhoto[]
  profileUrl: string
}

export function InstagramFeed() {
  const [photos, setPhotos] = useState<InstagramPhoto[]>([])
  const [profileUrl, setProfileUrl] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch("/api/instagram")
        if (!response.ok) throw new Error("Failed to fetch photos")
        const data: InstagramFeedData = await response.json()
        setPhotos(data.photos)
        setProfileUrl(data.profileUrl)
        setError(null)
      } catch (err) {
        console.error("Error fetching Instagram photos:", err)
        setError("Não foi possível carregar as fotos do Instagram")
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error || photos.length === 0) {
    return (
      <div className="text-center py-12">
        <Instagram className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground mb-4">{error || "Nenhuma foto encontrada"}</p>
        <Button
          variant="outline"
          onClick={() => window.open("https://www.instagram.com/caiuaconstrucoes/", "_blank")}
        >
          <Instagram className="w-4 h-4 mr-2" />
          Ver no Instagram
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Card
            key={photo.id}
            className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => window.open(photo.link, "_blank")}
          >
            <div className="aspect-square relative">
              <Image
                src={photo.thumbnail}
                alt={photo.caption || "Foto do Instagram"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 text-white">
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Ver post</span>
                  </div>
                </div>
              </div>
            </div>
            {photo.caption && (
              <div className="p-3 bg-background">
                <p className="text-sm text-muted-foreground line-clamp-2">{photo.caption}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open(profileUrl || "https://www.instagram.com/caiuaconstrucoes/", "_blank")}
          className="gap-2"
        >
          <Instagram className="w-5 h-5" />
          Seguir @caiuaconstrucoes no Instagram
        </Button>
      </div>
    </div>
  )
}

