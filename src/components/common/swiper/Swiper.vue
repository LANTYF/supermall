<!--  -->
<template>
  <div class="h_swiper">
    <div class="swiper" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="dots" v-if="slideCount > 1">
      <span
        class="dot"
        v-for="(item,index) in slideCount"
        :key="index"
        :class="{active:index === isShow}"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      currentIndex: 1,
      slideCount: 0,
      swiperStyle: {},
      totalWidth: 0,
      scrolling: false
    };
  },
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
  },
  mounted() {
    setTimeout(() => {
      this.handledom();
      this.startTimer();
    }, 200);
  },
  computed: {
    currentDistance() {
      return -this.currentIndex * this.totalWidth;
    },
    isShow() {
      return this.currentIndex - 1;
    }
  },
  methods: {
    handledom() {
      const swiper = this.$refs.swiper;
      const swiperitem = document.getElementsByClassName('swiperitem')
      this.slideCount = swiperitem.length
      if (this.slideCount > 1) {
        const firstClone = swiperitem[0].cloneNode(true); //复制第一张图片
        const lastClone = swiperitem[this.slideCount - 1].cloneNode(true); //复制最后一张图片
        swiper.insertBefore(lastClone, swiperitem[0]); //把最后一张复制的图片插到第一张前面
        swiper.appendChild(firstClone);
        this.swiperStyle = swiper.style;
        this.totalWidth = swiper.offsetWidth;
      }
      this.setTransform(-this.totalWidth);
    },
    //开始计时
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.setScrollContent(this.currentDistance);
      }, this.interval);
    },
    //停止计时
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    //设置位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
    },
    //校正位置
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(this.currentDistance);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(this.currentDistance);
        }
      }, this.animDuration);
    },
    setScrollContent(currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform" + this.animDuration + "ms";
      this.setTransform(currentPosition);
      this.checkPosition();
      this.scrolling = false;
    },
    touchStart(e) {
      if (this.scrolling) {
        return;
      } //在自动播放时禁止滑动
      this.stopTimer(); //触摸时停止计时
      this.startX = e.touches[0].pageX; //触摸时的位置
    },
    touchMove(e) {
      this.moveX = e.touches[0].pageX;
      this.distance = this.moveX - this.startX; //滑动距离
      let currentPosition = this.currentDistance; //滑动前位置
      let position = currentPosition + this.distance; //滑动后位置
      this.setTransform(position); //设置滑动后的位置
    },
    touchEnd(e) {
      let absDistance = Math.abs(this.distance); //取绝对值
      if (this.distance === 0) {
        return;
      } else if (
        this.distance < 0 &&
        absDistance > this.totalWidth * this.moveRatio
      ) {
        //向左滑动距离超过0.25倍的宽度
        this.currentIndex++;
      } else if (
        this.distance > 0 &&
        absDistance > this.totalWidth * this.moveRatio
      ) {
        //向右滑动距离超过0.25倍的宽度
        this.currentIndex--;
      }
      this.setScrollContent(this.currentDistance);
      this.startTimer();
    }
  }
};
</script>

<style scoped>
.h_swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.dots {
  display: flex;
  position: absolute;
  bottom: 6px;
  width: 100%;
  justify-content: center;
}
.dot {
  width: 8px;
  height: 8px;
  line-height: 8px;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 4px;
  color: #ffffff;
  box-sizing: border-box;
  margin: 0 5px;
}
.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>