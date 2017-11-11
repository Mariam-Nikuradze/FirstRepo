var dateform
speed=1000
tid = 0;
function dodate()
{
  f.date.value=new Date();
  tid=window.setTimeout("dodate()",speed);
}
function start(x) {
  f=x
  tid=window.setTimeout("dodate()",speed);
}
function cleartid() {
  window.clearTimeout(tid);
}
