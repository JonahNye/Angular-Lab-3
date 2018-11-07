"use strict";

const editProfile = {
    template: `
    <form ng-submit="$ctrl.edit($ctrl.newInfo)">
        <p>Use the form below to update your profile</p>
        <label>Name</label><input ng-model="$ctrl.newInfo.name">
        <label>Contact</label><input ng-model="$ctrl.newInfo.contact">
        <label>Bio</label><input ng-model="$ctrl.newInfo.bio">
        <button>Update</button>
    </form>
    `,

    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        //when you click button in html it calls below
        vm.edit = (newInfo) => {

            ProfileService.setUserProfile(newInfo); //this will send the object from the input ngmoodels to the service

        };
    }]
}



angular
    .module("App")
    .component("editProfile", editProfile);