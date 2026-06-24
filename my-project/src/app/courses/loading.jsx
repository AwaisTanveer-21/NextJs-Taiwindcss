export default function CoursesLoading() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-4 w-24 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mt-2 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-200 rounded mx-auto mt-4 animate-pulse"></div>
        </div>

        {/* Filter Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Courses Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded-full"></div>
                  <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="h-6 w-24 bg-gray-200 rounded"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}