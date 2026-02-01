import Note from "../models/note_model.js";

export const createNote =async(req, res) => {
 try{
const {title, content} = req.body;
if(!title || !content){
 return res.status(400).json({message: "all fields are required"});
}
const newNote = new Note({title, content})
await newNote.save();
res.status(201).json(newNote);
 } catch (error){
res.status(500).json({message: "something went wrong"});   
 }
};

export const getNotes =async(req, res) => {
 try{
const notes = await Note.find().sort({createdAt: -1});
res.status(200).json(notes);
 } catch (error){
res.status(500).json({message: "something went wrong"});   
 }
};  

export  const updateNote = async(req,res) => {
    try {
        const {title , content} = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true});
        if(!updateNote){
            return res.status(404).json({message:"Note is not updated"});
        }
    } catch (error) {
        res.status(500).json({message: "something went wrong"})
    }
}

export const deleteNote = async(req,res) =>{
    try{
const deleteNote = await Note.findByIdAndDelete(req.params.id);
if(!deleteNote){
    return res.status(404).json({message:"Note not found"})
}
res.status(200).json({message:"Note deleted Successfully"})
    }
    catch(error){
 res.status(500).json({message: "something went wrong"})
    }
}