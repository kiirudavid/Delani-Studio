$(document).ready(function(){
    $("#design").click(function(){
      $(".design").toggle();
    });
  });

  $(document).ready(function(){
    $("#development").click(function(){
      $(".development").toggle();
    });
  });

  $(document).ready(function(){
    $("#product").click(function(){
      $(".product").toggle();
    });
  });




  $(function () {
    $("form#form").on('submit',function(event){
       event.preventDefault();
       let name = $("input#name").val();
      
       if ($("input#name").val()){
           alert ("Hey " + name + ", Thanks for reaching out to us,Will get back to you");
       }
       else {
           alert("Please provide your correct name and email!");
       }

   });



});


  