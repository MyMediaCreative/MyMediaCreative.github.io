var moreShown = false;

window.addEventListener("DOMContentLoaded", function() {loadWork();}, false);
function loadWork(){
  var f = document.getElementsByClassName("fir");
  var s = document.getElementsByClassName("sec");
  for (i = 0; i < f.length; i++) f[i].style.display = 'block';
  for (i = 0; i < s.length; i++) s[i].style.display = 'none';
  for (i = 0; i < s.length; i++) s[i].style.opacity = 0;
}

function filterSelection(c) {
  all = document.getElementsByClassName("proj-prev");
  f = document.getElementsByClassName("fir");
  s = document.getElementsByClassName("sec");
  cat = document.getElementsByClassName(c);
  if(moreShown) need = cat;
  else need = intersect(cat, f);

  //sets opacity of all to zero
  for (i = 0; i < all.length; i++) all[i].style.opacity = 0;

  // adds back what is needed from specified category depending on if moreshown is true
  for (i = 0; i < all.length; i++) (function(index) { setTimeout(function() { all[index].style.display = 'none'; }, 300); })(i)
  for (i = 0; i < need.length; i++) (function(index) { setTimeout(function() { need[index].style.display = 'block'; }, 300); })(i)

  // brings opacity of everything back up to 1
  for (i = 0; i < all.length; i++){ (function(index) { setTimeout(function() { all[index].style.opacity = 1; }, 500); })(i) }
}

// function showButton(){
//   if(moreShown) showLess();
//   else showMore();
// }

function showMore(){
  moreShown = true;

  var s_top = document.documentElement.scrollTop
  let s = document.getElementsByClassName("sec");

  assignMoreData();

  // shows them on the page
  for (i = 0; i < s.length; i++) (function(index) { setTimeout(function() { s[index].style.display = 'block'; }, 300); })(i)

  // cranks up opacity
  for (i = 0; i < s.length; i++) (function(index) { setTimeout(function() { s[index].style.opacity = 1; }, 500); })(i)

  // fixes scroll back to original point timed perfectly with when we show new items
  setTimeout(function(){ window.scrollTo(0, s_top); m = document.getElementById("showmore"); m.style.display = "none";}, 300);

  // if we decide to want a show less button, there's this code that switches the text of the button to show less.
  // also need to change triggered function on work.html
  // setTimeout(function(){ window.scrollTo(0, s_top); m = document.getElementById("showmore"); m.innerHTML = "show less";}, 800);
}

// function to show less, which i don't know if we really need.
// function showLess(){
//   moreShown = false;
//
//   var s_top = document.documentElement.scrollTop
//   var s = document.getElementsByClassName("sec");
//
//   // turns opacity to zero
//   for (i = 0; i < s.length; i++) s[i].style.opacity = 0;
//
//   // shows them on the page
//   for (i = 0; i < s.length; i++) (function(index) { setTimeout(function() { s[index].style.display = 'none'; }, 300); })(i)
//
//   // cranks up opacity
//   for (i = 0; i < s.length; i++) (function(index) { setTimeout(function() { s[index].style.opacity = 1; }, 500); })(i)
//
//   setTimeout(function(){ window.scrollTo(0, s_top); m = document.getElementById("showmore"); m.innerHTML = "show more";}, 300);
// }

// util functions
function intersect(a, b){
  const ret = [];
  for (i = 0; i < a.length; i++)
    for (j = 0; j < b.length; j++)
      if(a[i] == b[j]) ret.push(a[i]);
  return ret;
}
function contains(arr, el) {
  var i;
  for (i = 0; i < arr.length; i++) if(arr[i] == el) return true;
  return false;
}
