import config from '../config/config'
import {Client,Account,ID} from "appwrite";

export class Authservice{
    client = new Client()
    account;

    constructor(){ //client's setendpoint and setproject comes from the documentation:"https://appwrite.io/docs/products/auth/email-password"
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account =new Account(this.client);//The Account class is part of the Appwrite JavaScript SDK and is used to interact with user accounts, allowing you to create, authenticate, and manage users.
    }
    async createAccount({email,password,name}){
        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name); 
            if(userAccount){
                //direct login fn
                return this.login({email,password})
                 }
            else{
                return userAccount;}
             }
        catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser({}){
        try {
           return await this.account.get()//how to remember all these fns? dont remember ,
           // read docs of apprwite in the link given in above comment , see in account for this line
        } catch (error) {
            console.log("apprwrite service::getCurrentUser: error:",error);
            //could also have just used throw error like above
        }
     return null;//if there was no console.log and there was throw then no use of this line
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service::logout:error:",error);
        }
        return null;
    }
}





const authservice =new Authservice();
export default authservice;