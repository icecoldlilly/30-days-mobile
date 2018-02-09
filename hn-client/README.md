# Hacker News Client
Look at [FEATURES.md](./FEATURES.md) for more explaination about, whats going to be built here.

Libraries needed:
  - Global state manager &rightarrow; (RxSwift, PromiseKit)
  - Layout Kit &rightarrow; [SnapKit](https://github.com/SnapKit/SnapKit)
  - Firebase (for connection w/ Hacker News API)
    - Can use [native library](https://github.com/firebase/firebase-ios-sdk)
    - OR [Moya](https://github.com/Moya/Moya) + [Nora](https://github.com/SD10/Nora)
  - Cells for comments
  - Text box for content creation
  - Log Handling &rightarrow; [Umbrella](https://github.com/devxoul/Umbrella)
  - Credits @ Settings Page &rightarrow; [OpenSourceController](https://github.com/floriangbh/OpenSourceController)
What's going to be built:
  - Cells
  - Table
    - http://swiftythings.com/2017/07/01/uitables-programmatically-in-swift-4/
  - Reader View

## Day 1 - Basic setup

- Basic setup done
- Installed Cocoapods
- Scaffolded basic screens
- Scaffolded Tab View Controller