/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  let who = ["the dog", "my grandma", "his turtle", "my bird"];
  let what = ["ate", "pooped", "crushed", "broke"];
  let when = [
    "before the class",
    "too late",
    "before I finished",
    "during my lunch",
    "while I was praying"
  ];

  let anything =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];

  let message = document.querySelector("#excuse");
  message.innerHTML = anything;
};
