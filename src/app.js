/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuses() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let person = Math.floor(Math.random() * who.length);
  let verb = Math.floor(Math.random() * action.length);
  let adjective = Math.floor(Math.random() * what.length);
  let time = Math.floor(Math.random() * when.length);
  return (
    who[person] + " " + action[verb] + " " + what[adjective] + " " + when[time]
  );
}
window.onload = function() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuses();
    document.querySelector("#excuse").innerHTML = excuses();
  });
};
