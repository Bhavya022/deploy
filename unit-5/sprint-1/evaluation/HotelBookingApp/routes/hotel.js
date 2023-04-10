const hotelRouter = express.Router() 
const {hotelmodel}=require("../model/hotel") 
hotelRouter.get("/bookings",async(req,res)=>{
  const token = req.headers.authorization;
  const decoded = jwt.verify(token,"booking") 
  try{
  const data = await hotelmodel.find() 
  res.send(data) 
  } 
  catch(err){
    console.log(err) 
  }

})  
hotelRouter.get("/:_id",async(req,res)=>{
    const booking= await hotelmodel.findById(req.params._id) 
    console.log(booking) 
    res.send(booking) 
})

  

hotelRouter.patch("/:_id",async(req,res)=>{
    try{
   const update_booking= await hotelmodel.findByIdAndUpdate(req.params._id,req.body,{new:true}) 
   console.log(update_booking) 
   if(!update_booking){
    res.status(400).send({msg:"booking not found"})
   } 
   else{
    res.send({msg:"booking updated successfully"})
   }
    } 
    catch(err){
        console.log(err)
    }
}) 
hotelRouter.delete("/:_id",async(req,res)=>{
    try{
  const delete_booking = await hotelmodel.findByIdAndDelete(req.params._id) 
  console.log(delete_booking) 
  if(!delete_booking){
    res.status(400).send({msg:"booking not found"})
  } 
  else{
    res.status(200).send({msg:"booking deleted"})
  }
    } 
    catch(err){
        res.status(500).send({err:err.msg})
    }
}) 
//retrieve all booking within a given date range 

hotelRouter.get("/date-range",async(req,res)=>{
    try{
  const {checkin_date,checkout_date}=req.query 
  const booking = await hotelmodel.aggregate([{
    $match:{checkin_date:{$gte:new Date(checkin_date)},
  checkout_date:{$lte:new Date(checkout_date)}
}
  }]) 
  res.json(booking)
    } 
    catch(err){
        res.json({msg:err})
    }
})

hotelRouter.post("/book",async(req,res)=>{
    const {guest_name,checkin_date,checkout_date,room_number,room_type}=req.body 
    try{
        const alreadyBooked = await hotelmodel.find({guest_name,checkin_date,checkout_date,room_number,room_type}) 
        if(alreadyBooked.length>0){
            res.status(400).send({"msg":"This room is not available"}) 
        } 
        else{
            const booking = new hotelmodel(req.body) 
            await booking.save() 
            res.status(200).send({"msg":"Booking confirmed"})
        }
    } 
    catch(err){
        res.status(400).send({"msg":err.msg}) 
    }
}) 


module.exports={hotelRouter} 