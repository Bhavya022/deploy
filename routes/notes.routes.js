const express=require("express") 
const notesRouter=express.Router() 
const {NotesModel}=require("../model/notes.model")
notesRouter.get("/",async(req,res)=>{
try{
const notes = await NotesModel.find()
res.status(200).send(notes)
}
catch(err){
res.status(400).send("not fetch notes")
}
}) 

notesRouter.post("/add",async(req,res)=>{ 
    try{
 const note=new NotesModel(req.body)  
 await note.save() 
 res.status(200).send("notes added") 
    } 
    catch(err){
res.status(400).send("notes not added")
    }
}) 

notesRouter.patch("/update/:noteID",async(req,res)=>{
const noteID=req.params.noteID
    try{
    const notes=new NotesModel.findByIdAndUpdate({_id:noteID},req.body,{new:true}) 
await notes.save() 
res.status(200).send("Updated successfully")
} 
catch(err){
    res.status(400).send("not updated")
}
})  
notesRouter.delete("/delete/:noteID",async(req,res)=>{
    try{
       const deleted_notes= await NotesModel.findByIdAndDelete(req.params.noteID) 
        console.log(deleted_notes)  
        if(!deleted_notes){
            res.status(404).send({msg:"notes not found"})
        } 
        else{
            res.status(200).send({msg:"notes deleted successfully"})
        }
    } 
    catch(err){
     res.status(500).send({err:err.message})
    }
    })  


module.exports={notesRouter}