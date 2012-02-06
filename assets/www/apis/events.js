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

// IMPORTANT: see device.js for document.addEventListener() for each event
var onSearchKeyDown = function() {
    console.log("searchbutton event fired");
    $('#eventOutput').html('<span id="searchbuttontext" style="color:#28b;"><code>searchbutton</code> fired</span>');
    $('#searchbuttontext').fadeOut(1500, function(){});
};
var onMenuButtonDown = function() {
    console.log("menubutton event fired");
    $('#eventOutput').html('<span id="menubuttontext" style="color:#2b8;"><code>menubutton</code> fired</span>');
    $('#menubuttontext').fadeOut(1500, function(){});
};
var onEventFired = function() {  // generic logging event handler
    console.log("an event fired");
};
// IMPORTANT: see device.js for document.addEventListener() for each event
