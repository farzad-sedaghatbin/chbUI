// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-material', 'ionMdInput', 'starter.controllers', 'starter.services', 'tabSlideBox', 'ionic.service.core'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: "TabCtrl"
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })
     .state('tab.friends', {
        url: '/friends',
        views: {
          'tab-dash': {
            templateUrl: 'templates/friends.html',
            controller: 'ProfileCtrl'
          }
        }
      }).state('tab.activity', {
        url: '/activity',
        views: {
          'tab-dash': {
            templateUrl: 'templates/activity.html',
            controller: 'ProfileCtrl'
          }
        }
      }).state('tab.gallery', {
        url: '/gallery',
        views: {
          'tab-dash': {
            templateUrl: 'templates/gallery.html',
            controller: 'ProfileCtrl'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'AppCtrl'
          }
        }
      })


      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })

      .state('tab.challenge', {
        url: '/challenge',
        views: {
          'tab-challenge': {
            templateUrl: 'templates/tab-challenge.html',
            controller: 'NewChallengeCtrl'
          }
        }
      })

      .state('tab.detail', {
        url: '/detail/:challengeId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/challenge-detail.html',
            controller: 'DetailCtrl'
          }
        }
      })


      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })


      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      })


    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/tab/account');
     $urlRouterProvider.otherwise('/login');

  });
