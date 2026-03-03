import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:string,required:true},
    description: {type:string,required:true},
    price: {type:Number,required:true},
    image: {type:string,required:true},
    category: {type:string,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;