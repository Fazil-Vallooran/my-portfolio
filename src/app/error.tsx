'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-secondary">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4 text-accent">Something went wrong!</h2>
        <p className="mb-6 text-secondary/80">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 border-2 border-accent text-accent rounded-md hover:bg-accent hover:text-primary transition-all duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
