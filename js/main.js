(function() {

    // slider_menu 

    $('.sidemenu_list>li a').on('click', function() {
        $('.sidemenu_list>li').toggleClass('on');
        $('#depth2Bg').toggleClass('active');
        $('.depth_2_wrap').toggleClass('on');
    });

    // 뎁스2 닫기 버튼
    $('.close_depth2').on('click', function() {
        $('#depth2Bg').removeClass('active');
        $('.depth_2_wrap').removeClass('on');
    })

    // 메뉴탭1  -  수정필요  -css 호버로 설정 
    $('.menu_tab>li>a').mouseenter(function() {
        $(this).parent('li').not('.on').css('border','2px solid #fff');
    });
    $('.menu_tab>li>a').mouseleave(function() {
        $(this).parent('li').not('.on').css('border','1px solid #5e627d');
    });

    // 메뉴 탭 2
    var $tabList = $('.depth2_inner');

    $('.menu_tab>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('on').siblings().removeClass('on');
        
        $tabList.hide();

        var $tabIdx = $(this).parent().index();
        $tabList.eq($tabIdx).show();
    });
    $('.menu_tab>li>a').eq(0).trigger('click');

    // 초이스 탭 

    $('.choice_tab_list>li>a').on('click', function(e) {
        e.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

        $('.choice_depth3').hide();

        var $choiceIdx = $(this).parent().index();

        $('.choice_depth3').eq($choiceIdx).show();
    });
    $('.choice_tab_list>li>a').eq(0).trigger('click');

    // tab_list 공통 

    $('.tab_list>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    // 체크박스 
    $('.chk_wrap li label').on('click', function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    })

    // 헤더링크 버튼 

    $('.header_link_wrap .header_link_list').hide();

    $('.header_link_wrap .header_link').on('click', function() {
        $('.header_link_wrap').toggleClass('on');
        $('.header_link_wrap .header_link_list').slideToggle();
    })

    // 헤더 더보기 버튼 
    $('.btn_more_wrap .btn_more').on('click', function() {
        $('.btn_more_wrap').toggleClass('on');
        $('.header_more_wrap').slideToggle();
    });

    // 헤더 depth1 바 기능

    var depth1Bar = $('.bar_depth1');

    $('.nav_bar>li>a').on('mouseenter', function() {
        var posX = $(this).position().left;
        var w = $(this).width();

        depth1Bar.css({'transform':'translateX('+posX+'px)', 'width':w,'opacity':'1'});
        $(this).next('.depth_2').slideDown(300).parent().siblings().find('.depth_2').slideUp(100);
        $('#header').addClass('on');
    });
    
    $('.nav_bar>li>a').on('mouseleave', function() {
        depth1Bar.css('opacity','0');
        $('.depth_2').slideUp(10);
        $('#header').removeClass('on');
    })

    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        pagination: {
            el: '.swiper-pagination',
        },
    });


    // 메인배너 

    $('.main_banner .banner_inner a').on('mouseenter', function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    }).on('mouseleave', function() {
        $('.main_banner .banner_inner').removeClass('active');
    });

    /* 메뉴버튼 기능 + 바디 높이 해제 */    
    var bodySc = $('body');

    $('.btn_menu').on('click', function() {
        $('#header .gnb_wrap').addClass('on');
        $('#header .gnb_bg').fadeIn();
        bodySc.css('overflow','hidden');
        
    });
    /* 메뉴닫기 기능 */
    $('.btn_close').on('click', function() {
        $('#header .gnb_wrap').removeClass('on');
        $('#header .gnb_bg').fadeOut();
        bodySc.css('overflow','scroll');
        setTimeout(function() {
            $(' .gnb>li').removeClass('active');
            $(' .gnb>li .depth2').slideUp();

        }, 300);
    });
    $('#header .gnb_wrap .gnb_bottom .gnb>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings().removeClass('active');
       /*  $(this).next('.depth2').slideToggle().siblings(); */
        $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp(); 
    });

    $('#header .gnb .depth2 a').on('click', function() {
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
    
    $('#container .com_section .tab_menu>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        
        
        var menuIDX = $(this).parent().index();

        $('.menu_slider_blind').eq(menuIDX).addClass('active').show().siblings().removeClass('active').hide();
    });
        
    /* 서브페이지 lnb 온/오프 */
    $('.lnb .btn_lnb').on('click', function() {
        $('.lnb .list_lnb').slideToggle();
        $('.btn_lnb').stop().toggleClass('active');
        if($(this).hasClass('active')) {
            console.log('active 있음');
        } else {
            console.log('active 없음');
        }
    });
    /* btn_lnb에 active가 없으면 리스트 열고 있으면 닫기 */

})();
