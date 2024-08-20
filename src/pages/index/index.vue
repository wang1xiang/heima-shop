<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 是否加载中标记
const isLoading = ref(false)

// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData()])
  isLoading.value = false
})
</script>

<template>
  <view class="viewport">
    <!-- 自定义导航栏 -->
    <CustomNavbar />
    <!-- 滚动容器 -->
    <XtxSwiper :list="bannerList" />
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
