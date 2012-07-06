// ==UserScript==
// @name         AutoTimesheets
// @namespace    
// @version      0.1
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

    var set_days=confirm('Book whole week against "' + my_project_name + '"?' );

    if (set_days == true) { // You clicked "OK"

        // OK
        
    } else {
        
        return;
        
    }

    var goto_week = document.getElementById(goto_week_id);
    
    if (!goto_week) {
        
        alert("ERROR: Can't find " + goto_week_id);
        return;
        
    } else {

        var week = getSelectedText(goto_week_id);
        var index = week.indexOf(":") + 1;
        var days = week.substr(index,1)
            
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
    
    if (!worked) {
        
        alert("ERROR: Can't find TimeWorked");
        return;
        
    }
    else {

        worked.value = days;

    }

}

