"use strict";

function ProfileService($location) {
  const self = this;
    self.userProfile = {
        name: "Waldo",
        contact: "Waldo@search.net",
        bio: "My friends say I tend to blend into crowds, but that doesn't mean I am not an interesting guy."
    }

    self.getUserProfile = () => {
        console.log(self.userProfile);
        return self.userProfile;
    }

    self.setUserProfile = (newInfo) => {
        self.userProfile = angular.copy(newInfo)
        $location.path("/user-profile");
    }


}


angular
  .module("App")
  .service("ProfileService", ProfileService);