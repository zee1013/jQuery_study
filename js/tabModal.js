$(function(){
    // modal open
    $(".notice ul li:first-child").click(function(){
        // $(".modal").addClass("active")
        $(".modal").show()
    })
    // modal close
    $(".modal-btn").click(function(){
        // $(".modal").removeClass("active")
        $(".modal").hide()
    })
    // 탭 메뉴
    $(".tabMenu>li>a").click(function(){
        // console.log(this);
        $(this).parent().addClass("active").siblings().removeClass("active")
    })
})