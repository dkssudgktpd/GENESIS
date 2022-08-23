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

    new Swiper('.sw-header-model', {
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
        model_List_All.addClass('model-list-active');
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

    let carModelMainmenu = $('.car-model-mainmenu');
    let carModelDepth2 = $('.car-model-depth2');
    let carModelBt = $('.car-model-depth2 > li > button');

    carModelMainmenu.click(function(){
        carModelDepth2.toggleClass('car-model-depth2-active');
        carModelMainmenu.toggleClass('car-model-mainmenu-active');
    });

    if(carModelDepth2.hasClass('car-model-depth2.active')){
        $('.wrap').click(function(){
            carModelDepth2.removeClass('car-model-depth2-active');
            carModelMainmenu.removeClass('car-model-mainmenu-active');
        })
    }

        new Swiper('.sw-model',{
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween : 40,
        pagination:{
            el : '.car-pg',
            clickable: true,
        }
    })
    let kindCar = $('.sw-model').find('.swiper-wrapper');

    let carmodelData = [
        {
            modelkind : 'sedan',
            modelname : 'G70',
            modelev : '',
            modelatt : 'SHOOTING BRAKE',
            modelimg : 'images/g70_brake.webp',
        },
        {
            modelkind : 'sedan',
            modelname : 'G70',
            modelev : '',
            modelatt : '',
            modelimg : 'images/g70.webp',
        },
        {
            modelkind : 'sedan',
            modelname : 'G80',
            modelev : 'car-ev',
            modelatt : 'ELECTRIFIED',
            modelimg : 'images/g80_el.webp',
        },
        {
            modelkind : 'sedan',
            modelname : 'G80',
            modelev : '',
            modelatt : '',
            modelimg : 'images/g80.webp',
        },
        {
            modelkind : 'sedan',
            modelname : 'G90',
            modelev : '',
            modelatt : '',
            modelimg : 'images/g90.webp',
        },
        {
            modelkind : 'suv',
            modelname : 'GV60',
            modelev : 'car-ev',
            modelatt : '',
            modelimg : 'images/gv60.webp',
        },
        {
            modelkind : 'suv',
            modelname : 'GV70',
            modelev : 'car-ev',
            modelatt : 'ELECTRIFIED',
            modelimg : 'images/gv70_el.webp',
        },
        {
            modelkind : 'suv',
            modelname : 'GV70',
            modelev : '',
            modelatt : '',
            modelimg : 'images/gv70.webp',
        },
        {
            modelkind : 'suv',
            modelname : 'GV80',
            modelev : '',
            modelatt : '',
            modelimg : 'images/gv80.webp',
        }
    ]





    
    $.each(carModelBt,function(index){
        $(this).click(function(){ 
            carModelDepth2.removeClass('car-model-depth2-active');
            carModelMainmenu.removeClass('car-model-mainmenu-active');
        })
    })

    function modeldatain (item){
        kindCar.append(`
        <div class="swiper-slide">
            <div class="kind-car">
                <h3>${item.modelname}
                    <i class="${item.modelev}"></i>
                    <p>${item.modelatt}</p>
                </h3>
                <img src="${item.modelimg}" alt="">
                <span>자세히 보기</span>
            </div>
        </div>
        `);
    }
    carmodelData.map((item) => {
        modeldatain(item);
    })
    // carmodelData.map(c => modeldatain(c));

    const button = document.querySelector(".car-model-depth2");
    button.addEventListener('click',(event) => {
        let result = carmodelData;
        const value = event.target.value;
        document.querySelector(".car-model-depth1 button").innerText = value.toUpperCase();
        if(value !== "all"){
            result = result.filter(a => a.modelkind === value);
        }
            kindCar.empty();
            result.map(b => modeldatain(b));
    })

    //awards 슬라이드
    let swAwards = new Swiper('.sw-awards',function(){

    })
}
