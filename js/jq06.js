$(function(){
    // slide Up
    $(".slideUp").click(function(){
        $(".box").slideUp(1000)
    })

    // slide Down
    $(".slideDown").click(function(){
        $(".box").slideDown(1000)
    })

    // slide toggle
    $(".slideToggle").click(()=>{
        $(".box").slideToggle(1000)
    })

    // fade in
    $(".fadeIn").click(()=>{
        $(".box").fadeIn()
    })

    // fade out
    $(".fadeOut").click(()=>{
        $(".box").fadeOut()
    })

    // fade toggle
    $(".fadeToggle").click(()=>{
        $(".box").fadeToggle()
    })

    // hide
    $(".hide").click(()=>{
        $(".box").hide(1000)
    })

    // show
    $(".show").click(()=>{
        $(".box").show(1000)
    })

    // toggle
    $(".toggle").click(()=>{
        $(".box").toggle(1000)
    })
})