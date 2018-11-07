"use strict";

const userProfile = {
    template: `
    <section class="container">
  
        <section class="picture-container">
        <img src="./Wheres-Wally.jpg"/>
        </section>
  
        <section class="profile-section">
            <h1>Name: {{$ctrl.info.name}}</h1>
            <p>You may have a hard time finding me @: {{$ctrl.info.contact}}</p>
            <p>Bio: {{$ctrl.info.bio}}</p>
            <a href="#!/edit-profile" class="edit"> Edit </a>
        </section>
    </section>
    `,

    controller: ["ProfileService", function(ProfileService) {
        const vm = this;

        vm.info = ProfileService.getUserProfile();
    }]
}



angular
  .module("App")
  .component("userProfile", userProfile);