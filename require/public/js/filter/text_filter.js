define(["app"], function(app) {
	app.filter('sexFilter', function(){
		return function(a, b){
			if(a == 1){
				return "男";
			}else if(a == 2){
				return "女";
			}else{
				return "未知";
			}
		}
	});
})