const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/dataFromNode")
.then(()=>console.log("connection succesful"))
.catch((err)=>console.log("error is"+err));

const firstschema=new mongoose.Schema(
{
    name:String,
    roll_no:Number
});
const inserting=async ()=>{
    const FirstNodeCollection=new mongoose.model("FirstNodeCollection",firstschema);

    const FirstNodeDocument=new FirstNodeCollection({
    name:"diw",
    roll_no:123
    });
    const result=await FirstNodeDocument.save();
    console.log(result);
};
inserting();
