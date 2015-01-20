window.onload = function() {
  favicon.change("favicon.ico");
  /*favicon.animate(new Array(
    "Icons/a.ico", "Icons/j.ico", "Icons/a.ico", "Icons/x.ico", ""), 3000);*/
  document.onkeypress = function(ev) {
    alert(ev);
    ev = ev || window.event;
    var unicode=ev.keyCode? ev.keyCode : ev.charCode
    var char = String.fromCharCode(unicode);
    if (char=="," && favicon.defaultPause > 200) {
      favicon.defaultAnimationPause-=100;
    } else if (char=="." && favicon.defaultPause < 5000) {
      favicon.defaultAnimationPause+=100;
    }
    document.getElementById("pause").innerHTML = favicon.defaultPause;
  }
  // Uncomment to see how change() will cancel the animation
  // setTimeout(function() { favicon.change("Icons/z.ico") }, 10000);
}
