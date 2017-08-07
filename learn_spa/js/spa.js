// Single Page Application
//在一页中，动态加载内容，用户感觉不到浏览器的刷新
//立即执行函数可以用于构造对象和类
var spa = (function() {
  var _selfA = 1;
  var initModule = function ($container) {
    spa.shell.initModule($container);
  }
  return {
    initModule
  }
})();
