// 插件
// 防抖
let myplugin = function (Vue) {
    Vue.prototype.debouncefn = function (ff, wait) {
        var timer = null;
        return function () {
            clearTimeout(timer)
            timer = setTimeout(function () {
                ff()
            }, wait)
        }
    }
    Vue.prototype.throttlefn = function (ff, wait) {
        console.log("===");
    }
}
export default myplugin