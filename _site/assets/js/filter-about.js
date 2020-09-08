window.addEventListener("DOMContentLoaded", function() {
      loadAbout();
  }, false);

function loadAbout(){
  var all = document.getElementsByClassName("proj-prev");
  for (i = 0; i < all.length; i++){ all[i].style.display = 'block'; }
  swapLast()
}

function filterSelection(c) {
  var i;
  all = document.getElementsByClassName("proj-prev");
  need = document.getElementsByClassName(c);

  const cur_on = [];
  const cur_off = [];

  for (i = 0; i < all.length; i++){
    if(all[i].style.display == 'block') cur_on.push(all[i]);
    else if(all[i].style.display == 'none') cur_off.push(all[i]);
    else console.log('uh oh');
  }

  const keep = [];
  const rem = [];

  for (i = 0; i < cur_on.length; i++){
    if(contains(need, cur_on[i])) keep.push(cur_on[i]);
    else rem.push(cur_on[i])
  }

  const add = [];
  const leave = [];

  for (i = 0; i < cur_off.length; i++){
    if(contains(need, cur_off[i])) add.push(cur_off[i]);
    else leave.push(cur_off[i])
  }

  // console.log("ADD")
  // for (i = 0; i < add.length; i++){ console.log(add[i]) }
  // console.log("KEEP")
  // for (i = 0; i < keep.length; i++){ console.log(keep[i]) }
  // console.log("REM")
  // for (i = 0; i < rem.length; i++){ console.log(rem[i]) }
  // console.log("LEAVE")
  // for (i = 0; i < leave.length; i++){ console.log(leave[i]) }

  for (i = 0; i < all.length; i++){
    all[i].style.opacity = 0;
    if(contains(rem, all[i])) (function(index) { setTimeout(function() { all[index].style.display = 'none'; }, 800); })(i)
    if(contains(add, all[i]))(function(index) { setTimeout(function() { all[index].style.display = 'block'; }, 800); })(i)
  }

  for (i = 0; i < all.length; i++){
    (function(index) { setTimeout(function() { all[index].style.opacity = 1; }, 1000); })(i)
  }
}

function contains(arr, el) {
  var i;
  for (i = 0; i < arr.length; i++) if(arr[i] == el) return true;
  return false;
}

function swapFirst(){
  var i;
  first = document.getElementsByClassName("first");
  last = document.getElementsByClassName("last");
  for (i = 0; i < first.length; i++) first[i].style.display = "block";
  for (i = 0; i < last.length; i++) last[i].style.display = "none";
}

function swapLast(){
  var i;
  first = document.getElementsByClassName("first");
  last = document.getElementsByClassName("last");
  for (i = 0; i < first.length; i++) first[i].style.display = "none";
  for (i = 0; i < last.length; i++) last[i].style.display = "block";
}
