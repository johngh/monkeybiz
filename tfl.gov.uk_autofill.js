// tfl autofill 1.0
//
// ==UserScript==
// @name           tfl.gov.uk autofill
// @namespace      http://serfgeek.blogspot.com/
// @description    Fills in fields automagically on tfl.gov.uk
// @include        http://journeyplanner.tfl.gov.uk/user/XSLT_TRIP_REQUEST2?language=en
// ==/UserScript==
/*
BEGIN LICENSE BLOCK
Copyright (C) 2009 John Harrison
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You can download a copy of the GNU General Public License at
http://www.gnu.org/licenses/gpl.html
or get a free printed copy by writing to the Free Software Foundation,
Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
END LICENSE BLOCK */
var delayTime=500;
// Time to wait before submit
// (the number is milliseconds to wait)
// (increase this if the form is submitting to quick for the autofiller to handle
window.addEventListener('load',setTimeout(automagic,delayTime),true);
function automagic() {
    var s_point = document.getElementById("startpoint");
    if (!s_point) {
        alert("ERROR: Can't find origin point");
        return;
    }
    else {
        s_point.value = "Bank Station";
    }
    var e_point = document.getElementById("endpoint");
    if (!e_point) {
        alert("ERROR: Can't find destination point");
        return;
    }
    else {
        e_point.value = "Kings Cross St Pancras";
    }
    // var f_addr = document.getElementById("from-address");
    // if (!f_addr) {
    //    alert("ERROR: Can't find Address radio button");
    //    return;
    // }
    // else {
    //    f_addr.checked = true;
    // }
}
