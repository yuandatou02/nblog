<template>
  <!--添加-->
  <el-form inline>
    <el-form-item>
      <el-button type="primary" size="large" :icon="Plus" @click="addDialogVisible=true">添加友链</el-button>
    </el-form-item>
    <el-form-item class="mr-20px">
      <el-switch size="large" v-model="infoForm.commentEnabled" active-text="页面评论"
                 @change="commentEnabledChanged"></el-switch>
    </el-form-item>
  </el-form>
  <!--  &lt;!&ndash;表格&ndash;&gt;-->
  <!--  <el-table>-->
  <!--    <el-table-column label="序号" type="index" width="80"></el-table-column>-->
  <!--    <el-table-column label="头像" width="80">-->
  <!--      <template v-slot="scope">-->
  <!--        <el-avatar shape="square" :size="50" fit="contain" :src="scope.row.avatar"></el-avatar>-->
  <!--      </template>-->
  <!--    </el-table-column>-->
  <!--    <el-table-column label="昵称" prop="nickname"></el-table-column>-->
  <!--    <el-table-column label="描述" prop="description"></el-table-column>-->
  <!--    <el-table-column label="站点" prop="website"></el-table-column>-->
  <!--    <el-table-column label="是否公开" width="100">-->
  <!--      <template v-slot="scope">-->
  <!--        <el-switch v-model="scope.row.published" @change="friendPublishedChanged(scope.row)"></el-switch>-->
  <!--      </template>-->
  <!--    </el-table-column>-->
  <!--    <el-table-column label="浏览次数" prop="views" width="100"></el-table-column>-->
  <!--    <el-table-column label="创建时间" width="170">-->
  <!--      <template v-slot="scope">{{ scope.row.createTime | dateFormat }}</template>-->
  <!--    </el-table-column>-->
  <!--    <el-table-column label="操作" width="200">-->
  <!--      <template v-slot="scope">-->
  <!--        <el-button type="primary" icon="el-icon-edit" size="small" @click="showEditDialog(scope.row)">编辑</el-button>-->
  <!--        <el-popconfirm title="确定删除吗？" icon="el-icon-delete" iconColor="red"-->
  <!--                       @onConfirm="deleteFriendById(scope.row.id)">-->
  <!--          <el-button size="small" type="danger" icon="el-icon-delete" slot="reference">删除</el-button>-->
  <!--        </el-popconfirm>-->
  <!--      </template>-->
  <!--    </el-table-column>-->
  <!--  </el-table>-->

  <!--添加友链对话框-->
  <el-dialog title="添加友链" width="40%" v-model="addDialogVisible" :close-on-click-modal="false"
             @close="addDialogClosed">
    <!--内容主体-->
    <el-form :model="addForm" :rules="formRules" ref="addFormRef" label-width="80px">
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="addForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="addForm.description"></el-input>
      </el-form-item>
      <el-form-item label="网站" prop="website">
        <el-input v-model="addForm.website"></el-input>
      </el-form-item>
      <el-form-item label="头像URL" prop="avatar">
        <el-input v-model="addForm.avatar"></el-input>
      </el-form-item>
      <el-form-item label="是否公开" prop="published">
        <el-switch v-model="addForm.isPublished"></el-switch>
      </el-form-item>
    </el-form>
    <!--底部-->
    <span slot="footer">
				<el-button @click="addDialogVisible=false">取 消</el-button>
				<el-button type="primary" @click="saveFriend">确 定</el-button>
			</span>
  </el-dialog>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {addFriend, updateCommentEnabled} from "@/api/friend";
import {myElNoteMessage} from "@/utils/myMessage";
import {Plus} from "@element-plus/icons-vue";

const addFormRef = ref();
const addForm = reactive({
  nickname: '',
  description: '',
  website: '',
  avatar: '',
  isPublished: true
});
const addDialogClosed = () => {
  addFormRef.value.resetFields();
}
const formRules = {
  nickname: [{required: true, message: '请输入昵称', trigger: 'blur'}],
  description: [{required: true, message: '请输入描述', trigger: 'blur'}],
  website: [{required: true, message: '请输入网站', trigger: 'blur'}],
  avatar: [{required: true, message: '请输入头像URL', trigger: 'blur'}],
}
const addDialogVisible = ref(false);
const infoForm = reactive({
  content: '',
  commentEnabled: true,
});
const commentEnabledChanged = () => {
  updateCommentEnabled(infoForm.commentEnabled).then(res => {
    myElNoteMessage("修改成功", res.msg);
  });
}
// 保存友链链接
const saveFriend = () => {
  addFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      await addFriend(addForm).then(res => {
        //this.getFriendList()
        myElNoteMessage("添加成功", res.msg)
      }).catch(err => {
        myElNoteMessage("添加失败", err.message, 'error')
      }).finally(() => {
        addDialogVisible.value = false;
      })
    }
  });
}
</script>

<style scoped lang="scss">
.el-button + span {
  margin-left: 10px;
}

.el-form {
  margin-top: 15px !important;
}

.el-form--inline .el-form-item {
  margin-bottom: 0;
}
</style>