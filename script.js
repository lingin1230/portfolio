

$('#nav-btn').click(function () {
    $(this).toggleClass('spin');
})


const instaContent = document.getElementById('insta-content');


axios
    .get('https://graph.instagram.com/me/media?fields=media_url,timestamp&access_token=IGQVJYWnVsSnVTRmY0M083NmdhZAkNJQjFtcnBDbkFiX2hHR0J1TjVFclRBalFsV0dEb0g5NE81VjhIbkZANUmpaaW5OYWZAKTjFCd3FOeFh3STN3RG14ZA1FVWlRpeExOVWVtd0NuYzF3')
    .then(res => {
        console.log('成功' , res);
        // console.log(res.data.data[0].media_url);

        res.data.data.forEach( function (t) {
            // console.log(t.media_url);
            instaContent.innerHTML +=
            `
            <a class="pic-src" target="_blank" href="${t.media_url}">
                <img class="insta-pic" src="${t.media_url}">
            </a>
            `
        });
    })
    .catch( err => {
        console.log('失敗' , err);
    });



$('#nav1').click(function () {
    $('.insta-scroll').removeClass('tap2');
    $('.insta-scroll').removeClass('tap3');
    $('.insta-scroll').addClass('tap1');
});
$('#nav2').click(function () {
    $('.insta-scroll').removeClass('tap1');
    $('.insta-scroll').removeClass('tap3');
    $('.insta-scroll').addClass('tap2');
});
$('#nav3').click(function () {
    $('.insta-scroll').removeClass('tap1');
    $('.insta-scroll').removeClass('tap2');
    $('.insta-scroll').addClass('tap3');
});

// 各區域高度
let headerH = document.getElementById('header').offsetHeight;
let bannerH = document.getElementById('banner').offsetHeight;
let descriptH = document.getElementById('descript').offsetHeight;
let devH = document.getElementById('web-development').offsetHeight;
let workH = document.getElementById('work').offsetHeight;

// Banner 區域元素
let bannerHello = document.getElementById('banner-hello');
let bannerBg= document.getElementById('banner-bg');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot4 = document.getElementById('dot4');
let dot5 = document.getElementById('dot5');
let dot6 = document.getElementById('dot6');




window.addEventListener('scroll' , function () {

    let y = scrollY;
    let w = window.innerWidth;
 
    // Banner 動畫效果
    bannerHello.style ='margin-top:-' + y / 2 + 'px';
    bannerBg.style ='margin-top:' +  (y / 5 - 50)  + 'px';

    dot1.style = 'margin-top: ' + (y / 2 - 25) + 'px';
    dot2.style = 'margin-top:' + (- y / 5  + 100) + 'px';
    dot4.style = 'margin-top: ' + (- y / 2 + 350) + 'px';
    dot5.style = 'margin-top: ' + (y / 4 + 275) + 'px';
    dot6.style = 'margin-top: ' + (- y / 10 + 250) + 'px';
    if (w < 992) {
        dot1.style = 'margin-top: ' + (y / 2 - 25) + 'px';
        dot2.style = 'margin-top:' + (- y / 5  + 80) + 'px';
        dot4.style = 'margin-top: ' + (- y / 2 + 275) + 'px';
        dot5.style = 'margin-top: ' + (y / 4 + 180) + 'px';
        dot6.style = 'margin-top: ' + (- y / 10 + 200) + 'px';
    }
    if (w < 768) {
        dot2.style = 'margin-top:' + (- y / 5  + 70) + 'px';
        dot4.style = 'margin-top: ' + (- y / 2 + 300) + 'px';
        dot5.style = 'margin-top: ' + (y / 4 + 160) + 'px';
        dot6.style = 'margin-top: ' + (- y / 10 + 180) + 'px';
    }
    if (w < 415) {
        dot2.style = 'margin-top:' + (- y / 5  + 50) + 'px';
        dot4.style = 'margin-top: ' + (- y / 2 + 225) + 'px';
        dot5.style = 'margin-top: ' + (y / 4 + 120) + 'px';
        dot6.style = 'margin-top: ' + (- y / 10 + 150) + 'px';
    }
    if (w < 321) {
        dot4.style = 'margin-top: ' + (- y / 2 + 200) + 'px';
        dot5.style = 'margin-top: ' + (y / 4 + 90) + 'px';
    }

    // Descript 動畫效果
    if (y > headerH + bannerH / 3) {
        $('#descript').addClass('active');
    }

    // Work 動畫效果
    if (y > headerH + bannerH + descriptH / 3) {
        $('#web-development').addClass('active');
    }
    if (y > headerH + bannerH + descriptH / 3 + devH * 1) {
        $('#web-optimization').addClass('active');
    }
    if (y > headerH + bannerH + descriptH / 3 + devH * 2 + 150) {
        $('#graphic-design').addClass('active');
    }
    if (y > headerH + bannerH + descriptH / 3 + devH * 3 + 300) {
        $('#photography').addClass('active');
    }

    //浮動按鈕
    if (y > headerH + bannerH + descriptH + workH) {
        $('#to-top').addClass('active');
    } else if (y < headerH + bannerH + descriptH + workH) {
        $('#to-top').removeClass('active');
    }

});










