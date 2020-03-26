$(function(){
    // 물속표현
    $('.light_bg').ripples('show');
    
    function show(target, time) {
        setTimeout(function () {
            $(target).addClass('on');
        }, time * 1000);
    }
    // 순서대로 보여지기
    (function () {
        show('.light_bg', 0.5);
        show('.small_title', 1.5);
        show('.main_title', 2.5);
        show('.play_btn', 3.0);
        show('.first_floating', 3.5);
        show('.second_floating', 4.0);
        show('.third_floating', 4.5);
    })();

    // 영상팝업

      //팝업 열때
      $('.play_btn').on('click', function(){
        var embed = $('#player'); //동영상 코드
        var path = $(this).attr('href');
        $('.cont').append(embed); 
        $(path).show();
        $('.dim').show();
      })

      // 팝업 닫을때
      $('.close').on('click', function(){
        $(this).parents('#layer').hide(); // .parent() 선택한 요소의 부모선택 , .parents() 선택한 요소의 상위요소(ancestor) 모두 선택
        $('.dim').hide(); //hide: css display 속성값이 none으로 설정하여 요소를 숨김
      })

    
});