export default function GalleryLoading() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-4 w-24 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mt-2 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-200 rounded mx-auto mt-4 animate-pulse"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 w-20 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Gallery Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-2xl aspect-square animate-pulse"></div>
          ))}
        </div>
      </div>
    </main>
  );
}