angular.module('starter.controllers', [])

  .controller('DetailCtrl', function ($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, HttpService) {
    $scope.showHeader();
    $scope.clearFabs();
    $scope.isExpanded = false;
    $scope.setExpanded(false);
    $scope.setHeaderFab(false);
    $scope.challengeDate="November 05, 1955";
    // Set Motion
    $timeout(function() {
      ionicMaterialMotion.slideUp({
        selector: '.slide-up'
      });
    }, 300);

    $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);
    HttpService.getStream()
      .success(function (response) {
        $scope.challenge = response;

        div=ionicMaterialInk.displayEffect("videoHolder");
        $buffer="<video id='my-video' class='video-js' controls autoplay='true' preload='auto' width='640' height='264'poster='";
        $buffer+=scope.challenge.thumbnail+"' data-setup='{}'>";
        $buffer+="<source src='"+$scope.challenge.stream+"' type='video/mp4'></video> ";

      });

    // Set Ink

        div.innerHTML=$buffer;
    ionicMaterialInk.displayEffect();

  })

  .controller('TabCtrl', function ($scope, $stateParams,$ionicModal, $ionicPopover, $timeout) {
      // Form data for the login modal
      $scope.loginData = {};
      $scope.isExpanded = false;
      $scope.hasHeaderFabLeft = false;
      $scope.hasHeaderFabRight = false;

      var navIcons = document.getElementsByClassName('ion-navicon');
      for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
          this.classList.toggle('active');
        });
      }

      ////////////////////////////////////////
      // Layout Methods
      ////////////////////////////////////////

      $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
      };

      $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
      };

      $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
          if (content[i].classList.contains('has-header')) {
            content[i].classList.toggle('has-header');
          }
        }
      };

      $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
      };

      $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
          case 'left':
            hasHeaderFabLeft = true;
            break;
          case 'right':
            hasHeaderFabRight = true;
            break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
      };

      $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
          if (!content[i].classList.contains('has-header')) {
            content[i].classList.toggle('has-header');
          }
        }

      };

      $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
      };

      $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
      };

      $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
          fabs[0].remove();
        }
      };
  })



  .controller('AppCtrl', function ($scope, HttpService, $ionicLoading) {
    $ionicLoading.show({
      template: 'Loading...'
    });
    HttpService.getPost()
      .success(function (response) {
        $scope.top = response;

        j = 0;
        container = document.getElementById("container");
        for (i in $scope.top.tabs) {
          var swiperContainer = document.createElement("div");
          swiperContainer.className = "swiper-container" + j++;
          ;

          var swipperwrapper = document.createElement("div");
          swipperwrapper.className = "swiper-wrapper";

          swiperContainer.appendChild(swipperwrapper);
          for (k in $scope.top.tabs[i].items) {
            $buff = $scope.top.tabs[i].items[k];
            var innerSwipper = document.createElement("div");
            innerSwipper.className = "swiper-slide";
            $tempbuf = '<ion-item class="item-thumbnail-top item item-complex" href="#/tab/detail/' + $buff.id;
            $tempbuf += '"> <a class="item-content" ng-href="#/tab/detail/' + $buff.id;
            $tempbuf += '" href="#/tab/detail/' + $buff.id;
            $tempbuf += '" > <img src="' + $buff.img;
            $tempbuf += '"/><h2> ' + $buff.name;
            $tempbuf += '</h2> <p>' + $buff.rating;
            $tempbuf += '</p> </a></ion-item>';
            innerSwipper.innerHTML = $tempbuf;
            swipperwrapper.appendChild(innerSwipper);
          }
          container.appendChild(swiperContainer);
        }
        loadSwiperT($scope.top);

        $ionicLoading.hide();
      });


  })

  .controller('DashCtrl', function ($scope) {
    var swiperDiv = document.getElementById('bbb');
      for (i = 0; i < 10; i++) {
      var innerSwipper = document.createElement("div");
      innerSwipper.className = "swiper-slide";
      innerSwipper.innerHTML = '<ion-item class="item-thumbnail-top item item-complex" href="#/tab/detail/1"> <a class="item-content" ng-href="#/tab/detail/1" href="#/tab/detail/1"> <img class="item-round-img" src="https://s3.eu-central-1.amazonaws.com/challengebox/a.jpg"> <h2>sib khori</h2> <p>sib gonde bokhor</p> </a></ion-item>';
      swiperDiv.appendChild(innerSwipper);
    }
    var swiperDiv = document.getElementById('bbb1');
    for (i = 0; i < 10; i++) {
      var innerSwipper = document.createElement("div");
      innerSwipper.className = "swiper-slide";
      innerSwipper.innerHTML = '<ion-item class="item-thumbnail-top item item-complex" href="#/tab/detail/1"> <a class="item-content" ng-href="#/tab/detail/1" href="#/tab/detail/1"> <img class="item-round-img" src="https://s3.eu-central-1.amazonaws.com/challengebox/a.jpg"> <h2>sib khori</h2> <p>sib gonde bokhor</p> </a></ion-item>';
      swiperDiv.appendChild(innerSwipper);
    }

    loadSwiper();
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    var currentStart = 0
    $scope.items = []


    $scope.addItems = function() {
      for (var i = currentStart; i < currentStart+20; i++) {
        $scope.items.push("Item " + i)
      }

      currentStart += 20
    }

    $scope.addItems();
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    $scope.showHeader();
    $scope.clearFabs();
    $scope.isExpanded = false;
    $scope.setExpanded(false);
    $scope.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
      ionicMaterialMotion.slideUp({
        selector: '.slide-up'
      });
    }, 300);

    $timeout(function() {
      ionicMaterialMotion.fadeSlideInRight({
        startVelocity: 3000
      });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
  })

  .controller('NewChallengeCtrl', function ($scope) {
    $scope.settings = {}
  })

  .service('HttpService', function ($http) {
    return {
      getPost: function () {
        // $http returns a promise, which has a then function, which also returns a promise.
        return $http.post('http://127.0.0.1:8080/rest/service/topChallenge')
          .success(function (response) {
            // In the response, resp.data contains the result. Check the console to see all of the data returned.
            console.log('Get Post', response);
            return response.data;
          });
      },
      getStream: function (id) {
        // $http returns a promise, which has a then function, which also returns a promise.
        var fd = new FormData();
        fd.append("id",id)
        console.log('http');
        $http.post("http://127.0.0.1:8080/rest/service/getStream", fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        })
          .success(function (response) {
            // In the response, resp.data contains the result. Check the console to see all of the data returned.
            console.log('Get Post', response);
            return response.data;
          });
      }
    };
  })

  .directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }])

  .service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl,scope) {
      var fd = new FormData();
      fd.append('Archivefile', file);
      fd.append("title",scope.form.title)
      fd.append("description",scope.form.description)
      fd.append("Type",scope.form.Type)
      fd.append("fileType",file.type)
      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
        .success(function () {
        })
        .error(function () {
        });
    }
  }])
  .controller('FormCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){

    $scope.uploadFile = function(){
      var file = $scope.myFile;
      console.log('file is ' );
      console.dir(file);
      var uploadUrl = "http://127.0.0.1:8080/rest/service/newChallenge";
      fileUpload.uploadFileToUrl(file, uploadUrl,$scope);
    };

  }])

    .controller('loginCtrl', function($scope) {

    })

    .controller('signupCtrl', ['$scope','$location', 'doSignUpService', function($scope, doSignUpService){

    $scope.doSignUp = function(){
      var signUpUrl = "http://127.0.0.1:8080/rest/service/signup";
      console.log('do sign up '+$scope.form.name+' '+$scope.form.lastname+' '+$scope.form.email+' '+$scope.form.username+' '+$scope.form.password);

        doSignUpService.signUp( signUpUrl,$scope,$location);

    };

    }])


  .service('doSignUpService', ['$http','$location', function ($http) {
    this.signUp = function ( signupUrl,scope,$location) {
      var fd = new FormData();
      fd.append("name",scope.form.name);
      fd.append("lastname",scope.form.lastname);
      fd.append("email",scope.form.email);
      fd.append("password",scope.form.password);
      fd.append("username",scope.form.username);
      console.log('http');
      $http.post(signupUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
        .success(function () {
          console.log('succ');
          $location.path("/dash");

        })
        .error(function () {
          console.log('err');
        });
    }
  }])

  .controller('signinCtrl', ['$scope','$location', 'doSigninService', function($scope,$location, doSigninService){

    $scope.doSignIn = function(){
       var signInUrl = "http://127.0.0.1:8080/rest/service/checkuser";
      console.log('do sign in '+$scope.form.username+' '+$scope.form.password);

      doSigninService.signIn( signInUrl,$scope,$location);
      $scope.username="farzad";
    };

  }])


  .service('doSigninService', ['$http','$location', function ($http) {
    this.signIn = function ( signinUrl,scope,location) {
      var fd = new FormData();
      fd.append("password",scope.form.password)
      fd.append("username",scope.form.username)
      console.log('http');
      $http.post(signinUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
        .success(function () {
          console.log('succ');
          scope.username="farzad";
          location.path('/tab/dash');
        })
        .error(function () {
          console.log('err');

        });
    }
  }])



