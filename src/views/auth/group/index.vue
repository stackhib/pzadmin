<template>
    <button @click="dialogFormVisible = true">打开</button>
    <el-dialog v-model="dialogFormVisible" :before-close="beforeClose" title="添加权限" width="500">
        <el-form ref="formRef" label-width="100px" label-position="left" :model="form" :rules="rules"
        
        >
        <el-form-item v-show="false" prop="id">
            <el-input v-model = "form.id" />
        </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="form.name" placeholder="请输入权限名称"></el-input>
            </el-form-item>
            <el-form-item label="权限" prop="permissions">
                <el-tree 
                ref = 'treeRef'
                style="max-width: 600px;" :data="permissionData" node-key="id" show-checkbox
                    :default-checked-keys="defaultKeys" 
                    :default-expand-keys="[2]"
                    />
            </el-form-item>


        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click = "confirm()">确认</el-button>
            </div>
        </template>
    </el-dialog>

</template>

<script setup>
    import {ref,reactive,onMounted} from 'vue'
    import { userGetMenu,userSetMenu } from '../../../api'
    onMounted(()=>{
        //获取树形菜单权限数据
        userGetMenu().then(({data}) => {
            console.log(data)
            permissionData.value = data.data
        })
    })

    const formRef = ref()

    //form数据
    const form = reactive({
        id:'',
        name: '',
        permissions: ''
    })
    //树形菜单权限数据
    const permissionData = ref([])

    //弹窗的显示与隐藏
    const dialogFormVisible = ref(false)

    //关闭弹窗
    const beforeClose = () => {
        dialogFormVisible.value = false
    
    }
    // 选中权限

    const defaultKeys = [4,5]
    const treeRef = ref()
    const  rules =reactive ({
        name :[{required:true,message:'请输入权限名称',trigger:'blur'}],
    })
    //表单提交
    const confirm = async (formEl) =>{
        if (!formEl) return
        await formEl.validate((valid,fields)=>{
            if(valid) {
                //获取选中的权限
                const permissions = JSON.stringify(treeRef.value.getCheckedKeys())
                userSetMenu({name:form.name,permissions,id:form.id
                }).then(({data}) => {
                    console.log(data)
                })
            }
            else {
                console.log('error submit',fields)
            }
        })
    }
</script>


<style lang="less" scoped>
/* 样式 */
</style>
<!-- <template></template> -->