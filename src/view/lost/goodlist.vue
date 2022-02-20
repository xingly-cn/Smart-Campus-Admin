<template>
    <div>物品列表1
      <button @click="test">nihao</button>
    </div>

</template>

<script>

import { getGoodList } from '@/api/lost/lost'
export default {
  name: 'update_paste_page',
  data () {
    return {
      cur: 1,
      size: 5,
      categoryId: ''
    }
  },
  methods: {
    test () {
      getGoodList(this.cur, this.size, this.categoryId).then(res => {
        console.log(res.data.data)
      })
    }
  }
}
</script>

<style>
</style>
