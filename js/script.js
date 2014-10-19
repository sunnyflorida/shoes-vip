/*

СЛАЙДЕР 

Настройки скрипта:

hwSlideSpeed - Скорость анимации перехода слайда.
hwTimeOut - время до автоматического перелистывания слайдов.
hwNeedLinks - включает или отключает показ ссылок "следующий - предыдущий". Значения true или false

Подробнее на http://heavenweb.ru/

*/
(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 2000;
var hwNeedLinks = true;

$(document).ready(function(e) {
	$('.slide').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $("#slider .slide").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
		}
if(hwNeedLinks){
var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
	.prependTo('#slider');		
	$('#nextbutton').click(function(){
		animSlide("next");
		return false;
		})
	$('#prewbutton').click(function(){
		animSlide("prew");
		return false;
		})
}
	var $adderSpan = '';
	$('.slide').each(function(index) {
			$adderSpan += '<span class = "control-slide">' + index + '</span>';
		});
	$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
	$(".control-slide:first").addClass("active");
	$('.control-slide').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	$('#slider-wrap').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
});
})(jQuery);


/* ФИЛЬТР ----------------------------------------------------------*/

$(document).ready(function(){
	$(".button36").on("click", function(){
		$("figure").hide();
		$("figure").filter(".size36").show();
	});
});
$(document).ready(function(){
	$(".button37").on("click", function(){
		$("figure").hide();
		$("figure").filter(".size37").show();
	});
});
$(document).ready(function(){
	$(".button38").on("click", function(){
		$("figure").hide();
		$("figure").filter(".size38").show();
	});
});
$(document).ready(function(){
	$(".button39").on("click", function(){
		$("figure").hide();
		$("figure").filter(".size39").show();
	});
});
$(document).ready(function(){
	$(".button40").on("click", function(){
		$("figure").hide();
		$("figure").filter(".size40").show();
	});
});


$(document).ready(function(){
	$(".button_skin").on("click", function(){
		$("figure").hide();
		$("figure").filter(".skin").show();
	});
});
$(document).ready(function(){
	$(".button_not_skin").on("click", function(){
		$("figure").hide();
		$("figure").filter(".not_skin").show();
	});
});
$(document).ready(function(){
	$(".reset").on("click", function(){
		$("figure").show();
	});
});

/* МЕНЮ ----------------------------------------------------------*/

$(function(){
	/*Dropdown menu in*/
	$('.nav_about').click(function(){
		$(".dropdown-inside").slideToggle('fast');
	});

})

$(function(){
	$('.nav_menu').click(function(){
		$(".dropdown_body").slideToggle();
	});
})


/* Модальное окно ----------------------------------------------------------*/
$(document).ready(function() { // вся магия после загрузки страницы
     $('a#btn').click( function(event){ // ловим клик по ссылки с id="go"
         event.preventDefault(); // выключаем стандартную роль элемента
         $('body').css('overflow', 'hidden'); // выключаем скролл
         $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
             function(){ // после выполнения предъидущей анимации
                 $('#modal_form') 
                     .css('display', 'block') // убираем у модального окна display: none;
                     .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
         });
     });
     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
     $('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
         $('body').css('overflow', 'auto'); // включаем скролл
         $('#modal_form')
             .animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                 function(){ // после анимации
                     $(this).css('display', 'none'); // делаем ему display: none;
                     $('#overlay').fadeOut(400); // скрываем подложку
                 }
             );
     });
});



