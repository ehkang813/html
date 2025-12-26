$(function(){
// $("선택자").실행할 함수이름
$(".family .family_list").hide()
$(".family2 .family_list").hide()

// 1번째 패밀리 버튼을 클릭하면 family_list가 보임/안보임
$(".family button").click(function(){
    $(".family2 .family_list").hide();
    $(".family .family_list").toggle()

})

$(".family2 button").click(function(){
    $(".family .family_list").hide();
    $(".family2 .family_list").toggle()

})

})