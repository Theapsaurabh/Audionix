import { useMusicStore } from "@/stores/useMusicStore";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Play } from "lucide-react";

const AlbumPage = () => {
  const { albumId } = useParams();
  const { fetchAlbumById, currentAlbum, isLoading } = useMusicStore();

  useEffect(() => {
    if (albumId) fetchAlbumById(albumId);
  }, [albumId, fetchAlbumById]);

  if (isLoading) return null;

  return (
    <div className="h-full ">
      <ScrollArea className="h-full w-full">
        {/** Main Content */}
        <div className="relative min-h-full">
          {/** bg- gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80
           to-zinc-900 pointer-events-none"
            aria-hidden="true"
          />
          {/**content */}
          <div className="relative z-10 ">
            <div className="flex p-6 gap-6 pb-8">
              <img
                src={currentAlbum?.imageUrl}
                alt={currentAlbum?.title}
                className="w-[240px] h-[240px] shadow-xl rounded"
              ></img>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium">Album</p>
                <h1 className="text-7xl font-bold my-4">
                  {currentAlbum?.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <span className="font-medium text-white">
                    {currentAlbum?.artist}
                  </span>
                  <span>{currentAlbum?.songs.length} Songs</span>
                  <span>{currentAlbum?.releaseYear}</span>
                </div>
              </div>
            </div>
            {/** controlls */}
            <div className="px-6 pb-4 flex items-center gap-6">
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-green-500
              hover:bg-green-400 hover:scale-105 transition-all "
              >
                <Play className="w-7 h-7 text-white" />
              </Button>
            </div>
            {/** table Section */}
            <div className="bg-black/20 backdrop:blur-sm">
              {/** Table Header */}
              <div
                className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm
            text-zinc-400 border-b border-white/5"
              >
                <div>#</div>
                <div>Title</div>
                <div>Release Date</div>
                <div>
                  <Clock className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
              {/** songs */}
              <div className="px-6">
                <div className="space-y-2 py-4">
                  {currentAlbum?.songs.map((song, index) => (
                    <div
                      key={song._id}
                      className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 items-center text-sm px-4 py-2 text-zinc-400
                      hover:bg-white/5 rounded-md group cursor-pointer"
                    >
                      <div className="flex items-center justify-center ">
                        <span className="text-zinc-400">{index + 1}</span>
                      <Play className="h-4 w-4 hidden group-hover:block"></Play>

                      </div>
                      
                      <div className="flex items-center gap-3">
                        <img
                          src={song.imageUrl}
                          alt={song.title}
                          className="size-10"
                        />
                        <span className="text-white">{song.title}</span>
                      </div>
                      <div className="text-zinc-500">
                        {new Date(song.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-zinc-500">
                        {Math.floor(song.duration / 60)}:
                        {(song.duration % 60).toString().padStart(2, "0")}
                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AlbumPage;
