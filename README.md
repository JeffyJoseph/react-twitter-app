## README

I have used Twit to get through the authentication. For the access key and consumer keys I used my personal tokens and hence have not included those in here(.env) as it exposes my credentials.
However, to make it easier for you I have attched the .env file to replace if the hosted url doesn't work. I just created developer twitter account only for this project and as a matter of safety, i will delete the account once code is reviewed and processes are done.

# To make the app up and running locally

unzip the file and put in a local directory
run 'npm install' 
replace the .env in the react-twitter-app directory with the one attached in the email
run 'npm start'
Navigate to local server 5000

# hosted website url
https://react-twitter-app.herokuapp.com/

## approach taken
I have tried to include all basic functionalities:
    UI layout
    Set up node js server to avoid CORS issue and for accessing Twitter API (used Twit to get pass through authentication)
    Integrate back end data to UI
    Search and filter based on search params 
    Drag & drop tweets to save in local storage.
    UI is responsive


## If am given more time:
Implement redux to store the state as single truth source
Include Utils file to make code look cleaner and more loosely coupled
Implement scrolls, sorting as mentioned also some more beautification
Do extra validations like messages when same tweet is tried to save or message to show when no valid responses are there (already i am filtering out duplicate additions to the list)
Could arrange the backend code more (.env set up is done)


