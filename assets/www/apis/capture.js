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

function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Error!');
    $('#capture-result').html("<strong>Error</strong>");
}
function formatError(error) {
    alert("Error getting file format data: " + error.code); 
}

// api-capture
function captureAudioSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        $('#format-data').append("Duration: <strong>" + mediaFile.duration/1000 + "s</strong><br/>");
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        $('#capture-result').html("<strong>" + (i+1) + " files</strong>");
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureAudioSuccess");
}
function captureImageSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        $('#format-data').append("Height: <strong>" + mediaFile.height + "</strong><br/>");
        $('#format-data').append("Width: <strong>" + mediaFile.width + "</strong><br/>");
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        $('#capture-result').html("<strong>" + (i+1) + " file(s)</strong>");
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureImageSuccess");
}
function captureVideoSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        $('#format-data').append("Height: <strong>" + mediaFile.height + "</strong><br/>");
        $('#format-data').append("Width: <strong>" + mediaFile.width + "</strong><br/>");
        $('#format-data').append("Duration: <strong>" + mediaFile.duration/1000 + "s</strong><br/>");
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        $('#capture-result').html("<strong>" + (i+1) + " files</strong>");
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureMediaSuccess");
}

//api-capture   Capture Audio
function captureAudio() {
    $('#format-data').empty();
    $('#capture-result').empty();
    navigator.device.capture.captureAudio(captureAudioSuccess, captureError, {limit: 1});
}

// api-capture  Capture Image
function captureImage(){
    $('#format-data').empty();
    $('#capture-result').empty();
    navigator.device.capture.captureImage(captureImageSuccess, captureError, {limit: 1});    
}
// api-capture  Capture Video
function captureVideo(){
    $('#format-data').empty();
    $('#capture-result').empty();
    navigator.device.capture.captureVideo(captureVideoSuccess, captureError, {limit: 1});    
}
