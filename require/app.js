/**
 * require启动配置。
 * */
require.config({
	baseUrl: 'public',
	paths: {
		'bootstrap': '../lib/bootstrap.min',
		'angularAMD': '../lib/angularAMD.min',
		'angular-route': '../lib/angular-route.min',
		'swiper': '../lib/swiper.min',
		'price': 'js/route/price',
	}
});

/**
 * 实例化angular 并初始化
 * */
define(['angularAMD', 'angular-route', 'swiper', 'price', 'bootstrap'], function(angularAMD) {
	var app = angular.module('mjq-wx', ['ngRoute', 'PlatformRoutemModule', 'ngStorage']);
	
	app.config(function($routeProvider, $platformRouteProvider){
		var platformRoute = $platformRouteProvider.getPlatformRouteList();
		if (!angular.isUndefined(platformRoute) && platformRoute.length > 0) {
			angular.forEach(platformRoute, function(v, k){
				$routeProvider.when(
						platformRoute[k].path, angularAMD.route({
							title: platformRoute[k].title,
							templateUrl: platformRoute[k].templateUrl,
							controller: platformRoute[k].controller,
							controllerUrl: platformRoute[k].controllerUrl,
							controllerAs : platformRoute[k].controllerAs
						})
				)
			});
		}

		$routeProvider.otherwise({
            redirectTo: '/serveYou'
        });
	});

	//全局运行事件
	app.run(function($rootScope, $location, $localStorage, $timeout) {
		//默认用户信息（测试）
	    $localStorage.userInfo = {
            openid : "oT4-bwXQtVpeeunhblovVrA7zdoA",
            nickname : "麦麦",
            headimgurl : "http://wx.qlogo.cn/mmopen/Q3auHgzwzM6VaEVyzZyQbEWfphf1zc5yLZMfw7QCQsQfLrwEmGkvZaTbzyaSNg20iac7aPcibBAMlfL81fJoacqQiamxeluD4JfIibtqY9YeGzI/0"
        };

		$rootScope.$on('$routeChangeStart', function(event, next) {
			if (!angular.isUndefined(next.$$route)) {
				$rootScope.title = next.title;
			}
		});

		//显示错误信息
	    $rootScope.showError = function (errorName) {
	        if($("#showerror_div").html() == ""){
	            var hint = $("#showerror_div");
	            $("#showerror_div").html(errorName).show();
	            hint.css('marginLeft', -(hint.width() / 2));
	            hint.css('marginLeft', -(hint.width() / 2));
	            $timeout(function(){
	                $("#showerror_div").hide().html("");
	            },3000)
	        }
	    };
	});

	return angularAMD.bootstrap(app);
});