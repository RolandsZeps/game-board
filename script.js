function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function myFunction() {
  var x = document.getElementById("atbilde");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


const x = 2; //add the Timer minutes here ( e.g. 2 for two Minutes or 0.2 for 12 secs)

display = document.querySelector('#clock');

clock_initialize(x);

function newInterval(x){
        $('#clock').css({"animation" : "none"});
        $('#clock').css({"color":"yellowgreen"});
        clock_initialize(x);
    }


function clock_initialize(x) {

        $count_from_minutes = x; //count of minutes
        if ($count_from_minutes > 1440) {
            $count_from_minutes = 1440;
        }
       let  $timer_time = 60 * $count_from_minutes;
        let $time_at_start = x;

        startTimer($timer_time, display, $time_at_start);

    }
function startTimer($timer_time, display, $time_at_start){

  let interval = setInterval(function () {

            let days = Math.floor($timer_time /86400);
            let hours = Math.floor(($timer_time -(days * 86400)) / 3600);
            let minutes = Math.floor(($timer_time - (days * 86400) - (hours * 3600)) / 60);
            let secs = Math.floor(($timer_time - (days * 86400) - (hours * 3600) - (minutes * 60)));

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            secs = secs < 10 ? "0" + secs : secs;


            display.innerHTML = "<div class=\"hours\">"+ hours +"</div>\n" +
                                "<div class=\"clock-dots\">:</div>"+
                                "<div class=\"minutes\">"+ minutes +"</div>\n" +
                                "<div class=\"clock-dots\">:</div>"+
                                "<div class=\"seconds\">"+ secs +"</div>";

            $timer_time--;
            if($timer_time <= 59){
                $('#clock').css({"color":"red"});
            }
            if($timer_time >= -1 && $timer_time < 10 ){
                $('.seconds').css({"animation" : "scale-secs 1s infinite", "animation-iteration-count": "10"});
            }
            if($timer_time === -1){
                clearInterval(interval);
                $('#clock').css({"animation" : "countdown-over .9s infinite", "animation-iteration-count": "3"});
                $('.seconds').css({"animation" : "none"});
                setTimeout(function(){
                           $('.confirm-btn').css({"animation" : "confirm-come 1s", "display" : "flex"})
            },2800);
              // setTimeout(function() {newInterval($time_at_start)},2900);
               $('.confirm-btn').on('click',function(){
                          $('.confirm-btn').css({"animation" : "confirm-go 1s"});
                 setTimeout(function(){
                           $('.confirm-btn').css({ "display" : "none"})
            },1000);
                      newInterval($time_at_start);
                                    });


            }
            return $timer_time;
        },1000);
}
