// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var db;
var app = angular.module('starter', ['ionic', 'ngCordova', 'chart.js'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (window.cordova) {
      alert('dari android');
      db = $cordovaSQLite.openDB({name:"hsn.db"});
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user(id_user integer primary key, username text, password text)");
      alert(db);
    }else{
      //alert('dari browser');
      db = window.openDatabase("hsn.db", "1.0", "hsn", 2 * 1024 * 1024);
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS user(id_user integer primary key, username text, password text)");
    }
  });
});