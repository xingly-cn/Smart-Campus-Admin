<template>
  <div>
    <div style="display: flex; justify-content: end">
      <Button type="info" style="margin-bottom: 5px" @click="add"
        >添加学校</Button
      >
      <Button
        type="success"
        style="margin-left: 20px; margin-bottom: 5px"
        @click="update"
        >更新数据</Button
      >
    </div>
    <p>TODO：更新数据接口</p>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="id">
        <Input type="text" v-model="editId" v-if="editIndex === -2" />
        <span v-else>{{ row.id }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="name">
        <Input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>
      <template slot-scope="{ row }" slot="stu">
        <Input type="text" v-model="editStu" v-if="editIndex === -2" />
        <span v-else>{{ row.stu }}</span>
      </template>
      <template slot-scope="{ row }" slot="count">
        <Input type="text" v-model="editCount" v-if="editIndex === -2" />
        <span v-else>{{ row.count }}</span>
      </template>
      <template slot-scope="{ row }" slot="createtime">
        <Input type="text" v-model="editCreateTime" v-if="editIndex === -2" />
        <span v-else>{{ row.createtime }}</span>
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
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
import {
  getSchoolList,
  addSchool
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
          title: '学校',
          slot: 'name'
        },
        {
          title: '学生数',
          slot: 'stu'
        },
        {
          title: '总计',
          slot: 'count'
        },
        {
          title: '创建时间',
          slot: 'createtime'
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
      editStu: '',
      editCount: '',
      editCreateTime: ''
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
      this.editStu = 0
      this.editCount = 0
      this.editIndex = index
    },
    handleSave (index) {
      this.data[index].id = this.editId
      this.data[index].name = this.editName
      this.data[index].stu = this.editStu
      this.data[index].count = this.editCount
      this.editIndex = -1
      if (this.editId === undefined) {
        addSchool(this.data[index]).then((res) => {
          this.$Notice.success({
            title: '添加学校成功',
            desc: ''
          })
        })
        return
      }
      this.$Notice.error({
        title: '学校信息禁止修改',
        desc: ''
      })
    },
    getList () {
      getSchoolList(this.cur, this.size).then((res) => {
        this.data = res.data.data.schoolList
      })
    }
  },
  created: function () {
    this.getList()
  }
}
</script>

<style>
</style>
