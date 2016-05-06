//call text and autoplay video
  $(document).ready(function() {
      $('#container-intro').fadeIn(1500);
//        $('#container-video').delay(5500).fadeIn(500);

});

//mobile intro
$(document).ready(function(){
    $(".continue-mobile").click(function(){
      $('#intro-mobile').fadeOut(0);
      $("#text-mobile").fadeIn(1000);
    });
});

$(document).ready(function(){
    $(".begin-convo").click(function(){
      $('#text-mobile').fadeOut(0);
      $("#container-mainpage, #container-nav").fadeIn(1000);
    });
});

//play auto fade
$(function() {
    var iframe = $('#player1')[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {
        player.addEvent('finish', onFinish);

    });

    // Call the API when a button is pressed
    $("#continue").bind('click', function() {
      console.log("continue clicked")
        player.api($(this).text().toLowerCase());
        player.api('play');
        $('#container-video').fadeIn(500);
        $('#container-intro').fadeOut(0);
    });


    function onFinish(id) {
      console.log("im finished");
      $('#container-text').fadeIn(1000);
      $('#container-video').remove();
      }

});


//call mainpage
  $(document).ready(function(){
      $(".skipvideo").click(function(){
        $( "#container-video" ).remove();
          $("#container-text").fadeIn(1000);
      });
  });

  $(document).ready(function(){
      $(".clickhere").click(function(){
        $( "#container-text" ).slideUp("slow");
          $("#container-nav, #container-mainpage").fadeIn(0);
      });
  });


//lightbox videos
$(function($) {
		$(".swipebox-video").swipebox({
    });
});



//bio popups
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

//popup for other pages
$(document).ready(function(){
    $(".about").click(function(){
      $( "#container-mainpage, #container-shooting").slideUp("slow");
        $("#container-about").fadeIn(0);
        });
});

$(document).ready(function(){
    $(".shooting").click(function(){
      $( "#container-mainpage, #container-about").slideUp("slow");
        $("#container-shooting").fadeIn(0);
    });
});

$(document).ready(function(){
    $(".conversations").click(function(){
      $("#container-mainpage").slideDown("fast");
      $( "#container-about, #container-shooting" ).slideUp("slow");
    });
});


//main content story buttons

function KeepCount() {
    var NewCount = 0;
    var score = 0;

    if (document.formone.religion.checked) {
        NewCount = NewCount + 1;
        score += 2;
    }

    if (document.formone.health.checked) {
        NewCount = NewCount + 1;
    }

    if (document.formone.medias.checked) {
        NewCount += 1;
        score += 1
    }

    if (document.formone.guns.checked) {
        NewCount = NewCount + 1;
        score += 4;
    }

    if (NewCount == 2){
        document.getElementById('video' + score ).click();
        $('input:checkbox').removeAttr('checked');

    }

  };
