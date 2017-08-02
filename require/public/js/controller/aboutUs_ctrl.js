define(['app', 'js/filter/ger_filter'], function(app) {
    app.controller('AboutUsCtrl', function($rootScope, $scope, $routeParams, $localStorage, $location) {
        var self = this;

        self.arrList = [
            {
                sex : 0
            },{
                sex : 1
            },{
                sex : 2
            }
        ];

        //初始化轮播插件
        var mySwiper = new Swiper('.swiper-container',{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            preloadImages: true,
            loop : true
        });
    });
});