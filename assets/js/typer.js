$(document).ready(() => {
  
        
    var i = 0;
            var w = window.matchMedia("(min-width: 768px)");
            var txt = ' document.write("hire me, please") ';
            var speed = 120;
            function typeWriter() {
                if (i < txt.length) {
                    document.getElementById("text").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
                else{
                    rep(w);
                    w.addListener(rep);
                }
            }
            function rep(w) {
                if (w.matches) {
                    setTimeout(function(){
                        i = 0;
                        speed = 100; 
                        document.getElementById("text").innerHTML = '';
                        setTimeout(typeWriter, speed);
                    }, 5000);
                }
            }
      typeWriter();
      })