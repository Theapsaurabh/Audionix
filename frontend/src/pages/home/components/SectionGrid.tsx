import SectionGridSkeleton from "@/components/skeletons/SectionGridSkeleton";
import type { Song } from "@/types";
import { Button } from "@/components/ui/button";

type SectionGridProps = {
  title: string;
  songs: Song[];
  isLoading?: boolean;
};
const SectionGrid = ({ title, songs, isLoading }: SectionGridProps) => {
  if (isLoading) {
    return <SectionGridSkeleton />;
  }
  return (
    <div className="nb-8 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <Button
          variant="link"
          className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
        >
          See All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div
            key={song._id}
            className="bg-zinc-800/50 p-4 rounded-md
             hover:bg-zinc-800 transition-colors duration-200 group cursor-pointer relative"
          > 
          <div className="relative mb-4 ">
            <div className="aspect-square rounded-md shadow-lg overflow-hidden">
                <img src={song.imageUrl} alt={song.title} className="w-full object-cover
                transition-transform duration-300 group-hover:scale-105" />


            </div>
            {/*** TODO: Add play button  */}

          </div>
          <h3 className=" font-medium mb-2 truncate">
            {song.title}
          </h3>
          <p className="text-sm text-zinc-400 truncate">
            {song.artist}
          </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionGrid;
