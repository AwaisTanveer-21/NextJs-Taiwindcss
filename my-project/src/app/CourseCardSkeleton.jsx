
export default function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-200"></div>
      
      {/* Content Skeleton */}
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
  );
}