$(function(){
/*메인슬라이드*/
      let total = $(".mainslide li").length;
      let i = 0;
      let wid = 100;

      start();
      function start() {
        timer = setInterval(function () {
          i++;
          if (i == total - 1) {
            $(".mainslide")
              .stop()
              .animate({ left: "-400%" },function () {
                $(".mainslide").css({ left: "0" });
              });
            i = 0;
          } else {
            $(".mainslide")
              .stop()
              .animate({ left: -i * wid+"%"},2000);
          }
          $(".icon2 li a").removeClass("on");
          $(".icon2 li a").eq(i).addClass("on");
        }, 3000);
      }
      $(".next").on("click", function () {
        clearInterval(timer);
        i++;
        if (i == total - 1) {
          $(".mainslide")
            .stop()
            .animate({ left: "-400%" }, function () {
              $(".mainslide").css({ left: "0" });
            });
          i = 0;
        } else {
          $(".mainslide")
            .stop()
            .animate({ left: -i * wid+"%" });
        }
        $(".icon2 li a").removeClass("on");
        $(".icon2 li a").eq(i).addClass("on");
        start();
      });

      $(".prev").on("click", function () {
        clearInterval(timer);
        i--;
        if (i < 0) {
          $(".mainslide").css({ left: "-400%" });
          $(".mainslide").stop().animate({ left: "-300%" });
          i = 3;
        } else {
          $(".mainslide")
            .stop()
            .animate({ left: -i * wid+"%" });
        }
        $(".icon2 li a").removeClass("on");
        $(".icon2 li a").eq(i).addClass("on");
        start();
      });

      $(".icon2 li ").on("click", function () {
        clearInterval(timer);
        i = $(this).index();
        $(".mainslide")
          .stop()
          .animate({ left: -i * wid+"%" });
        $(".icon2 li a").removeClass("on");
        $(".icon2 li a").eq(i).addClass("on");
        start();
      });


    /*세로 슬라이드 자동*/
    $(window).resize(function(){ 
      if (window.innerWidth >767) {   
        setInterval(function(){
          $(".upslide2").stop().animate({marginTop:"-20vw"}
          ,1000,function(){
              $(".upslide2").css({margin:"0px"})
              $(".upslide2 li").first().appendTo(".upslide2");
          })
      },3000);
      }
      
      }).resize(); 
  

    

     /*세로 슬라이드 글씨*/
     $(function () {
        let total = $(".upslide2 li").length;
        let i = 0;
      
        start();
      
        function start() {
          time = setInterval(function () {
            if (i == total - 1) {
              i = 0;
              
              $(" #container .con2 .left .l_text li").removeClass("on");
              $("#container .con2 .left .l_text li").eq(i).addClass("on");
            } else {
              i = i + 1;
             
              $("#container .con2 .left .l_text li").removeClass("on");
              $("#container .con2 .left .l_text li").eq(i).addClass("on");
            }
          }, 3000);
        }
      
        });
        

      /*마우스오버 텍스트*/

      $(window).resize(function(){ 
        if (window.innerWidth >1219) {   
          $("#container .con2 .right .r_a li").on("mouseenter",function(){
            $(this).children(".textbox").stop().animate({bottom:"0px"})
          })
          $("#container .con2 .right .r_a li").on("mouseleave",function(){
            $(this).children(".textbox").stop().animate({bottom:"-3.5vw"})
          })
        }
        
        }).resize(); 
    
    

       /*마우스오버 이미지 확대*/
       $("#container .con3_1 li .rb").on("mouseenter",function(){
        $(this).children("img").stop().animate({width:"105%"})
      })
      $("#container .con3_1 li .rb").on("mouseleave",function(){
        $(this).children("img").stop().animate({width:"100%"})
      })
      
     /*네비바*/
     $(".mu").on("click",function(){
      $(".wrap").show();return false;
     })
     $(".wrap span").on("click",function(){
      $(".wrap").hide();return false;

     })

     /*마우스오버 텍스트*/
     $(".navi li p").on("mouseenter",function(){
      $(this).stop().css({color:"rgba(255,255,255,0.8)"})
    })
    $(".navi li p").on("mouseleave",function(){
      $(this).stop().css({color:"rgba(255,255,255,0.3)"})
    })
 
    /*모바일슬라이드 메뉴바*/
    if($(window).width() <= 767) {
      $('.menu1').click(function(){
        $('.menu2').slideUp();
        if ($(this).children('.menu2').is(':hidden')){
           $(this).children('.menu2').slideDown();
        } else{
           $(this).children('.menu2').slideUp();
        }
     });
      }

    






    

      /*모바일 세로 슬라이드*/
    $(window).resize(function(){ 
      if (window.innerWidth <=767) {   
        setInterval(function(){
          $(".upslide2").stop().animate({marginTop:"-40vw"}
          ,1000,function(){
              $(".upslide2").css({margin:"0px"})
              $(".upslide2 li").first().appendTo(".upslide2");
          })
        },3000);
      }
      
      }).resize(); 
  
  

    
});