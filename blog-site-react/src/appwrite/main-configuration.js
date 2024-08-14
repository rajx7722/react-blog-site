import config from '../config/config'
import {Client,Account,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client();
    databses;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            this.databases=new Databases(this.client);
            this.bucket = new Storage(this.client);
    }
    async createPost ({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.apwriteCollectionId,
                slug, //can also write ID.unique
                {//all other data to be passed as an object
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )

        } catch (error) {
            console.log("Appwrite service: createPost error:",error);
        }
        return null;
    }
    async updatePost(slug,{title,content,featuredImage,status}){//https://appwrite.io/docs/references/cloud/server-nodejs/databases
        try {
            
        } catch (error) {
            console.log("appwrite service:: updatePost error: ",this.updatePost);
        }
        return null;
    }
}

const service = new Service()
export default service
