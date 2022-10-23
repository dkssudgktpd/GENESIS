window.onload = function () {
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
    const modal = $('.modal');
    const modalClose = $('.modal-close');
    const modalWrap = $('.modal-wrap');
    modal.click(function () {
        modal.fadeOut(500);
        $('body').css("overflow", "auto");
    })
    modalClose.click(function () {
        modal.fadeOut(500);
        $('body').css("overflow", "auto");
    })
    modalWrap.click(function (event) {
        event.stopPropagation();
    })

    // mobile
        let mbMenu = $(".mb-menu");
        const mbWrap = $(".mb-wrap");
        mbMenu.click(function(){
            $(this).toggleClass("active");
            mbWrap.toggleClass("active");
            let temp = $(this).hasClass("active");
            if(!temp){
                mbWrap.removeClass("active");
                mbDepth2.removeClass("active");
            }
        })
    const mbMainMenu = $(".mb-mainmenu");
    const mbDepth2 = $(".mb-list2 > li");
    const mbBack = $(".mb-back");
    const mbCarlist = $(".mb-carlist");
    function mbcar(){
        let mbsedan = carmodelData.filter(data => data.modelkind == "sedan");
        let mbsuv = carmodelData.filter(data => data.modelkind == "suv");
        let html = "";
        mbsedan.map((item) => {
            html += `
            <li>
            <h4>${item.modelname}</h4>
            <p class="mb-car-txt">${item.modelatt}</p>
            <img src="${item.modelimg}" alt="">
            </li>
            `
            mbCarlist[0].innerHTML = html;
        });
        html = "";
        mbsuv.map((item) => {
            html += `
            <li>
            <h4>${item.modelname}</h4>
            <p class="mb-car-txt">${item.modelatt}</p>
            <img src="${item.modelimg}" alt="">
            </li>
            `
            mbCarlist[1].innerHTML = html;
        })
    }
    mbcar()
    $.each(mbMainMenu,function(index){
        $(this).click(function(){
            mbDepth2.eq(index).addClass("active");
        })
    })
    mbBack.click(function(){
        mbDepth2.removeClass("active");
    })
    const mbAcco = $(".mb-accordion");
    $.each(mbAcco,function(index){
        $(this).click(function(){
            mbCarlist.eq(index).stop().slideToggle();
        })
    })




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


    let kindCar = $('.sw-model').find('.swiper-wrapper');
    
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

    const button = document.querySelector(".car-model-depth2");
    button.addEventListener('click',(event) => {
        let result = carmodelData;
        const value = event.target.value;
        document.querySelector(".car-model-depth1 button").innerText = value.toUpperCase();
        if(value !== "all"){
            result = result.filter(kind => kind.modelkind === value);
        }
            kindCar.empty();
            result.map(item => modeldatain(item));
    })
    const swModel = new Swiper('.sw-model',{
        breakpoints:{
            1100: {
                slidesPerView: 3
            },
        },
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween : 40,
        pagination:{
            el : '.car-pg',
            clickable: true,
        }
    })
    //awards 슬라이드
    let swAwards = new Swiper('.sw-awards',{
        effect: "fade",
        loop:true,
        speed:1000,
        allowTouchMove: false,
    });
    
    let awardsTapMenu = $('.awards-tapmenu');
    let aTapmenuTotal = awardsTapMenu.length;
    let awardsBar = $('.awards-bar');
    let awardscount = 0;
    let aTSelected = 1;
    let awardsTimer;
    let awardsState;
    awardsMove(0)
    swAwards.slideTo(1,0,false)
    

    function awardsMove(index){
        aTSelected = index;
        awardsTapMenu.removeClass('active');
        awardsTapMenu.eq(index).addClass('active');
        awardsState = 'play';
        let acbar = awardsBar.eq(index);
        clearInterval(awardsTimer)
            awardsTimer = setInterval(function(){
                awardscount++;
                acbar.css('width', awardscount + '%' )
                if(awardscount >= 100){
                    awardscount = 0;
                    clearInterval(awardsTimer);
                    awardsBar.css('width', 0)
                    aTSelected++;
                    swAwards.slideTo(aTSelected + 1,500,false)
                    if(aTSelected >= aTapmenuTotal){
                        aTSelected = 0;
                    }
                    awardsMove(aTSelected);
                }
            },50)
            let temp = $(window).width();
                const awardsTap = $(".awards-tap li");
                if(temp < 1100){
                    awardsTap.hide();
                    awardsTap.eq(index).show();
                    awardsTap.eq(index + 1).show();
                }
    }

    let awardsBt = $('.awards-bt');
    awardsBt.click(function(){
        if(awardsState == 'play'){
            awardsState = 'pause'
            clearInterval(awardsTimer);
            awardsBt.find('i').removeClass('icon-pause')
            awardsBt.find('i').addClass('icon-play')
        }else{
            awardsMove(aTSelected);
            awardsBt.find('i').removeClass('icon-play')
            awardsBt.find('i').addClass('icon-pause')
            awardsState = 'play'
        }
    })

    $.each(awardsTapMenu,function(index){
        $(this).click(function(){
            aTSelected = index;
            awardsBar.css('width',0);
            awardscount = 0;
            awardsTapMenu.removeClass('active');
            awardsTapMenu.eq(index).addClass('active');
            swAwards.slideTo(index + 1,500,false);
            if(awardsState == 'play'){
                awardsMove(index)
            }
        })
    })

    let SwFt = new Swiper('.sw-footer',{
        direction: "vertical",
        loop:true,
        autoplay:{
            delay:5000,
        },
        speed: 1000,
        navigation:{
            prevEl: '.sw-ft-prev',
            nextEl: '.sw-ft-next',
        },
        allowTouchMove: false
    })
    $('.sw-ft-pause').click(function(){
        let pause = $(this).find('> i');
        console.log(pause)
        if(pause.hasClass('icon-pause')){
            pause.removeClass('icon-pause')
            pause.addClass('icon-play')
            SwFt.autoplay.stop()
        }else{
            pause.removeClass('icon-play')
            pause.addClass('icon-pause')
            SwFt.autoplay.start()
        }
    })
    const footerDepth1 = $(".footer-depth1 > li");
    const ftGnbBt = $(".footer-depth1>li>span");
    $.each(ftGnbBt,function(index){
        $(this).click(function(){
            ftGnbBt.eq(index).toggleClass("active")
            footerDepth1.eq(index).find(".footer-depth2").stop().slideToggle()
        })
    })
    const goTop = $(".gotop");
    goTop.click(function(){
        scrollTo({
        top : 0,
        left : 0,
        behavior : "smooth"
        })
    })
}
