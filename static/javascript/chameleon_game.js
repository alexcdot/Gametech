var score = 0;

function change_color(div_id) {
    document.getElementById("confirm-submit").innerHTML = "Never mind...";
    document.getElementById(div_id).style.backgroundColor = random_color();
    score++;
}

function random_color() {
  var c = '';
  while (c.length < 6) {
    c += (Math.random()).toString(16).substr(-6).substr(-1);
  }
  return '#'+c;
}
