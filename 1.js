

var i = 0 //opacité pour la fonction run
var back=0 //pour la fontcion back;
replace0()
function replace0(){ //affichage de base
$(".buttons").empty();
$(".text").empty();
$(".text").append("Are you lost ?");
// $( "#1" ).css("font-size","40px"); EXEMPLE ECRITURE CSS
$(".buttons").append("<button id = '1'>Yes</button><button id = '2'>No</button>");
//inventory
$('.inventory').append("<p>Inventory:</p>");
//click on yes
$( "#1" ).on("click",replace1);
//click on no
$( "#2" ).on("click",replace2);
}

$('#back').click(function(){
    var fct = [replace0,replace1,replace2,replace3]
    fct[back]();

	/*window.replace1()
	window["replace1"](); */ 
	window["replace"+back]();    
    /*if(back==1){
    	replace1();
    }else if (back==2){
    	replace2();
    }else if (back==3){
    	replace3();
    }*/
}); 


$('#reset').click(function(){
    location.reload();
});


	
function replace1(){
	back = 0
	$(".text").css("margin-top","50vh");
	$(".text").empty();
	$(".buttons").empty();
	$(".text").append("Can I help you ?");
 	$( ".buttons" ).append('<button id = "1">Yes</button>');
 	$( ".buttons" ).append('<button id = "2">No thanks.</button>');
 	$( "#1" ).on("click",replace3);
 	
}

function replace2(){
	back = 1
	$(".text").empty();
	$(".text").append("I think you are. Why are you here ?");
	$( "#1" ).replaceWith("<button id = '1'>I don't know.</button>")
  	$( "#2" ).replaceWith('<button id = "2">test2</button>');
  	$( "#1" ).on("click",replace1);
  	back = 1
}

function replace3(){ //run
	back = 2
	if (i<10){
	var j = "0."+i;
	$(".text").css("margin-top","20vh");
	$(".text").empty();
	$('.text').prepend('<img id="girl" src="girl.png"><p>Someone if following you</p></img>')
	$(".buttons").empty();
	$(".buttons").append("<button id = '1'>Run</button>");
	$("#girl").css("opacity",j);
	$( "#1" ).on("click",replace3);
	i=i+1;
	}else{
		$("#girl").css("opacity","1");
		$(".buttons").empty();
		$(".buttons").append("<button id = '1'>Touch her</button>");
		$(".buttons").append("<button id = '2'>Talk to her</button>");
		$( "#1" ).on("click",replace4);
	}
}

hand = 0
function replace4(){
	$(".text").empty();
	$(".text").css("margin-top","50vh");
	$(".text").append("She cuts your hand off, then she runs away !");
	$( "#1" ).replaceWith("<button id = '1'>Pick it up</button>");
  	$( "#2" ).replaceWith('<button id = "2">Leave it</button>');
  	$( "#1" ).on("click",replace5)
  	$( "#2" ).on("click",replace6)

}

// function replace5(){
// 	hand = 0
// 	console.log(hand)
	
// }

// function replace6(){
// 	hand = 1
// 	console.log(hand)
// }