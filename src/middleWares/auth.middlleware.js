import jwt from "JsonWebToken";


export function isAuth(req, res, next ){
    const token = req.headers.authorization;
    try {
        const user = jwt.verify(token, process.env.JWT_KEY);
        req.user = user;
    } catch (error) {
      return  res.status(401).json({error:"not authorized"})
    }
    next();


}

//__________________________ needs update _____________________

export function isAdmin(req, res, next ){
    const token = req.headers.authorization;
    try {
        const user = jwt.verify(token, process.env.JWT_KEY);
        if(!user.isAdmin){
            return res.status(401).json({error:"u r not authorized"});
        }
        req.user = user;
    } catch (error) {
      return  res.status(401).json({error:"not authorized"})
    }
    next();
//______________________________________________________________

}