import request from "../utils/request"
//发送验证码
export const getCode = (data) => {
    return request.post('/get/code',data)
}
// 注册用户
export const userAuthentication = (data) => {
    return request.post('/user/authentication',data)
}

// 登录页面
export const login = (data) => {
    return request.post('/login',data)
}

// 权限管理列表
export const authAdmin = (params) => {
    return request.get('/auth/admin',{params})
}

//菜单权限数据
export const userGetMenu = () => {
    return request.get('/user/getmenu')
}
// 菜单权限修改
export const userSetMenu = (data) => {
    return request.post('/user/setmenu',data)
}

//菜单权限列表
export const menuList = (params) => {
    return request.get('/menu/list',{params})
}
//权限下拉列表
export const menuSelectList = () => {
    return request.get('/menu/selectlist')
}
//用户数据修改
export const updateUser = (data) => {
    return request.post('/update/user',data)
}

//用户菜单权限
export const menuPermissons = () => {
    return request.get('/menu/permissions')
}
// https://v3pz.itndedu.com/v3pz/photo/list
//用户头像列表
export const photoList = () => {
    return request.get('/photo/list')
}
//陪护师创建
// https://v3pz.itndedu.com/v3pz/companion
export const companion = (data) => {
    return request.post('/companion', data)
}
//陪护列表
//https://v3pz.itndedu.com/v3pz/companion/list
export const companionList = (params) => {
    return request.get('/companion/list',{params})
}
//陪护师删除
//https://v3pz.itndedu.com/v3pz/delete/companion
export const deleteCompanion = (data) => {
    return request.post('/delete/companion', data)
}