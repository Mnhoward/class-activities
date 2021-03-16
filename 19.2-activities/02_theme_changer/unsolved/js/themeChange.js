$(".themeChange").on("click", function(){
    if ($(this).hasClass("regular")){ 
        $("#theme").attr("href","css/blank.css")
        console.log("It works!");
    }
    
    else if ($(this).hasClass("blue")){ 
        $("#theme").attr("href","css/blue.css")
        console.log("holy blue!");
    }

    else if ($(this).hasClass("dark")){
        $("#theme").attr("href","css/blue.css")
        console.log("it's very dark!");
    }
      } )
      
      
       

  