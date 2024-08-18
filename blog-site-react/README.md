**steps and important points i thought of while making this project**
-first we make environment variables.
-always make them in the root of the project
-always start with '.'

**Why Use Environment Variables?**
#Security: Storing sensitive data like API keys or database credentials in environment variables keeps them out of your source code, reducing the risk of accidentally exposing them in version control (e.g., GitHub).
#Configuration: Environment variables allow you to easily change configuration settings without modifying your code. For example, you can use different variables for development, testing, and production environments.
#Portability: Environment variables make it easier to move your code between different environments (e.g., from your local machine to a server or a cloud platform) without changing the code itself.

-.env me export ni karte 
-add this to git ignore
-make another sample file for environment variables
-envariables upon change need the project to be restarted in most cases
-now we wrote log(process.env.REACT_APP_APPWRITE_URL) but it didnt work , as its using the documentation
of create react app , we used vite to build this , so we will use : import.meta.env.REACT_APP_APPWRITE_URL
to access environment variables , never learn , read documentation
-env variable ka naam has to start with VITE_ , its in docs
-made a backend through service appwrite and filled all the env values from there

-**make a config.js why?**
1:Instead of repeatedly referencing import.meta.env throughout your components, you can import config.js and access the necessary configuration values in a clean and consistent way.
2:By storing configuration values (such as URLs, project IDs, and database IDs) in a single file, you make it easier to manage and update them. If you need to change the Appwrite URL or project ID, you only need to do it in one place (config.js), rather than hunting through your entire codebase.

Vendor lockin
Vendor lock-in refers to a situation where a customer becomes dependent on a particular vendor's products or services and finds it difficult to switch to another vendor without substantial costs, effort, or disruption.

-so we have to write in such a way that if the auth has to be removed out of appwrite 
there will be not much problem
-so we introduce concept of services (same in each language)
-so thats why we write async createaccount method  and async login method and more
-now whenever we need to change the backend service like firebase or something then just some tweaks in the code
as per firebase but the frontend will not be affected as it will just know to call the fns whose names will remain
same.
-we can use this same auth,js snippet for all appwrite backewnd auth.js files for other projects

made full appwrite and have done useeffect in app.jsx 
now we make components such as header footer container 
container just contains the css and styling of the page 
made header.jsx and logout button
-now we make a common button so that we can use it anywhere we want 

**imp question :**
Q: use of forward refs in react as example .
Ans: we have login form and have input feild , so if we want to use the state of login.jsx then we use
useRef called forward reference

-now making input.jsx and using this forwardRef
-now making Select.jsx and remember that options is an array
-in Select we'll see the easier way of using forwardRef compared to what we did in input.jsx
-made postcard.jsx
-update index.jsx imports and exports
-write login.jsx and we'll use react-hook-form
-login.jsx me handlesumbit is a method dont ever use it otherwise ki login fn ka naam hi wahi
rakhdiya handlesubmit
-handlesubmit ek method hai(predifined by react-hook-form) jaha apna apna method dete ho ki mai is form ko aise
handle karunga 
always do ...register 

-now make Signup.jsx
done 
-now create authLayout : its a mechanism on how to protect pages or routes , we create a container 