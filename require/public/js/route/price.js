angular.module("PlatformRoutemModule", []).provider("$platformRoute", function() {
    /**
     * 路由配置
     * */
    this.getPlatformRouteList = function() {
        return [
            {
                title: "名匠圈",
                path: "/serveYou",
                templateUrl: "view/serveYou.html",
                controller: "ServeYouCtrl",
                controllerUrl: "public/js/controller/serveYou_ctrl.js",
                controllerAs: "ctrl"
            },{
                title: "关于我们",
                path: "/aboutUs",
                templateUrl: "view/aboutUs.html",
                controller: "AboutUsCtrl",
                controllerUrl: "public/js/controller/aboutUs_ctrl.js",
                controllerAs: "ctrl"
            }
        ];
    };

    this.$get = function() {

    };

    return this;
});