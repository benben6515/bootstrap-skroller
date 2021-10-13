$(window).scroll(function(evt){
  if($(window).scrollTop()>0){
    $(".navbar").removeClass("navbar-top");
    $(".navbar").addClass("bg-light");
    $(".navbar").addClass("navbar-light");
  } else {
    $(".navbar").addClass("navbar-top");
    $(".navbar").removeClass("bg-light");
    $(".navbar").removeClass("narbar-light");    
  }
});

// skrollor 初始化
var s = skrollr.init();

// 手機板 skrollor 套件的問題
document.body.id = "skrollr-body"