/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.
 * This software is available under the MIT License:
 * The MIT License
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function onBackbutton() {
    // the intro div is considered home, so exit if use
    // wants to go back with button from there
    if ($('.api-div#api-intro').css('display') === 'block') {
        // Use the following for AppLaud Eclipse or AppLaud Cloud Download-App-to-Device
        //console.log("Exiting app");
        //navigator.app.exitApp();

        // Use the following for AppLaud Cloud Project Run
        document.removeEventListener("backbutton", onBackbutton, false);        
        navigator.app.backHistory();
    } else {    
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);
    }
}
var onDeviceReady = function() {
    console.log("deviceready event fired");
    // api-device
    // ***IMPORTANT: access device object only AFTER "deviceready" event    
    document.getElementById("name").innerHTML = device.name;
    document.getElementById("pgversion").innerHTML = device.phonegap;
    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("version").innerHTML = device.version;
    // screen information  ***Not necessary to wait for deviceready event
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("availwidth").innerHTML = screen.availWidth;
    document.getElementById("availheight").innerHTML = screen.availHeight;
    document.getElementById("colorDepth").innerHTML = screen.colorDepth;  
    
    // api-events - see events.js for handler implementations
    // ***IMPORTANT: add event listeners only AFTER "deviceready" event    
    document.addEventListener("searchbutton", onSearchKeyDown, false);   
    document.addEventListener("menubutton", onMenuButtonDown, false);
    document.addEventListener("pause", onEventFired, false);
    document.addEventListener("resume", onEventFired, false);
    document.addEventListener("online", onEventFired, false);
    document.addEventListener("offline", onEventFired, false);
    // using callback for backbutton event may interfere with normal behavior
    document.addEventListener("backbutton", onBackbutton, false);
    document.addEventListener("batterycritical", onEventFired, false);
    document.addEventListener("batterylow", onEventFired, false);
    document.addEventListener("batterystatus", onEventFired, false);
    document.addEventListener("startcallbutton", onEventFired, false);
    document.addEventListener("endcallbutton", onEventFired, false);
    document.addEventListener("volumedownbutton", onEventFired, false);
    document.addEventListener("volumeupbutton", onEventFired, false);
    
    // api-camera  Photo URI
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
       
    // The Samsung Galaxy Tab 10.1 is currently the only device known to
    // support orientation/change correctly and reliably.
    if (device.name === "GT-P7510") {
        var updateScreen = function() {
            document.getElementById("width").innerHTML = screen.width;
            document.getElementById("height").innerHTML = screen.height;
            document.getElementById("availwidth").innerHTML = screen.availWidth;
            document.getElementById("availheight").innerHTML = screen.availHeight;        
        };         
        window.addEventListener("orientationchange", function(e){
            //console.log("window.orientation: " + window.orientation);
            updateScreen();
        }, false);
    }
};

function init() {
    document.addEventListener("deviceready", onDeviceReady, true);
}
