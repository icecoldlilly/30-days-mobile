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
    - [react-native-youtube-clone](<https://github.com/JohnProg/react-native-youtube-clone/>)
- Messenger
    - [react-native-gifted-chat](<https://github.com/FaridSafi/react-native-gifted-chat>)
- Utilities
    - Time formatting: [moment.js](<https://github.com/moment/moment/>)
- Host Server
    - [Firebase](https://firebase.google.com)
    - [react-native-firebase](<https://github.com/invertase/react-native-firebase>)
- Real-time sockets
    - [react-pubnub](<https://github.com/pubnub/react>)

## Day 1
### Building base and choosing UI kit

1.  ~~Setup base~~
2.  ~~Add simple buttons~~
3.  ~~Choose React Native UI Kit~~

## Day 2
### Scaffolding basic components
1. ~~Scaffold basic chat component~~
2. ~~Style button components~~
    - Faced a [problem](<https://github.com/react-native-training/react-native-elements/issues/868>) with icons in buttons
3. ~~Scaffold basic YouTube component~~
    - ~~Add YouTube API~~
        - 🛑 (Changed later) ~~Borrowed Node.js implementation for google-auth-library, googleapis~~ 

## Day 3
### Working on components and introduction to 12-factors methodology
1. ~~Refactor smaller parts of Screens into Components~~
2. ~~Created Messenger components: Contacts & Message~~
        - ~~Scaffold a simple Message component using Gifted-Chat~~
        - ~~Pass data as props to Message component from screen~~
        - Scaffold a contact list component
3. Created YouTube components: List & Player
        - ~~Scaffold a simple YouTube player component using [WebView](<https://reactnativecode.com/embed-youtube-video-example/>)~~
        - ~~Pass data as props to YouTube player component from screen~~
4. Added API keys into .env using 'react-native-dotenv'
## Day 4
### Finished scaffolding a rough draft of YouTube screen
1. Complete scaffolding YouTube Component
    - ~~Scaffold a video list component~~
        - ~~Scaffold common Search Bar~~
        - ~~Scaffold video list item~~
    - Make YouTubeScreen handle delegation between video list and player
        - ~~Insert list UI and search bar into YouTubeScreen~~
            - Fixed [time formatting](<https://medium.com/@andreecy/date-format-using-momentjs-locale-in-react-native-cc6dcffc85d3>) using 'moment.js'
        - ~~Build Modal navigation from VideoListUI to PlayerUI~~
        - Accept params from YouTubeScreen when Navigating to PlayerUI
    - **Styling Note**
        1. Place components inside viewports (<View>)
        2. Set flex ratio based on desired size (bigger component has higher number, i.e 'flex:5' and 'flex:1')
        3. Make sure there's no 'justifyContent' or 'alignItems' set for the viewports

## Day 5
### Modularity of components
1. ~~Scaffold Authentication Screen~~
2. ~~Scaffold Settings Screen~~
    - Country Picker will appear here for YouTube featured choices
3. ~~Reorganize navigation stack structure~~
    - ~~Encapsulate navigation relating to main screen into MainScreenNavigator~~
    - ~~Use App.js to strictly navigate between AuthScreen and MainScreenNavigator~~
4. ~~Fixed YouTube player~~ Still need to be able to have 2-way communication with player 💔


## Day 6
### Intro to WebSockets - Delayed
1. Add Video Sync through WebSockets
    - First user to click `Watch Together` => Button turns Green and text changes to `Host`
        - Video is being sync'd from them
        - Long press switches the control to the other user
    - Second user to click `Watch Together` => Button turns Blue and text changes to `Guest`
        - Video is being controlled by `Host`
        - Regular press does nothing
        - (Optional) Long press sends and alert saying: `Switch video please` to Host

## Day 7
### Ejection
1. Eject project to vanilla React-Native 
    - Performance sucks
    - Simulation sucks &rightarrow; no more QR codes for testing
2. Install React-Native-YouTube
    - Too many steps to get working
3. Time to find new framework
    -   ~~NativeScripts~~ Gave up on it since it's still being tested 💔
    -   IF NOT &rightarrow; go native (Swift, Kotlin)
4. Removed messenger option from screen; Project ended due to limitations of ExpoKit and inefficieny of React