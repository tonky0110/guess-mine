(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZmUzZjQ2ZGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9sb2dpbic7XG4iXX0=
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector('body');
var loginForm = document.getElementById('jsLogin');
var NICKNAME = 'nickname';
var LOGGED_OUT = 'loggedOut';
var LOGGED_IN = 'loggedIn';
var nickname = localStorage.getItem(NICKNAME);

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var logIn = function logIn(nickname) {
  var socket = io('/');
  socket.emit('setNickname', {
    nickname: nickname
  });
};

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector('input');
  var value = input.value;
  input.value = '';
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener('submit', handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTmFtZSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0IiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsSUFBSUcsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3RCUixFQUFBQSxJQUFJLENBQUNXLFNBQUwsR0FBaUJMLFVBQWpCO0FBQ0EsQ0FGRCxNQUVPO0FBQ05OLEVBQUFBLElBQUksQ0FBQ1csU0FBTCxHQUFpQkosU0FBakI7QUFDQUssRUFBQUEsS0FBSyxDQUFDSixRQUFELENBQUw7QUFDQTs7QUFFRCxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSixRQUFELEVBQWM7QUFDM0IsTUFBTUssTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVQLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNBLENBSEQ7O0FBS0EsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDL0JBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR2hCLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRitCLE1BR3ZCa0IsS0FIdUIsR0FHYkQsS0FIYSxDQUd2QkMsS0FIdUI7QUFJL0JELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQVgsRUFBQUEsWUFBWSxDQUFDWSxPQUFiLENBQXFCaEIsUUFBckIsRUFBK0JlLEtBQS9CO0FBQ0FwQixFQUFBQSxJQUFJLENBQUNXLFNBQUwsR0FBaUJKLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ1EsS0FBRCxDQUFMO0FBQ0EsQ0FSRDs7QUFVQSxJQUFJakIsU0FBSixFQUFlO0FBQ2RBLEVBQUFBLFNBQVMsQ0FBQ21CLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNMb2dpbicpO1xuXG5jb25zdCBOSUNLTkFNRSA9ICduaWNrbmFtZSc7XG5jb25zdCBMT0dHRURfT1VUID0gJ2xvZ2dlZE91dCc7XG5jb25zdCBMT0dHRURfSU4gPSAnbG9nZ2VkSW4nO1xuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuXHRib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuXHRib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcblx0bG9nSW4obmlja25hbWUpO1xufVxuXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuXHRjb25zdCBzb2NrZXQgPSBpbygnLycpO1xuXHRzb2NrZXQuZW1pdCgnc2V0Tmlja25hbWUnLCB7IG5pY2tuYW1lIH0pO1xufTtcblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblx0Y29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG5cdGlucHV0LnZhbHVlID0gJyc7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XG5cdGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuXHRsb2dJbih2YWx1ZSk7XG59O1xuXG5pZiAobG9naW5Gb3JtKSB7XG5cdGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cbiJdfQ==
},{}]},{},[1])