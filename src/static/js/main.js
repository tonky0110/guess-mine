(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUNoQ0MsT0FEZ0MsR0FDVkQsSUFEVSxDQUNoQ0MsT0FEZ0M7QUFBQSxNQUN2QkMsUUFEdUIsR0FDVkYsSUFEVSxDQUN2QkUsUUFEdUI7QUFFeENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XG5cdGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XG5cdGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xufVxuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io('/');
socket.on('hello', function () {
  return console.log('Somebody joined.');
});

function sendMessage(message) {
  socket.emit('newMessage', {
    message: message
  });
  console.log('`You: ${message}');
}

function setNickname(nickname) {
  socket.emit('setNickname', {
    nickname: nickname
  });
}

socket.on('messageNotif', _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2Q1NjM4NTAuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0Iiwic2V0Tmlja25hbWUiLCJuaWNrbmFtZSIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBRUFELE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLE9BQVYsRUFBbUI7QUFBQSxTQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixDQUFOO0FBQUEsQ0FBbkI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDN0JOLEVBQUFBLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFQQTtBQUFGLEdBQTFCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0E7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDOUJULEVBQUFBLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUUsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0E7O0FBRURULE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLGNBQVYsRUFBMEJRLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gJy4vY2hhdCc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCcvJyk7XG5cbnNvY2tldC5vbignaGVsbG8nLCAoKSA9PiBjb25zb2xlLmxvZygnU29tZWJvZHkgam9pbmVkLicpKTtcblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuXHRzb2NrZXQuZW1pdCgnbmV3TWVzc2FnZScsIHsgbWVzc2FnZSB9KTtcblx0Y29uc29sZS5sb2coJ2BZb3U6ICR7bWVzc2FnZX0nKTtcbn1cblxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcblx0c29ja2V0LmVtaXQoJ3NldE5pY2tuYW1lJywgeyBuaWNrbmFtZSB9KTtcbn1cblxuc29ja2V0Lm9uKCdtZXNzYWdlTm90aWYnLCBoYW5kbGVNZXNzYWdlTm90aWYpO1xuIl19
},{"./chat":1}]},{},[2])