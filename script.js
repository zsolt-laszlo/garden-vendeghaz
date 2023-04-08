//galey script
document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

//latvanyosagok kep kiugrik

function zoom(x) {
  x.style.height = "350px";
  x.style.width = "350px";
}

function normal(x) {
  x.style.height = "250px";
  x.style.width = "250px";
}