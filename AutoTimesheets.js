// ==UserScript==
// @name         AutoTimesheets
// @namespace    https://github.com/johngh/
// @version      1.0
// @description  Fill in timesheets
// @include      http://timesheets/*
// @copyright    2012+, John Harrison
// ==/UserScript==
var delayTime=500;
// Time to wait before submit
// (the number is milliseconds to wait)
// (increase this if the form is submitting to quick for the autofiller to handle
var my_project_name = "11-128 (Support - UNIX)";
var proj_code_id = "ctl00_MainContent_TimeWorked1_dgTimeWorked_ctl03_ddlProjectCode";
var goto_week_id = "ctl00_MainContent_TimeWorked1_ddlGotoWeek";
var worked_days_id = "ctl00_MainContent_TimeWorked1_dgTimeWorked_ctl03_txtDays";
var done_code_id = "ctl00_MainContent_TimeWorked1_dgTimeWorked_ctl03_Label9";
window.addEventListener('load',setTimeout(automagic,delayTime),true);
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    if (elt.selectedIndex == -1)
        return null;
    return elt.options[elt.selectedIndex].text;
}
function find_option_code(select_id,option_text) {

    var select=document.getElementById(select_id);
    for (var i=0;i<select.length;i++) {
        if ( select.options[i].text == option_text ) {
            return select.options[i].value;
        }
    }
}
function automagic() {

    /*
    var button_code= document.createElement('input');
    button_code.setAttribute('type','button');
    button_code.setAttribute('name','editButton');
    button_code.setAttribute('value','Edit');
    button_code.setAttribute('id','editButton');
    outputTbl.getElementsByTagName("tr")[3].getElementsByTagName("td")[3].appendChild(button_code);
    */

    var button_code = "<input type='button' value='Edit' id='editButton'>";

    var outputTbl = document.getElementById('OuterTable');
    outputTbl.getElementsByTagName("tr")[3].getElementsByTagName("td")[3].innerHTML = button_code;
    var edit_button = document.getElementById('editButton');
    edit_button.onclick=function(){fill_form();};
}

function fill_form() {

    // Only try and fill form if it's not been done already.
    var done_code = document.getElementById(done_code_id);
    if (done_code!=null)
        return;    

    var goto_week = document.getElementById(goto_week_id);
    if (typeof goto_week) {
        var week = getSelectedText(goto_week_id);
        var index = week.indexOf(":") + 1;
        var days = week.substr(index,1)
    } else {
        alert("ERROR: Can't find " + goto_week_id);
        return;
    }
    var proj_code = document.getElementById(proj_code_id);
    if (typeof proj_code) {

        var found_project_code = find_option_code(proj_code_id, my_project_name);
        proj_code.value = found_project_code;
    }
    else {
        alert("ERROR: Can't find project code");
        return;
    }
    var worked = document.getElementById(worked_days_id);
    if (typeof worked) {
        worked.value = days;
    }
    else {
        alert("ERROR: Can't find TimeWorked");
        return;

    }
}
