<template>
  <div>
    <div style="display: flex; justify-content: end">
      <Button type="info" style="margin-bottom: 5px" @click="add"
        >添加分类</Button
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
      <template slot-scope="{ row, index }" slot="description">
        <Input type="text" v-model="editDes" v-if="editIndex === index" />
        <span v-else>{{ row.description }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="level">
        <Input type="text" v-model="editLevel" v-if="editIndex === index" />
        <span v-else>{{ row.level }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="find">
        <Input type="text" v-model="editFind" v-if="editIndex === index" />
        <span v-else>{{ row.find }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="count">
        <Input type="text" v-model="editCount" v-if="editIndex === index" />
        <span v-else>{{ row.count }}</span>
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
          <Button
            type="error"
            size="small"
            style="margin-left: 10px"
            @click="remove(index)"
            >删除</Button
          >
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
import {
  addCategory,
  getCategoryList,
  delCategory,
  editCategory
} from '@/api/lost/lost'
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
          title: '名称',
          slot: 'name'
        },
        {
          title: '描述',
          slot: 'description'
        },
        {
          title: '等级',
          slot: 'level'
        },
        {
          title: '已找到',
          slot: 'find'
        },
        {
          title: '总计',
          slot: 'count'
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
      editDes: '',
      editLevel: '',
      editCount: '',
      editFind: '',
      category: []
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
        desc: '由于管理员具有修改数据的权限，导致分类数据动态变化。'
      })
    },
    handleEdit (row, index) {
      this.editId = row.id
      this.editName = row.name
      this.editDes = row.description
      this.editLevel = row.level
      this.editCount = row.count
      this.editFind = row.find
      this.editIndex = index
    },
    handleSave (index) {
      this.data[index].id = this.editId
      this.data[index].name = this.editName
      this.data[index].description = this.editDes
      this.data[index].level = this.editLevel
      this.data[index].count = this.editCount
      this.data[index].find = this.editFind
      this.editIndex = -1
      if (this.editId === undefined) {
        addCategory(this.data[index]).then((res) => {
          this.$Notice.success({
            title: '添加分类成功',
            desc: ''
          })
        })
        return
      }
      editCategory(this.data[index]).then((res) => {
        this.$Notice.success({
          title: '更新分类成功',
          desc: ''
        })
      })
    },
    remove (index) {
      delCategory(this.data[index].id).then((res) => {
        console.log(res.data)
      })
      this.$Notice.success({
        title: '删除分类成功',
        desc: ''
      })
      this.data.splice(index, 1)
    },
    getList () {
      getCategoryList(this.cur, this.size).then((res) => {
        this.data = res.data.data.categoryList
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
