"use strict";

const userProfile = {
    template: `
    <section class="container">
  
        <section class="picture-container">
        <img src="./waldo.png"/>
        </section>
  
        <section class="profile-section">
            <h1> {{$ctrl.info.name}} </h1>
            <p>You may have a hard time finding me @: {{$ctrl.info.contact}}</p>
            <p class="bio-p">Bio: {{$ctrl.info.bio}}</p>
            <a href="#!/edit-profile"><button class="edit-btn"> Edit </button></a>
            
        </section>
    </section>
    `,

    controller: ["ProfileService", function(ProfileService) {
        const vm = this;  //injecting ProfileService into this controller
    
        vm.info = ProfileService.getUserProfile();
    }]
}



angular
  .module("App")
  .component("userProfile", userProfile);