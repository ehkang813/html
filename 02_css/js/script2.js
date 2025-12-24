$(function(){

    $(".wrap").css({"display": "flex","justify-content": "center","gap": 10,"margin-bottom": 50})

    $("ul").css({"display":"flex","justify-content": "center","margin": "0 auto","gap":20})
    $("li").css({"list-style":"none"})
    $(".box1").css({"width":200,"height":200,"border":"1px solid #000","background":"red"})
    $(".box2").css({"width":200,"height":200,"border":"1px solid #000","background":"orange"})
    $(".box3").css({"width":200,"height":200,"border":"1px solid #000","background":"yellow"})
    $(".box4").css({"width":200,"height":200,"border":"1px solid #000","background":"green"})


// 숨김버튼을 클릭하면 박스 숨기기
    // class="별명"
    // id="별명" ->중복해서 사용하지 않을때
    $("#btn1").click(function(){
        $("ul li:first-child").hide()
    })
})

// 보이기 버튼을 클릭하면 박스 보이기
    $("#btn2").click(function(){
        $("ul li:first-child").show()
    })

// 토글(보이기/숨김)버튼을 클릭하면  노란 박스(nth-child)를 이벤트
    $("#btn3").click(function(){
        $("ul li:nth-child(3)").toggle()
    })

//네번째 박스 100X100버튼을 클릭하면 크기를 줄임
    $("#btn4").click(function(){
        $("ul li:last-child").width(100)
        $("ul li:last-child").height(100)
    })
    
    // 다섯번째 박스 클릭하면 원래대로
    $("#btn5").click(function(){
        $("ul li:last-child").width(200)
        $("ul li:last-child").height(200)
    })