const http=require("http");
const server=http.createServer((req,res)=>
{
    if(req.url=='/')
    res.end("hello i am hearing you");
    else
    {
        res.writeHead(404,{"content-Type":"text/html"});
        res.end("<h2>Sorry i am not listening youu</h2>");
    }
});

server.listen(8000,"127.0.0.1",()=>
{
    console.log("succesfully listening");
});