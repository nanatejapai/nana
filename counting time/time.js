
console.log("hello from external script.js");
$(document).ready(function(){

$ function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
$ function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
});

// var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', 'effect.mp3');
    
//     audioElement.addEventListener('ended', function() {
//         this.play();
//     }, false); audioElement.addEventListener("timeupdate",function(){
//         $("#currentTime").text("Current second:" + audioElement.currentTime);
//     });   




// var siID;
// $(document).ready(function(){
//         $('#startTimer').click(function(){
//         var sec = 0;
//         siID = setInterval(function() {
//         $('#counter span').text(++sec/10000);}, 27); 
//         })
        
//         $('#stopTimer').click(function() {
//             window.clearInterval(siID);
//             $('#counter span').text('0');
//         });
// });


// $('#stopTimer').click(function(){
// 	audioElement.pause();
// 	});
// $('#startTimer').click(function(){
// 	audioElement.play();
// 	});
// $('#startTimer').click(function(){
//     $(".result").show();
// });
// $('#stopTimer').click(function(){
//     $(".result").hide();
// });
// // $('.hide').click(function() {
// //         $('.counter').hide();audioElement.pause();
// //     });


// // $( '.show' ).click(function() {
// //   $( this ).replaceWith( '.hide');
// // });

// // $('.button').click(function(){
// //     var $this = $(this);
// //     $this.toggleClass('button');
// //     if($this.hasClass('button')){
// //       $this.text('show');     
// //     } else {
// //       $this.text('hide');
// //     }
// //   });

// // function startCounter(){
// // 	$('.counter').each(function (index) {
// // 	    $(this).prop('Counter',0).animate({
// // 	        Counter: $(this).text()
// // 	    }, {
// // 	        duration: 1800000,
// // 	        easing: 'swing',
// // 	        step: function (now) {
// // 	            $(this).text(Math.round(now*10)/100000);
// // 	        }
// // 	    });
// // 	});
// // }	

// // startCounter();
// //    $('')
// });

