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
    async updatePost(slug,{title,content,featuredImage,status}){//https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.apwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
        } catch (error) {
            console.log("appwrite service:: updatePost error: ",error);
        }
        return null;
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
              config.appwriteDatabaseId,
              config.apwriteCollectionId,
              slug,  
            )
            return true
        } catch (error) {
            console.log("appwrite service:: deletePost error: ",error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.apwriteCollectionId,
                slug,  
            )
        } catch (error) {
            console.log("appwrite service:: getPost error: ",error);
            return false
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.apwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("appwrite service:: getPosts error:",error);
            return false;
        }
    }
    //now file upload serives
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("appwrite service:: uploadFile error:",error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("appwrite service:: deleteFile error:",error);
            return false;
        }
    }
    getFilePreveiw(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId,
        )
    }
    //can  also define more methods overhere
}

const service = new Service()
export default service
