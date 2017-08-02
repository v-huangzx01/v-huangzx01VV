define(["app"], function(app) {
	app.filter('gerFilter', function(){
		return function(a, b){
			if(a == 1){
				return "哈哈";
			}else if(a == 2){
				return "嘿嘿";
			}else{
				return "呵呵";
			}
		}
	});
})