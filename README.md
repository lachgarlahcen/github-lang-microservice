# backend-coding-challenge
 simple REST microservice that list the languages used by the 100 trending public repos on GitHub.
## Install
    npm istall
## Run the app
    npm start

## operations
- list of languages used by the 100 trending public repos on GitHub(most starred of all time) ✅
- For every language :
    - Number of repos using this language ✅
    - The list of repos using the language ✅
    - Framework popularity over the 100 repos (I didn't figure out how can i get Framework popularity from github api)
## Simple Authentication

### Request
    `POST:localhost:3000/auth`
<img width="1423" alt="Screen Shot 2020-01-19 at 4 23 13 AM" src="https://user-images.githubusercontent.com/44115924/72674237-a78eea80-3a74-11ea-9504-42c01e3c762a.png">

### Response
    `{ auth: true, token: $token }`
## Get list of languages
### Request
    `GET:localhost:3000/language`
### Response
<img width="1426" alt="Screen Shot 2020-01-19 at 4 23 38 AM" src="https://user-images.githubusercontent.com/44115924/72674249-b70e3380-3a74-11ea-8287-ad62f72d3848.png">

#  technologies used in this project
- NODEJS
- EXPRESS
# Contributing
Feel free to contribute
