<template>
  <div>
    <div style="display: flex; justify-content: end">
<!-- 内容待定 -->
    </div>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="id">
        <Input type="text" v-model="editId" v-if="editIndex === -2" />
        <span v-else>{{ row.id }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="name">
        <Input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="gender">
        <Input type="text" v-model="editGender" v-if="editIndex === index" />
        <span v-else>{{ row.gender }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="username">
        <Input type="text" v-model="editUsername" v-if="editIndex === index" />
        <span v-else>{{ row.username }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="schoolname">
        <Input type="text" v-model="editSchoolname" v-if="editIndex === index" />
        <span v-else>{{ row.schoolname }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="email">
        <Input type="text" v-model="editEmail" v-if="editIndex === index" />
        <span v-else>{{ row.email }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="phone">
        <Input type="text" v-model="editPhone" v-if="editIndex === index" />
        <span v-else>{{ row.phone }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="verify">
        <Input type="text" v-model="editVerify" v-if="editIndex === index" />
        <span v-else>{{ row.verify }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="createtime">
        <Input type="text" v-model="editCreateTime" v-if="editIndex === index" />
        <span v-else>{{ row.createtime }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="lastlogin">
        <Input type="text" v-model="editLastlogin" v-if="editIndex === index" />
        <span v-else>{{ row.lastlogin }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <Button size="small" @click="handleSave(index)">保存</Button>
          <Button size="small" @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <Button type="primary" size="small" @click="handleEdit(row, index)"
            >操作</Button
          >
          <Button type="error" size="small" style="margin-left: 10px" @click="remove(index)">删除</Button>
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
import {
  delStu,
  editStu,
  getStuList
} from '@/api/lost/user'
export default {
  name: 'update_paste_page',
  data () {
    return {
      cur: 1,
      size: 100,
      categoryId: '',
      columns: [
        {
          title: 'Id',
          slot: 'id'
        },
        {
          title: '姓名',
          slot: 'name'
        },
        {
          title: '性别',
          slot: 'gender'
        },
        {
          title: '账号',
          slot: 'username'
        },
        {
          title: '学校',
          slot: 'schoolname'
        },
        {
          title: '邮箱',
          slot: 'email'
        },
        {
          title: '手机号',
          slot: 'phone'
        },
        {
          title: '认证',
          slot: 'verify'
        },
        {
          title: '创建时间',
          slot: 'createtime'
        },
        {
          title: '上次登陆',
          slot: 'lastlogin'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data: [],
      editIndex: -1,
      editId: '',
      editName: '',
      editGender: '',
      editUsername: '',
      editSchoolname: '',
      editEmail: '',
      editPhone: '',
      editVerify: '',
      editCreateTime: '',
      editLastlogin: ''
    }
  },
  methods: {
    add () {
      this.data.push({
        name: this.editName,
        description: this.editDes,
        level: 0,
        find: 0,
        count: 0
      })
    },
    update () {
      this.$Notice.success({
        title: '更新数据成功',
        desc: '由于管理员具有修改数据的权限，导致学校数据动态变化。'
      })
    },
    handleEdit (row, index) {
      this.editId = row.id
      this.editName = row.name
      this.editGender = row.gender
      this.editUsername = row.username
      this.editSchoolname = row.schoolname
      this.editEmail = row.email
      this.editPhone = row.phone
      this.editVerify = row.verify
      this.editCreateTime = row.createtime
      this.editLastlogin = row.lastlogin
      this.editIndex = index
    },
    handleSave (index) {
      this.data[index].id = this.editId
      this.data[index].name = this.editName
      this.data[index].gender = this.editGender
      this.data[index].username = this.editUsername
      this.data[index].schoolname = this.editSchoolname
      this.data[index].email = this.editEmail
      this.data[index].phone = this.editPhone
      this.data[index].verify = this.editVerify
      this.data[index].createtime = this.editCreateTime
      this.data[index].lastlogin = this.editLastlogin
      this.editIndex = -1
      editStu(this.data[index]).then((res) => {
        this.$Notice.success({
          title: '更新学生成功',
          desc: ''
        })
      })
    },
    getList () {
      getStuList(this.cur, this.size).then((res) => {
        this.data = res.data.data.stuList
      })
    },
    remove (index) {
      delStu(this.data[index].id).then((res) => {
        console.log(res.data)
      })
      this.$Notice.success({
        title: '删除学生成功',
        desc: ''
      })
      this.data.splice(index, 1)
    }
  },
  created: function () {
    this.getList()
  }
}
</script>

<style>
</style>
