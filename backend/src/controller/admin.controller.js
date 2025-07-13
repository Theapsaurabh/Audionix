
import {Song} from "../models/song.model.js"
import {Album} from "../models/album.model.js"
import cloudinary from "../lib/cloudinary.js"
// helper for cloudinary upload
const uploadToCloudinary= async(file)=>{
    try{
        const result= await cloudinary.uploader.upload(file.tempFilePath,{
            resource_type: "auto"
        })
        return result.secure_url


    }catch(error){
        console.log("Error in uploadToCloudinary",error)
        throw new Error("Error uploading to cloudinary");

    }

}
export const createSong= async (req,res,next)=>{
   try{
    if(!req.file || !req.file.audioFile || !req.files.imageFile){
        return res.status(400).json({
            message: "Please Upload all File"
        })

    }
    const {title, artist, albumId, duration}= req.body
    const audioFile= req.files.audioFile
    const imageFile= req.files.imageFile

    const  audioUrl= await uploadToCloudinary(audioFile);
    const imageUrl= await uploadToCloudinary(imageFile);


    const song= new song({
        title, 
        artist,
        audioUrl,
        imageUrl,
        duration,
        albumId: albumId || null
    })
    await song.save()
    // if songs belongs to album please update album song array



    if(albumId){
        await albumId.findByIdAndUpdate(albumId,{
            $push: {song: song._id},

        })
    }
    res.status(201).json({
        song
    })

   }catch(error){
    console.log("Error is createSong", error);
    next(error);

   }
}
export const deleteSong= async(req,res,next)=>{
    try {
        const {id}= req.params

        const song= await Song.findById(id)
        // if songs belongs to albums then update the albums array
        if(song.albumID){
            await Album.findByIdAndUpdate(song.albumID,{
                $pull: {songs: song._id},
        })
        }
        await Song.findByIdAndDelete(id);
        res.status(200).json({
            message:"Song deleted successfully"
        })

    } catch (error) {
        console.log("Error in deleting song", error)
        next(error)
        
    }

}

export const createAlbum= async(req,res,next)=>{
try{
    const {title,artist, releaseYear}= req.body
    const {imageFile}= req.file
    const imageUrl= uploadToCloudinary(imageFile)
    const album= new album({
        title,
        artist,
        imageUrl,
        releaseYear
    })
    await album.save()
    res.status(201).json(album)

}catch(error){
    console.log("Error in createAlbum", error)
    next(error);

}
}
export const deleteAlbum= async(req,res,next)=>{
    try {
        const{id}= req.params
        await Song.deleteMany({albumID:id})
        await album.findByIdAndDelete(id);
        res.status(200).json({message:"Album deleted successfully"})
        
    } catch (error) {
        console.log("Error in deleting album", error);
        next(error)
        
    }
    
}

export const checkAdmin= async(req,res,next)=>{
    res.status(200).json({
        admin:true,
       
    })
}