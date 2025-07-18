import {create} from 'zustand';
import type {  Song } from '@/types';

interface PlayerStore {
    currentSong: Song | null;
    isPlaying: boolean;
    queue: Song[];
    currentIndex: number;
    
   initilizeQueue: (songs: Song[]) => void;
   playAlbum: (songs: Song[], startIndex?: number) => void;
   setCurrentSong: (song: Song) => void;
   togglePlay: () => void;
   playNext: () => void;
    playPrevious: () => void;

}
export const usePlayerStore= create<PlayerStore>((set,get)=>({
     currentSong:null,
    isPlaying:false,
    queue:[],
    currentIndex: -1,
    initilizeQueue: (songs:Song[]) => {},
    playAlbum:(songs:Song[], startIndex?:number)=>{},
    setCurrentSong:(song:Song | null)=>{},
    togglePlay:()=>{},
    playNext:()=>{},
    playPrevious:()=>{},


}))