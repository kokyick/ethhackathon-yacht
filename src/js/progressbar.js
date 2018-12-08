function timer(n) {
    $(".progress-bar").css("width", n+5 + "%");
    $("#pourcentage").text(n+5 + "%");
  }
  $(function (){
    $("#animer").click(function() {
      timer(0);
    });
  });

  //twenty five
  function timert(n) {
    $(".progresst-bar").css("width", n+25 + "%");
    $("#pourcentaget").text(n+25 + "%");
    
  }
  $(function (){
    $("#animertwent").click(function() {
      timert(0);
    });
  });