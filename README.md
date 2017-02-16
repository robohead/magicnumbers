This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Magic Numbers Rolling

> This is just a concept! Not a production ready code!

![Example Gif](https://github.com/Iamthelaw/magicnumbers/blob/master/public/example.gif)

### Description
- There is about 10 000 registered uniq codes in database
- Backend can get random code from this records for about 800ms (and this is a lot)
- Instead of getting rolling codes from real database I am generating them on a fly
- When user hits spacebar he expect to see a winning code and a winner name
- Requests for real winners is called when codes are rolling, not when user hits spacebar

### Fake api
To start express server with fake api run `node fake-api.js`

### ToDo
I have some trouble with syncing between animation and code generation.

### Reqs
- all that in create-react-app
- axios for sending request
- expressjs for serving fake api
- animate.css for animations via cdn
