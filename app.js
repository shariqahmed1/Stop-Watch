var hr = 0;
var min = 0;
var sec = 0;
var miliSec = 0;
var timer;

function callTimer() {
  miliSec++;
  if (miliSec < 100) {
    if (miliSec === 99) {
      miliSec = 0;
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60){
          min = 0;
          hr++;
        }
      }
    }
  }
  else{
      miliSec = 0;
  }

    document.getElementById('time').innerHTML =pt(hr) + " : " + pt(min) + " : " + pt(sec) + " : " + pt(miliSec);
}

function start(){
    timer = setInterval(callTimer,10);
    document.getElementById("stp").innerHTML = "Pause";    
    var x = document.getElementById("str");
    x.className = "dis";    
    x.setAttribute("disabled","");
    var st = document.getElementById("stp");
    st.removeAttribute("disabled");
    st.className = "btn";
}

function stop() {
    var sto = document.getElementById("stp").innerHTML;
    if(sto == "Pause")
    {
        document.getElementById("stp").innerHTML = "Resume";
        clearInterval(timer);    
    }
    else
    {
        document.getElementById("stp").innerHTML = "Pause";            
        start();                   
    }
}

function reset() {
    clearInterval(timer);   
    document.getElementById('time').innerHTML = "00 : 00 : 00 : 00";
    min = 0; sec = 0; miliSec = 0;
    var x = document.getElementById("str");
    x.className = "btn";    
    x.removeAttribute("disabled");
    var i = document.getElementById("stp");
    i.className = "dis"
    i.innerHTML = "Pause";    
    i.setAttribute("disabled","");
}



function pt(number)
{
    return (number < 10 ? '0' : '') + number;
}

