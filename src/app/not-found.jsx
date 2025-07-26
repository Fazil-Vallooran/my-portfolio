import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-secondary">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-accent">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-8 text-secondary/80">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 border-2 border-accent text-accent rounded-md hover:bg-accent hover:text-primary transition-all duration-300 inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
