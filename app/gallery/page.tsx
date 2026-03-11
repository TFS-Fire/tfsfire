'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

type GalleryImage = { id: number; src: string; alt: string; category: string }

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)

  // Placeholder gallery images - replace with actual images
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      alt: 'Firefighters responding to wildfire',
      category: 'Wildfire Response',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Fire station and fire trucks',
      category: 'Station',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      alt: 'Firefighters in action',
      category: 'Training',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
      alt: 'Community event',
      category: 'Community',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      alt: 'Fire safety demonstration',
      category: 'Education',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      alt: 'Wildfire suppression',
      category: 'Wildfire Response',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Fire truck',
      category: 'Equipment',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      alt: 'Training exercise',
      category: 'Training',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
      alt: 'School presentation',
      category: 'Education',
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      alt: 'Community outreach',
      category: 'Community',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      alt: 'Wildfire response team',
      category: 'Wildfire Response',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Fire equipment',
      category: 'Equipment',
    },
  ]

  const categories = ['All', 'Wildfire Response', 'Training', 'Community', 'Education', 'Equipment', 'Station']

  const [selectedCategory, setSelectedCategory] = useState('All')
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  useEffect(() => {
    if (!selectedImage) return
    previousFocusRef.current = document.activeElement as HTMLElement | null
    requestAnimationFrame(() => {
      lightboxRef.current?.querySelector<HTMLElement>('button[aria-label="Close image viewer"]')?.focus()
    })
  }, [selectedImage])

  useEffect(() => {
    if (!selectedImage) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'Tab') {
        const closeBtn = lightboxRef.current?.querySelector<HTMLElement>('button[aria-label="Close image viewer"]')
        if (closeBtn && document.activeElement === closeBtn) {
          e.preventDefault()
          closeBtn.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  useEffect(() => {
    if (!selectedImage && previousFocusRef.current) {
      previousFocusRef.current.focus()
    }
  }, [selectedImage])

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="relative z-10 container-custom text-center">
          <h1 className="mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Moments from our responses, training, and community events
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-fire-red text-white'
                    : 'bg-fire-dark/5 text-fire-dark hover:bg-fire-dark/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group text-left w-full p-0 border-0 bg-transparent"
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-fire-dark/0 group-hover:bg-fire-dark/30 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-fire-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-semibold">{image.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-fire-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded p-2 z-10"
            aria-label="Close image viewer"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
