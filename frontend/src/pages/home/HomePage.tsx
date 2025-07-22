import Topbar from "@/components/ui/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { all } from "axios";

const HomePage = () => {
  const {
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
    trendingSongs,
    madeForYouSongs,
    featuredSongs,
  } = useMusicStore();
const {initializedQueue}= usePlayerStore()
  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);
  useEffect(()=>{
    if(madeForYouSongs.length>0 && featuredSongs.length>0 && trendingSongs.length>0){
      const allSongs= [...featuredSongs,...madeForYouSongs,...trendingSongs];
      initializedQueue(allSongs);
    }
  }, [initializedQueue, madeForYouSongs,featuredSongs,trendingSongs]);

  return (
    <main className="rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)] ">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 ">
            Good Afternoon
          </h1>
          <FeaturedSection />
        
        <div className="space-y-8">
          <SectionGrid title="Made for You" songs={madeForYouSongs} isLoading={isLoading}/>
           <SectionGrid title="trending" songs={trendingSongs} isLoading={isLoading}/>

         
         </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
