<template>
  <div>
    <p>TODO: 添加编辑功能，可以修改分类信息</p>
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">预览</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
    </Table>
  </div>
</template>

<script>
import { getCategoryList, delCategory } from '@/api/lost/lost'
export default {
  name: 'update_paste_page',
  data () {
    return {
      cur: 1,
      size: 10,
      categoryId: '',
      columns12: [
        {
          title: 'Id',
          key: 'id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '描述',
          key: 'description'
        },
        {
          title: '等级',
          key: 'level'
        },
        {
          title: '已找到',
          key: 'find'
        },
        {
          title: '总计',
          key: 'count'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data6: []
    }
  },
  methods: {
    // action方法
    show (index) {
      this.$Modal.info({
        title: `失物信息 - ${index}`,
        content: `
          名称:${this.data6[index].name}<br>
          描述：${this.data6[index].description}<br>
          等级：${this.data6[index].level}<br>
          已找到：${this.data6[index].find}<br>
          总计：${this.data6[index].count}
        `
      })
    },
    // 删除分类
    remove (index) {
      delCategory(this.data6[index].id).then(res => {
        console.log(res.data)
      })
      this.$Notice.success({
        title: '删除分类成功',
        desc: ''
      })
      this.data6.splice(index, 1)
    },
    // 获取分类列表
    getList () {
      getCategoryList(this.cur, this.size).then(res => {
        this.data6 = res.data.data.categoryList
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
