//
//  ViewController.swift
//  HN-Client
//
//  Created by Hilal Habashi on 2/9/18.
//

import UIKit

class MainVC: UITabBarController {
      
  // MARK: Enums
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configTabs()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func configTabs() {
        let storiesVC = StoriesVC()
        storiesVC.tabBarItem = UITabBarItem(title: "Stories", image: nil, tag: 0)
        
        let bookmarksVC = BookmarksVC()
        bookmarksVC.tabBarItem = UITabBarItem(title: "Bookmarks", image: nil, tag: 1)
        
        let profileVC = ProfileVC()
        profileVC.tabBarItem = UITabBarItem(title: "Profile", image: nil, tag: 2)
        
        let settingsVC = SettingsVC()
        settingsVC.tabBarItem = UITabBarItem(title: "Settings", image: nil, tag: 3)
    
        let tabBarList = [storiesVC, bookmarksVC, profileVC, settingsVC]
        
        viewControllers = tabBarList
    }


}

