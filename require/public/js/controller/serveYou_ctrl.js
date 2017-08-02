define(['app', 'js/filter/text_filter'], function(app) {
    app.controller('ServeYouCtrl', function($rootScope, $scope, $routeParams, $localStorage, $location) {
        var self = this;

        // 设置默认数据
        self.arrList = [
        	{
        		sex : 0
        	},{
        		sex : 1
        	},{
        		sex : 2
        	},{
                sex : 1
            }
        ];

        self.spikHomePage = function(){
            $location.url("/aboutUs?id=" + 1);
        }
    });
});