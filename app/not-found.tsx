import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fire-dark/5">
      <div className="text-center">
        <p className="text-6xl font-bold text-fire-red mb-4" aria-hidden="true">404</p>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-fire-dark/70 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
