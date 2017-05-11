//$('#red').attr('src', 'empty.png'); меняем значение атрибута src
//$('#red').attr('src'); получаем значение атрибута

$(function() { //дожидаемся загрузки страницы
	var status=false;
	var update=function(){
	
		if(status){
			$('#red').attr('src', 'empty.png');
			$('#green').attr('src', 'green.png');
		}else{
			$('#red').attr('src', 'red.png');
			$('#green').attr('src', 'empty.png');
		}
	};
	setInterval(function(){
		status=!status;	
		update();
		
	}, 5000);
	update();
});