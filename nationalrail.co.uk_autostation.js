// thetrainline autostation 1.0
//
// ==UserScript==
// @name           nationalrail.co.uk autostation
// @namespace      http://serfgeek.blogspot.com/
// @description    Fills in stations automagically on www.nationalrail.co.uk
// @include        http://www.nationalrail.co.uk/
// @version        0.1
// ==/UserScript==
//

var from_station = "London St Pancras International";
/*
BEGIN LICENSE BLOCK
Copyright (C) 2013 John Harrison

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

    var o_station = document.getElementById("txtFrom");
    if (!o_station) {
        alert("ERROR: Can't find origin station");
        return;
    }
    else {
        o_station.value = from_station;
    }
    var d_station = document.getElementById("txtTo");
    if (!d_station) {
        alert("ERROR: Can't find destination station");
        return;
    }
    else {
        d_station.value = "Luton";
    }

}
