
import { axiosInstance } from '@/lib/axios';
import type { Album, Song, Stats } from '@/types';




import {create } from 'zustand';

interface MusicStore{
    albums: Album[];
    songs: Song[];
    isLoading: boolean;
    error: string | null;
    featuredSongs: Song[];      
    currentAlbum: Album | null;
    stats: Stats;
   
    
     madeForYouSongs: Song[];
    trendingSongs: Song[];
    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    fetchMadeForYouSongs: () => Promise<void>;
    fetchTrendingSongs: () => Promise<void>;
    fetchFeaturedSongs: () => Promise<void>;
    fetchStats:()=>Promise<void>;
    fetchSongs:()=>Promise<void>;
    

     
    
    
}

export const useMusicStore= create<MusicStore>((set)=>({
    albums:[],
    songs:[],
    isLoading:false,
    error:null,
    currentAlbum: null,
    featuredSongs: [],       
    trendingSongs: [],
    madeForYouSongs:[],
    stats:{
        totalSongs:0,
        totalAlbums:0,
        totalUsers:0,
        totalArtists:0,

    },

    fetchSongs: async()=>{
        set({isLoading:true, error:null})
        try {
            const response= await axiosInstance.get("/songs")
            set({songs: response.data})
            
        } catch (error:any) {
            set({error: error.message})
            
        }finally{
            set({isLoading:false})
        }

    },
    fetchStats: async()=>{
        set({isLoading:true, error:null})
        try {
            const response= await axiosInstance.get("/stats")
            set({stats:response.data})
        } catch (error:any) {
            set({error:error.message})
            
        }finally{
            set({isLoading:false})
        }

    },
    
    fetchAlbums: async () => {
		set({ isLoading: true, error: null });

		try {
			const response = await axiosInstance.get("/albums");
			set({ albums:response.data.albums });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},
    fetchAlbumById : async(id)=> {
        set({ isLoading: true, error: null });
        try{
            const response = await axiosInstance.get(`/albums/${id}`);
            set({ currentAlbum: response.data });
            return response.data.album;
        }catch(error:any){
            set({ error: error.response.data.message });
            throw new Error(error.response.data.message);
        }finally{
            set({ isLoading: false });
            

        }

        
    },
    fetchFeaturedSongs: async()=>{
        set({ isLoading: true, error: null });
        try{
            const response= await axiosInstance.get('/songs/featured');
            set({ featuredSongs: response.data.songs });

        }catch(error:any){
            set({ error: error.response.data.message });

        }finally{
            set({ isLoading: false });
        }

    },
   fetchMadeForYouSongs: async()=>{
        set({ isLoading: true, error: null });
        try{
            const response = await axiosInstance.get('/songs/made-for-you');
            set({ madeForYouSongs: response.data });
        }catch(error:any){
            set({ error: error.response.data.message });
        }finally{
            set({ isLoading: false });
        }

    },
    fetchTrendingSongs: async()=>{
        set({ isLoading: true, error: null });
        try{
            const response = await axiosInstance.get('/songs/trending');
            set({ trendingSongs: response.data });
        }catch(error:any){
            set({ error: error.response.data.message });
        }finally{
            set({ isLoading: false });
        }

    },
    


}));