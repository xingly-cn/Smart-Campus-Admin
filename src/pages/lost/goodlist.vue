<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="record">
      <a>Edit </a>
      <a-divider type="vertical" />
      <a @click="sayHi(record.id)">Delete {{record.id}}</a> 
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '时间',
    key: 'time',
    dataIndex: 'time',
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    id: '5849846516849',
    name: '肖念昕',
    category: '电子产品',
    title: '手机丢失',
    tags: ['未完成', '加急'],
    time: '2022-02-10 12:45',
  },
  {
    id: '188494646489',
    name: '王静',
    category: '生活用品',
    title: '手表丢了',
    tags: ['已完成', '被举报'],
    time: '2022-02-10 12:45',
  }
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    sayHi(id) {
      alert(id)
    }
  }
};
</script>
