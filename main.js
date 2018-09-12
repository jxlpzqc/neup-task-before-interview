$(document).ready(function() {
    $(".row-right").animate({'width':'500'},1000);
    console.log("我不太能明白navbar浮动在banner上方啥意思，就做成了滚动高度大于某个值变身固定在页面顶端的效果");
    console.log("我不太能明白两栏布局，右边宽度在加载时候发生变化是啥意思，所以就做了页面加载完成宽度从0变成500px的效果");
    console.log("还有我觉得全页填充布局有点丑，就两侧留了10%的边距，希望不会违背题意思");
    
    var bannerHeight = 300;
    
    $(window).scroll(function() {
        if($(document).scrollTop()>bannerHeight) {
            $(".navbar").addClass("navbar-fixed");
        }else{
            $(".navbar").removeClass("navbar-fixed");
        }
        
    })
    
})

function btnclick(){
    alert("I extremly love neup!虽然写过的网页也蛮多的，但可能我的理解题目能力比较差劲，页面不符合题目意思，具体的问题打印到console里了，希望学长们能看看哦");
    
}

