// ==UserScript==
// @name         Redirect GlobalJIRA/UNIX
// @namespace    https://github.com/johngh
// @version      0.1
// @description  Redirect globaljira/UNIX URLS to jira/UNIX
// @match        http://globaljira.domain.com:8080/browse/UNIX*
// @include      http://globaljira.domain.com:8080/browse/UNIX*
// @copyright    2013+ JohnGH
// ==/UserScript==

var global_url = window.location.href;

var jira_url = global_url.replace(/globaljira/,'jira');

window.location.replace(jira_url);
