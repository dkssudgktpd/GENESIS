window.onload = function () {
    let mainMenu = $('.main-menu');
    let headerDepth2 = $('.header-depth2');
    $.each(mainMenu,function(index, item){
        $(this).click(function(event){
        if($(this).hasClass('main-menu-focus')){
            mainMenu.removeClass('main-menu-focus');
        }else{
            mainMenu.removeClass('main-menu-focus');
            $(this).toggleClass('main-menu-focus');
        }
            event.preventDefault();
            headerDepth2.stop().slideUp(1);
            headerDepth2.eq(index).stop().slideToggle();
        })
    })

    new Swiper('.sw-model1', {
        pagination: {
            el: '.sw-model-pg'
        },
        navigation: {
            prevEl: '.sw-header-prev',
            nextEl: '.sw-header-next'
        },
        allowTouchMove: false,
        observer: true,
        observeParents: true,
    });
    // 헤더 모델의 탭메뉴
    let model_List_All = $('.model-list-all');
    let model_List_Sedan = $('.model-list-sedan');
    let model_List_Suv = $('.model-list-suv');
    let model_All = $('.model-all');
    let model_Sedan = $('.model-sedan');
    let model_Suv = $('.model-suv');

    model_List_All.click(function () {
        model_Sedan.hide();
        model_Suv.hide();
        model_All.show();
        model_List_Sedan.removeClass('model-list-active');
        model_List_Suv.removeClass('model-list-active');
        $(this).addClass('model-list-active');
    });
    model_List_Sedan.click(function () {
        model_Sedan.show();
        model_Suv.hide();
        model_All.hide();
        model_List_All.removeClass('model-list-active');
        model_List_Suv.removeClass('model-list-active');
        $(this).addClass('model-list-active');
    });
    model_List_Suv.click(function () {
        model_Sedan.hide();
        model_Suv.show();
        model_All.hide();
        model_List_Sedan.removeClass('model-list-active');
        model_List_All.removeClass('model-list-active');
        $(this).addClass('model-list-active');
    });

    // 헤더 검색 메뉴 클릭
    let headerMenu = $('.header-search-menu');
    let searchWrap = $('.search-menu-wrap');
    headerMenu.click(function(){
        $(this).toggleClass('header-search-menu-open');
        let temp = $(this).hasClass('header-search-menu-open');
        if(temp){
            searchWrap.stop().slideDown();
        }else{
            searchWrap.hide();
        }
    })

    // visual swiper
    let swVisual = new Swiper('.sw-visual',{
        pagination:{
            el : '.sw-visual-pg',
            clickable : true
        },
        loop: true,
        speed: 600,
        autoplay : {
            delay : 5000
        }
    })
    // 스와이퍼의 5번 찾기
    let swLinkCh = $('.sw-visual-link-ch');
    swVisual.on('slideChange',function(){
        if(swVisual.realIndex == 5){
            // html을 바꾸자
            swLinkCh.html(`영상 보기
            <i class="icon-right-open"></i>`)
        }else{
            // 다시 원상태도 돌려주자
            swLinkCh.html(`견적내기
            <i class="icon-right-open"></i>`)
        }
    })

    // 비주얼 스와이퍼 play(pause) 버튼클릭
    let visualPause = $('.visual-pause');
    let visualPlay = $('.visual-play');
    visualPause.click(function(){
        $(this).hide();
        visualPlay.show();
        swVisual.autoplay.stop();
    })
    visualPlay.click(function(){
        $(this).hide();
        visualPause.show();
        swVisual.autoplay.start();
    })

    let qwe = $('.qwe');
    let a = $('.a');
    let b = $('.b');
    let c = $('.c');
    a.click(function(){
        qwe.text('ㅁㄴㅇ') 
    })
    b.click(function(){
        qwe.text('바뀌어요') 
    })
    c.click(function(){
        qwe.text('이렇게해야하나')
    })
}