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
  <!--表格-->
  <el-table :data="friendList" border>
    <el-table-column label="序号" type="index" width="60"></el-table-column>
    <el-table-column label="头像" width="80">
      <template v-slot="scope">
        <el-avatar shape="square" :size="50" fit="contain" :src="scope.row.avatar"></el-avatar>
      </template>
    </el-table-column>
    <el-table-column label="昵称" prop="nickname"></el-table-column>
    <el-table-column label="描述" prop="description"></el-table-column>
    <el-table-column label="站点" prop="website"></el-table-column>
    <el-table-column label="是否公开" width="100">
      <template v-slot="scope">
        <el-switch v-model="scope.row.published" @change="friendPublishedChanged(scope.row)"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="浏览次数" prop="views" width="100"></el-table-column>
    <el-table-column label="创建时间" width="170">
      <template #default="scope">{{ dateFormat(scope.row.createTime) }}</template>
    </el-table-column>
    <el-table-column label="更新时间" width="170">
      <template #default="scope">{{ dateFormat(scope.row.updateTime) }}</template>
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template #default="scope">
        <el-button type="primary" :icon="Edit" size="small" @click="showEditDialog(scope.row)">编辑</el-button>
        <el-popconfirm title="确定删除吗？" :icon="Delete" iconColor="red"
                       @confirm="deleteFriendById(scope.row.id)">
          <template #reference>
            <el-button size="small" type="danger" :icon="Delete">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

  <!--分页-->
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                 :current-page="queryInfo.current" :page-sizes="[10, 20, 30, 50]" :page-size="queryInfo.size"
                 :total="total" layout="total, sizes, prev, pager, next, jumper" background>
  </el-pagination>

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

  <!--编辑友链对话框-->
  <el-dialog title="编辑友链" width="40%" v-model="editDialogVisible" :close-on-click-modal="false"
             @close="editDialogClosed">
    <!--内容主体-->
    <el-form :model="editForm" :rules="formRules" ref="editFormRef" label-width="80px">
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="editForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="editForm.description"></el-input>
      </el-form-item>
      <el-form-item label="网站" prop="website">
        <el-input v-model="editForm.website"></el-input>
      </el-form-item>
      <el-form-item label="头像URL" prop="avatar">
        <el-input v-model="editForm.avatar"></el-input>
      </el-form-item>
      <el-form-item label="是否公开">
        <el-switch v-model="editForm.isPublished"></el-switch>
      </el-form-item>
    </el-form>
    <!--底部-->
    <span slot="footer">
				<el-button @click="editDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editFriend">确 定</el-button>
			</span>
  </el-dialog>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {addFriend, getFriendsByQuery, updateCommentEnabled, updateFriend, delFriendById} from "@/api/friend";
import {myElNoteMessage} from "@/utils/myMessage";
import {Delete, Edit, Plus} from "@element-plus/icons-vue";
import {dateFormat} from "@/utils/date";

const friendList = ref([]);
const total = ref(0);
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
const queryInfo = reactive({
  current: 1,
  size: 10
})
const formRules = {
  nickname: [{required: true, message: '请输入昵称', trigger: 'blur'}],
  description: [{required: true, message: '请输入描述', trigger: 'blur'}],
  website: [{required: true, message: '请输入网站', trigger: 'blur'}],
  avatar: [{required: true, message: '请输入头像URL', trigger: 'blur'}],
}
const addDialogVisible = ref(false);
const editDialogVisible = ref(false);
const editFormRef = ref();
let editForm = ref({
  nickname: '',
  description: '',
  website: '',
  avatar: '',
  isPublished: true
});

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
        getFriendList();
      })
    }
  });
}
// 获取友链列表
const getFriendList = () => {
  getFriendsByQuery(queryInfo).then(res => {
    friendList.value = res.data.recordList;
    total.value = res.data.count;
  })
}
const showEditDialog = (row: any) => {
  if (row !== undefined) {
    editForm.value = {...row};
    editDialogVisible.value = true
  }
}
const editDialogClosed = () => {
  editFormRef.value.resetFields();
}
// 修改友链
const editFriend = () => {
  editFormRef.value.validate((valid: boolean) => {
    if (valid) {
      updateFriend(editForm.value).then((res: any) => {
        getFriendList()
        myElNoteMessage("友链修改成功", res.msg)
        editDialogVisible.value = false
      }).catch((err: any) => {
        myElNoteMessage("友链修改失败", err.message, 'error')
      });
    }
  })
}
// 删除友链
const deleteFriendById = (id: number) => {
  delFriendById(id).then(res => {
    getFriendList()
    myElNoteMessage("友链删除成功", res.msg)
  }).catch(err => {
    myElNoteMessage("友链删除失败", err.message, 'error')
  });
}

const handleSizeChange = (newSize: number) => {
  queryInfo.size = newSize
  getFriendList()
}
const handleCurrentChange = (newPage: number) => {
  queryInfo.current = newPage
  getFriendList()
}
onMounted(() => {
  getFriendList()
})
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