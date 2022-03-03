<template>
  <div>
    <p>TODO: 添加编辑功能，可以修改物品信息</p>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="id">
        <Input type="text" v-model="editId" v-if="editIndex === -2" />
        <span v-else>{{ row.id }}</span>
      </template>
      <template slot-scope="{ row }" slot="schoolid">
        <Input type="text" v-model="editSchoolId" v-if="editIndex === -2" />
        <span v-else>{{ row.schoolid }}</span>
      </template>
      <template slot-scope="{ row }" slot="name">
        <Input type="text" v-model="editName" v-if="editIndex === -2" />
        <span v-else>{{ row.name }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="title">
        <Input type="text" v-model="editTitle" v-if="editIndex === index" />
        <span v-else>{{ row.title }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="content">
        <Input type="text" v-model="editContent" v-if="editIndex === index" />
        <span v-else>{{ row.content }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="category">
        <Input type="text" v-model="editCategory" v-if="editIndex === index" />
        <span v-else>{{ row.category }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="tags">
        <Input type="text" v-model="editTags" v-if="editIndex === index" />
        <span v-else>{{ row.tags }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="look">
        <Input type="text" v-model="editLook" v-if="editIndex === index" />
        <span v-else>{{ row.look }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="createtime">
        <Input type="text" v-model="editCreateTime" v-if="editIndex === index" />
        <span v-else>{{ row.createtime }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <Button size="small" @click="handleSave(index)">保存</Button>
          <Button size="small" @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <Button type="primary" size="small" @click="handleEdit(row, index)">操作</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </div>
      </template>
    </Table>
  </div>
</template>

<script>
import { getGoodList, delGood, editGood } from '@/api/lost/lost'
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
          slot: 'schoolid'
        },
        {
          title: '姓名',
          slot: 'name'
        },
        {
          title: '标题',
          slot: 'title'
        },
        {
          title: '内容',
          slot: 'content'
        },
        {
          title: '分类',
          slot: 'category'
        },
        {
          title: '状态',
          slot: 'tags'
        },
        {
          title: '访问量',
          slot: 'look'
        },
        {
          title: '发布时间',
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
      editSchoolId: '',
      editTitle: '',
      editContent: '',
      editCategory: '',
      editTags: '',
      editLook: '',
      editCreateTime: ''
    }
  },
  methods: {
    handleEdit (row, index) {
      this.editId = row.id
      this.editName = row.name
      this.editSchoolId = row.schoolid
      this.editTitle = row.title
      this.editContent = row.content
      this.editCategory = row.category
      this.editTags = row.tags
      this.editLook = row.look
      this.editCreateTime = row.createtime
      this.editIndex = index
    },
    handleSave (index) {
      this.data[index].id = this.editId
      this.data[index].name = this.editName
      this.data[index].schoolid = this.editSchoolId
      this.data[index].title = this.editTitle
      this.data[index].content = this.editContent
      this.data[index].category = this.editCategory
      this.data[index].tags = this.editTags
      this.data[index].look = this.editLook
      this.data[index].createtime = this.editCreateTime
      this.editIndex = -1
      this.$Notice.success({
        title: '更新物品成功',
        desc: ''
      })
      editGood(this.data[index]).then(res => {
        console.log(res.data)
      })
    },
    remove (index) {
      delGood(this.data[index].id).then((res) => {
        console.log(res.data)
      })
      this.$Notice.success({
        title: '删除物品成功',
        desc: ''
      })
      this.data.splice(index, 1)
    },
    // 获取物品列表
    getList () {
      getGoodList(this.cur, this.size).then((res) => {
        this.data = res.data.data.goodList
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
