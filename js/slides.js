$(function(){
    // 1. 좌우 슬라이드 기능
    const slideList = $(".slide-list")
    // width() : 슬라이드 하나의 가로 크기 가져오기 
    const slideWidth = $(".slide-list li").width()

    // 슬라이드 움직이는 함수
    const moveSlide = ()=>{
        // 움직이는 애니메이션 효과
        slideList.animate({
            marginLeft : -slideWidth // 왼쪽으로 이동 -1000
        }, 1000, // 1초동안 움직임
        // 움직임이 끝난 뒤 실행되는 부분
        function(){
            // 첫 번째 li를 맨 뒤로 보내기
            $(this).append($(this).find("li:first"))
            // marginLeft 값을 다시 0으로 초기화 : 첫 번째 슬라이드를 뒤로 보냈기 때문~ 원래 위치처럼 다시 맞추기위해
            $(this).css({marginLeft:0})

        })
    }
    // 일정 시간마다 계속 반복 실행하는 기능
    setInterval(moveSlide , 3000)

    // // 상하 슬라이드
    // const slideListUp = $(".slide-list-up")
    // const slideHeight = $(".slide-list-up li").outerHeight()
    // // 슬라이드 움직이기
    // const moveUp = ()=>{
    //     slideListUp.animate({
    //         marginTop : -slideHeight
    //     }, 1000,
    // function(){
    //     // $(this).appendTo($(this).find("li:first"))
    //     $(this).find("li:first").appendTo($(this))
    //     $(this).css({marginTop:0})
    // })
    // }
    // setInterval(moveUp, 3000)
    // 2. 상하 슬라이드
    const slideListUp = $(".slide-list-up")
    const slideHeight = $(".slide-list-up li").outerHeight()

    const moveUp = () => {
        slideListUp.animate({ marginTop: -slideHeight }, 1000, function(){
            $(this).find("li:first").appendTo($(this))
            $(this).css({ marginTop: 0 })
        })
    }
    setInterval(moveUp, 3000)

    // 페이드인 페이드아웃
    const slideFade = $(".slide-fade li")
    let current = 0
    const moveFade = ()=>{
        let next = (current + 1) % slideFade.length
        // 현재 0번 슬라이드가 사라짐
        slideFade.eq(current).fadeOut(1000)
        // 1번 슬라이드 나타남
        slideFade.eq(next).fadeIn(1000)
        current = next;
    }
    setInterval(moveFade , 3000)
})