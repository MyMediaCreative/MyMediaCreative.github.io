window.addEventListener("DOMContentLoaded", function() {
      loadWork();
  }, false);

function loadWork(){
  var all = document.getElementsByClassName("proj-prev");
  for (i = 0; i < all.length; i++){
    all[i].style.display = 'block';
  }
}

function filterSelection(c) {
  var i;
  all = document.getElementsByClassName("proj-prev");
  need = document.getElementsByClassName(c);

  const cur_on = [];
  const cur_off = [];

  // gets the currently in and out portfolio items into lists
  for (i = 0; i < all.length; i++){
    if(all[i].style.display == 'block') cur_on.push(all[i]);
    else if(all[i].style.display == 'none') cur_off.push(all[i]);
    else console.log('uh oh');
  }

  var x = cur_on.length;

  const keep = [];
  const rem = [];

  // gets the needed in and out portfolio items into lists
  for (i = 0; i < cur_on.length; i++){
    if(contains(need, cur_on[i])) keep.push(cur_on[i]);
    else rem.push(cur_on[i])
  }

  const add = [];
  const leave = [];

  // gets the portfolio items that need to be taken in and out into lists
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

  // for each portfolio item, do what needs to be done to it
  var j = 0;
  for (i = 0; i < all.length; i++){
    all[i].style.opacity = 0;
    if(contains(rem, all[i])) (function(index) { setTimeout(function() { all[index].style.display = 'none'; }, 800); })(i)
    if(contains(keep, all[i])) j += 1
    if(contains(add, all[i]) && j < x){
      (function(index) { setTimeout(function() { all[index].style.display = 'block'; }, 800); })(i)
      j += 1;
    }
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

function showMore(){
  var s_top = document.documentElement.scrollTop
  document.getElementsByClassName("showmore")[0].style.display = 'none';
  var all = document.getElementsByClassName("proj-prev");
  for (i = 0; i < all.length; i++){
    if(i > 5){
      all[i].style.opacity = 0;
      all[i].style.display = 'block';
      (function(index) { setTimeout(function() { all[index].style.opacity = 1; }, 1); })(i)
    }
  }
  window.scrollTo(0, s_top);
}

// on the click event...
// var images = ['img1.jpg', 'img2.jpg', 'img3.jpg'],
//     gallery = $('#gallery');
// $.each(images, function () {
//   $('<img/>').attr('src', this).appendTo(gallery);
// });

// function filterSelection(c) {
//   var i;
//   all = document.getElementsByClassName("proj-prev");
//   need = document.getElementsByClassName(c);
//
//   const cur_on = [];
//   const cur_off = [];
//
//   // gets the currently in and out portfolio items into lists
//   for (i = 0; i < all.length; i++){
//     if(all[i].style.display == 'block') cur_on.push(all[i]);
//     else if(all[i].style.display == 'none') cur_off.push(all[i]);
//     else console.log('uh oh');
//   }
//
//   var x = cur_on.length;
//
//   const keep = [];
//   const rem = [];
//
//   // gets the needed in and out portfolio items into lists
//   for (i = 0; i < cur_on.length; i++){
//     if(contains(need, cur_on[i])) keep.push(cur_on[i]);
//     else rem.push(cur_on[i])
//   }
//
//   const add = [];
//   const leave = [];
//
//   // gets the portfolio items that need to be taken in and out into lists
//   for (i = 0; i < cur_off.length; i++){
//     if(contains(need, cur_off[i])) add.push(cur_off[i]);
//     else leave.push(cur_off[i])
//   }
//
//   // console.log("ADD")
//   // for (i = 0; i < add.length; i++){ console.log(add[i]) }
//   // console.log("KEEP")
//   // for (i = 0; i < keep.length; i++){ console.log(keep[i]) }
//   // console.log("REM")
//   // for (i = 0; i < rem.length; i++){ console.log(rem[i]) }
//   // console.log("LEAVE")
//   // for (i = 0; i < leave.length; i++){ console.log(leave[i]) }
//
//   // for each portfolio item, do what needs to be done to it
//   var j = 0;
//   for (i = 0; i < all.length; i++){
//     all[i].style.opacity = 0;
//     if(contains(rem, all[i])) (function(index) { setTimeout(function() { all[index].style.display = 'none'; }, 800); })(i)
//     if(contains(keep, all[i])) j += 1
//     if(contains(add, all[i]) && j < x){
//       (function(index) { setTimeout(function() { all[index].style.display = 'block'; }, 800); })(i)
//       j += 1;
//     }
//   }
//
//   for (i = 0; i < all.length; i++){
//     (function(index) { setTimeout(function() { all[index].style.opacity = 1; }, 1000); })(i)
//   }
// }
