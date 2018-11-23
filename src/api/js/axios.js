//引入axios
import Vue from "vue"
import axios from "axios"
import {Toast} from "mint-ui"
import "mint-ui/lib/style.css"
Vue.component(Toast.name, Toast)
axios.interceptors.request.use(//header拦截器
    // 在发送请求之前做些什么
    config => {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (window.localStorage.token) {
            config.headers = {
                "unique-code": window.localStorage.token,
                "accessKey": "22768533-b742-4a76-bb04-a138020e3905",
                "terminal-source": "WEB"
            }
        }
        return config;
    },
    err => {// 对请求错误做些什么
        return Promise.reject(err);
    });

axios.interceptors.response.use(response => {// 对响应数据做点什么
    return response
}, err => {// 对响应错误做点什么

    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                Toast({
                    message: "错误请求",
                    position: "bottom"
                });
                break;
            case 401:
                Toast({
                    message: "未授权，请重新登录",
                    position: "bottom"
                });
                break;
            case 403:
                Toast({
                    message: "拒绝访问",
                    position: "bottom"
                });
                break;
            case 404:
                Toast({
                    message: "请求错误,未找到该资源",
                    position: "bottom"
                });
                break;
            case 405:
                Toast({
                    message: "请求方法未允许",
                    position: "bottom"
                });
                break;
            case 408:
                Toast({
                    message: "请求超时",
                    position: "bottom"
                });
                break;
            case 500:
                Toast({
                    message: "服务器端出错",
                    position: "bottom"
                });
                break;
            case 501:
                Toast({
                    message: "网络未实现",
                    position: "bottom"
                });
                break;
            case 502:
                Toast({
                    message: "网络错误",
                    position: "bottom"
                });
                break;
            case 503:
                Toast({
                    message: "服务不可用",
                    position: "bottom"
                });
                break;
            case 505:
                Toast({
                    message: "http版本不支持该请求",
                    position: "bottom"
                });
                break;
            default:
                Toast({
                    message: `连接错误${err.response.status}`,
                    position: "bottom"
                });
        }
    } else {

        Toast({
            message: "连接到服务器失败",
            position: "bottom"
        });
    }
    return Promise.resolve(err.response)
})
export {axios}