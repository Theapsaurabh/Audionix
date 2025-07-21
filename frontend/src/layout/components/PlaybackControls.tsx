import { usePlayerStore } from "@/stores/usePlayerStore"
import { useEffect, useRef, useState } from "react";

const PlaybackControls = () => {
    const {currentSong, isPlaying, togglePlay, playNext, playPrevious}= usePlayerStore();
    const [volume, setVolume]= useState(75);
    const [currentTime, setCurrentTime]= useState(0);
    const [duration, setDuration]= useState(0);
    const audioRef= useRef<HTMLAudioElement | null>(null);
    useEffect(()=>{
        audioRef.current= document.querySelector("audio");
        const audio= audioRef.current;
        if(!audio) return;
        const updateTime= ()=> setCurrentTime(audio.currentTime);
        const updateDuration= ()=> setDuration(audio.duration);


        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        const handleEnded = ()=>{
            
        }
        audio.addEventListener("ended", handleEnded )



    },[])
  return (
    <div>
      
    </div>
  )
}

export default PlaybackControls
