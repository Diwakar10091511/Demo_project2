const fs=require("fs");

const bioData={
    name:"Diwakar",
    age:20,
};
const jsonData=JSON.stringify(bioData);

fs.writeFile("jsonn.json",jsonData,(err)=>
{
    console.log("completed succesfully");
});

fs.readFile("jsonn.json","utf-8",(err,data)=>
{
    console.log(data);
    const oriData=JSON.parse(data);
    console.log(oriData);
});