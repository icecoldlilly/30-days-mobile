# React-Together

### What is it?

A react app that allows you to watch videos (YouTube) together

### Why it's better?

1.  Supports captions (finally can watch KDrama!)

### 🏗 Built on...
- Base
    - [crna](<https://github.com/react-community/create-react-native-app>)
    - [react-navigator](<https://github.com/react-navigation/react-navigation>)
    - [react-native-elements](<https://github.com/react-native-training/react-native-elements>)
    ~~- [native-base](<https://github.com/GeekyAnts/NativeBase>)~~
    - [react-native-dotenv](<https://github.com/zetachang/react-native-dotenv>)
- YouTube
    - [react-native-youtube](<https://github.com/inProgress-team/react-native-youtube>)
    - [google-auth-library, googleapis](https://github.com/google/google-api-nodejs-client/tree/master/samples/youtube)
- Messenger
    - [react-native-gifted-chat](<https://github.com/FaridSafi/react-native-gifted-chat>)
- Host Server
    - [Firebase](https://firebase.google.com)
    - [react-native-firebase](<https://github.com/invertase/react-native-firebase>)
- Real-time sockets
    - [react-pubnub](<https://github.com/pubnub/react>)

## Day 1

1.  ~~Setup base~~
2.  ~~Add simple buttons~~
3.  ~~Choose React Native UI Kit~~

## Day 2

1. ~~Add Chat Component~~
2. ~~Style button components~~
    - Faced a [problem](<https://github.com/react-native-training/react-native-elements/issues/868>) with icons in buttons
3. Add YouTube Component
    - ~~Add YouTube API~~
        - Borrowed Node.js implementation for google-auth-library, googleapis

## Day 3

1. ~~Refactor Screens into Components~~
2. Created Messenger components: Contacts & Message
        - ~~Scaffold a simple Message component using Gifted-Chat~~
        - ~~Pass data as props to Message component from screen~~
        - Scaffold a contact list component
3. Created YouTube components: List & Player
        - ~~Scaffold a simple YouTube player component using [WebView](<https://reactnativecode.com/embed-youtube-video-example/>)~~
        - ~~Pass data as props to YouTube player component from screen~~
4. Added API keys into .env using 'react-native-dotenv'
## Day 4

1. Complete scaffolding YouTube Component
    - Scaffold a video list component
    - Make YouTubeScreen handle delegation between video list and player
2. Scaffold Authentication Screen
3. Scaffold Settings Screen