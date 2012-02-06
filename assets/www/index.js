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

$(document).ready(function() {   
    $('.api-div').hide();
    $('.api-div#api-intro').show();
    
    $('#intro').click(function(event) {
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);            
    });
    
    $('div ul li a').click(function(event) {
        event.preventDefault();
        //alert('clicked : ' + $(this).attr('href'));
        var attrhref = $(this).attr('href');

        if (attrhref.indexOf("#api-") !== 0) {
            return;
        }
        
        // hide all div's, show only this one
        $('.api-div').hide();
        $(attrhref).show();

        // if small screen and portrait - close after tap
        var disp = $('ul #listdivider').css("display");
        //alert(disp + ' : ' + attrhref);
        if (disp === 'none') {
            $('div.ui-collapsible').trigger("collapse");
        } else {
            $.mobile.silentScroll(0);            
        }
    }); 
    
    $('#listdivider').click(function() {
        event.preventDefault();
        $('.api-div').hide();
        $('.api-div#api-intro').show();
        $.mobile.silentScroll(0);
    });
});
