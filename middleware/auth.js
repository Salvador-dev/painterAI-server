import * as dotenv from 'dotenv';

dotenv.config();

const checkAuth = (req, res, next) => {

    const tokenAuth = req.header('TokenAuth')

    // const auth = { login: environment.AuthBasicApi.user, password: environment.AuthBasicApi.pass }

    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if (tokenAuth && tokenAuth != '' && tokenAuth != null && tokenAuth != undefined) {

        if (process.env.AUTH === tokenAuth) {
            return next()

        } else {
            return res.status(401).send("Invalid Token");
        }
    } else {
        return res.status(403).send("A token is required for authentication");
    }


    // Verify login and password are set and correct
    // if (login === auth.login && password === auth.password) {
    //     // Access granted...
    //     if(tokenAuth && tokenAuth!='' && tokenAuth !=null && tokenAuth !=undefined){

    //         if(process.env.AUTH === tokenAuth){
    //         Pase = true;
    //         return next()

    //         }else{
    //         return res.status(401).send("Invalid Token");
    //         }
    //     }else{
    //     return res.status(403).send("A token is required for authentication");
    //     } 
    // }else{
    //     return res.status(403).send("Auth Incorrect");
    // }
}

export default checkAuth;