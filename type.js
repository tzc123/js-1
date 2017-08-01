// js进行模块封装的常用手段，命名空间
//一份代码导出执行，node效率高在于，有部分核心js代码可以前后端通用
var Type = {};
for (var i = 0,type;type = ['String','Array','Number'][i++];){
    console.log(type);
    // 闭包改变了变量的生命周期
    Type['is'+type]=function(obj){
      // 返回真或假
      return Object.prototype.toString.call(obj)==='[object '+type+']';
    }
}
console.log(Type.isArray([1,2,3]));
console.log(Type.isArray(1));
