import FeaturedGridSkeleton from "@/components/skeletons/FeaturedGridSkeleton"
import { useMusicStore } from "@/stores/useMusicStore"



const FeaturedSection = () => {
   const {isLoading, featuredSongs,error} = useMusicStore()
   if(isLoading){
    return <FeaturedGridSkeleton />

   }
   if(error){
    return <p className="text-red-500 mb-4 test-lg">{error}</p>

   }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {featuredSongs.map((songs)=>{
        return (
          <div key={songs._id} className="flex items-center bg-zinc-800/50 rounded-md overflow-hidden
          hover:bg-zinc-800 transition-colors duration-200 group cursor-pointer relative">
            <img src={songs.imageUrl} alt={songs.title} className="w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0" />
            <div className="flex-1 p-4">
              <div className="font-medium truncate">{songs.title}</div>
              <p className="text-sm text-zinc-400 truncate">{songs.artist}</p>
            </div>
          </div>
          // TODO: Play Button
        )
      })}
    </div>
  )
}

export default FeaturedSection
