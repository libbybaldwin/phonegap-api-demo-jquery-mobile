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

//api-compass
var compassWatch = null;

function updateHeading(h) {
    $('#heading').html(h.magneticHeading);
}
function compassError(error) {
    alert('Compass Error: ' + error.code);
    $('#heading').html("Error");
}
function toggleCompass() {
    if (compassWatch !== null) {
        navigator.compass.clearWatch(compassWatch);
        compassWatch = null;
        updateHeading({ magneticHeading : ""});
    } else { 
        // Compass Options: Android: filter is not supported
        var options = { frequency: 1000 };
        compassWatch = navigator.compass.watchHeading(
                updateHeading, compassError, options);
    }
}
function getCurrentHeading() {
    if (compassWatch !== null) {
        navigator.compass.clearWatch(compassWatch);
        compassWatch = null;
        updateHeading({ magneticHeading : ""});
    }
    navigator.compass.getCurrentHeading(updateHeading, compassError);
}