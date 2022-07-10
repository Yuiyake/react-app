//
import { makeAutoObservable } from 'mobx'
import {http} from "@/utils";
import * as url from "url";

class LoginStore {
    token = ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    setToken = async ({mobile, password}) => {
        //  调用登陆接口，把token存入
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile, password
        })
        this.token = res.data
    }
}

export default LoginStore
