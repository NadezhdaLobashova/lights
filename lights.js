//$('#red').attr('src', 'empty.png'); ������ �������� �������� src
//$('#red').attr('src'); �������� �������� ��������

$(function() { //���������� �������� ��������
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