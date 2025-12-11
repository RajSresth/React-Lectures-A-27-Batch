export const globalMiddleware =  (req,res,next) =>
                        {
                            console.log("Global Middleware..!");
                            next();
                        } 

export const globalErrorMiddleware = (err,req,res,next)=>{
    console.log("err:",err.message);
    res.status(500).send("Something went wrong..!");
}
