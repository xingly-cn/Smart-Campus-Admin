<template>
  <div>
    <p>TODO: 添加编辑功能，可以修改物品信息</p>
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
import { getGoodList, delGood } from '@/api/lost/lost'
export default {
  name: 'update_paste_page',
  data () {
    return {
      cur: 1,
      size: 100,
      categoryId: '',
      columns12: [
        {
          title: 'Id',
          key: 'id'
        },
        {
          title: '学校',
          key: 'schoolid'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '标题',
          key: 'title'
        },
        {
          title: '内容',
          key: 'content'
        },
        {
          title: '分类',
          key: 'category'
        },
        {
          title: '状态',
          key: 'tags'
        },
        {
          title: '访问量',
          key: 'look'
        },
        {
          title: '发布时间',
          key: 'createtime'
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
          姓名：${this.data6[index].name}<br>
          学校：${this.data6[index].schoolid}<br>
          标题：${this.data6[index].title}<br>
          内容：${this.data6[index].content}<br>
          分类：${this.data6[index].category}<br>
          状态：${this.data6[index].tags}<br>
          访问量：${this.data6[index].look}<br>
          发布时间：${this.data6[index].createtime}
        `
      })
    },
    // 删除物品
    remove (index) {
      delGood(this.data6[index].id).then(res => {
        console.log(res.data)
      })
      this.$Notice.success({
        title: '删除物品成功',
        desc: ''
      })
      this.data6.splice(index, 1)
    },
    // 获取物品列表
    getList () {
      getGoodList(this.cur, this.size).then(res => {
        this.data6 = res.data.data.goodList
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
