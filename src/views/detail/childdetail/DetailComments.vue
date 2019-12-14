<!--  -->
<template>
  <div v-if="Object.keys(comments).length !== 0" class="comment">
    <div class="comment-top">
      <div>用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="user">
      <img :src="comments.user.avatar" alt />
      <span class="user-name">{{comments.user.uname}}</span>
    </div>
    <div class="comment-info">
      <div>{{comments.content}}</div>
    </div>
    <div class="comment-other">
      <span>{{comments.created | showDate}}</span>
      <span class="comment-style">{{comments.style}}</span>
    </div>
    <div class="comment-image">
      <img :src="item" alt v-for="(item,index) in comments.images" :key="index" />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";

export default {
  name: "DeatilComments",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date,"yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.comment {
  padding: 0 10px;
  padding-bottom: 30px;
  border-bottom: 6px solid #dddddd;
  margin-bottom: 10px
}
.comment-top {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
.comment-top div {
  display: inline-block;
  line-height: 50px;
}
.more {
  float: right;
}
.user {
  margin-bottom: 10px;
}
.user img,
.user div {
  display: inline-block;
  vertical-align: middle;
}
.user img {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 10px;
}
.comment-info {
  margin-bottom: 10px;
}
.comment-other {
  font-size: 14px;
  color: #bbbbbb;
}
.comment-style {
  margin-left: 10px;
}
.comment-image {
  display: flex;
  margin-top: 10px;
}
.comment-image img {
  height: 80px;
  width: 80px;
}
</style>