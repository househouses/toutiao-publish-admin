/**
 * 文章请求相关模块
 */

import request from '@/utils/request'

export const getArticles = params=>{
    return request({
        method:'GET',
        url:'/mp/v1_0/articles',
        params
    })
}

export const getChannels = ()=>{
    return request({
        method:'GET',
        url:'/mp/v1_0/channels'
    })
}

export const removeArticle = (articelId)=>{
    return request({
        method:'GET',
        url:`/mp/v1_0/articles/${articelId}`
    })
}