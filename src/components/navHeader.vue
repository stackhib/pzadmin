<template>
    <div class="header-container" >
        <div class="header-left flex-box">
            <el-icon class="icon" size="20" @click="store.commit('collapseMenu')">
                <Fold />
            </el-icon>
            <ul class="flex-box">
                <li v-for="(item,index) in selectMenu"
                :key = 'item.path'
                :class = '{selected : route.path === item.path}'
                class="tab flex-box">
             <el-icon class="icon" size="12"> 
                <component class="text flex-box" :is = 'item.icon' />
            </el-icon>
            <router-link class ='text flex-box ' :to ="{path :item.path}">
                 {{ item.name }}
            </router-link>
           
            <el-icon class="close  " size="12" @click="closeTab(item,index)" >
                <Close />
            </el-icon>
            </li>
            </ul>
        </div>
        <div class="header-right">
            <el-dropdown>
                <div class="el-dropdown-link flex-box">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
                    <p class="user-name">admin</p>
                </div>
                <span class="el-dropdown-link">
                    Dropdown List
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'

const store = useStore()

const route = useRoute()
const router = useRouter()
const selectMenu = computed(()=>store.state.menu.selectMenu)
//关闭tag
const closeTab = (item,index) => {
    store.commit('closeMenu',item)
    //如果删除非当前页，不操作
    if (route.path !== item.path){
        return 
    }
    const selectMenuData = selectMenu.value
    if(index === selectMenuData.length){
        //tag只有一个，跳转根目录
        if(!selectMenuData.length){
            router.push('/')
        }
        else {
            router.push({
                path:selectMenuData[index-1].path
            })
        }
    }
    else {
        //删除中间时，向前移动一位，注意拿到的是删除以后的数据进行判断的
        router.push({
            path:selectMenuData[index].path
        })
    }
}
</script>


<style lang="less" scoped>
.flex-box {
    display: flex;
    align-items: center;
    height: 100%;
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #fff;
    padding-right: 25px;
    .header-left {
        height: 100%;
        .icon {
            width: 45px;
            height: 100%;
        }
        .icon:hover {
            background-color: #f5f5f5;
            cursor: pointer;
        }
        .tab {
            padding: 0 10px;
            height: 100%;
            .text {
                margin: 0 5px;
            }
            .close {
                visibility: hidden;
            }
            &.selected {
                a {
                    color: #409eff;
                }
                i {
                    color: #409eff;
                }
                background-color: #f5f5f5;
            }
        }
        .tab:hover {
            background-color: #f5f5f5;
            .close {
                visibility: inherit;
                cursor: pointer;
                color: #000;
            }
        }
    }
    .header-right {
        .user-name {
            margin-left: 10px;
        }
    }
    a {
        height: 100%;
        color: #333;
        font-size: 15px;
    }
}

</style>