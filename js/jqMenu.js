$(function(){
    // console.log(".");

    // 1. classList ====================================================
//     $(".menu>li").hover(function(){
//         $(this).find(".subMenu").addClass("active")
//     },
// function(){
//     $(this).find(".subMenu").removeClass("active")
// })

// 2. toggle classList =================================================
// $(".menu>li").hover(function(){
//     $(this).find(".subMenu").toggleClass("active")
// })
    
// 3. 전체 메뉴slide Down / slide Up =====================================
// $(".menu").hover(function(){
//     $(".subMenu").stop().slideDown(400)
// },
// function(){
//     $(".subMenu").stop().slideUp(400)
// })

// 4. 전체 메뉴 slideToggle ====================================================
// $(".menu").hover(function(){
//     $(".subMenu").stop().slideToggle(400)
// })

// 5. 전체 메뉴 fadeToggle =====================================================
// $(".menu").hover(function(){
//     $(".subMenu").stop().fadeToggle(400)
// })

// 6. 각 서브메뉴 slideToggle =============================================
// $(".menu>li").hover(function(){
//     $(this).find(".subMenu").stop().slideToggle(400)
// })

// 7. 전체 메뉴 + 헤더 배경 ===============================================
// $(".menu").hover(function(){
//     $(".subMenu , .header-bg").stop().slideToggle(400)
// })

// 8. li 서브메뉴 + 헤더 배경 ==============================================
$(".menu>li").hover(function(){
    $(this).find(".subMenu").stop().slideDown(400)
    $(".header-bg").stop().slideDown(400)
},
function(){
    $(this).find(".subMenu").stop().slideUp(400)
    $(".header-bg").stop().slideUp(400)
})
})