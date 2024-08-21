<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="cover cover">
        <image class="image sk-image" mode="widthFix" style="height: 129px"></image>
      </view>
      <view class="tabs tabs">
        <text
          class="text active sk-transparent sk-text-34-3137-886 sk-text sk-pseudo sk-pseudo-circle"
          >抢先尝鲜</text
        >
        <text class="text sk-transparent sk-text-34-3137-278 sk-text">新品预告</text>
      </view>
      <scroll-view enable-back-to-top="true" scroll-y="true" class="scroll-view scroll-view">
        <view class="goods goods">
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-548 sk-text"
              >浓缩的精华，宠物化毛营养膏120克/支</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-114 sk-text">39.00</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-561 sk-text"
              >最不舍柔情似水的你！平台云音乐3层软抽6包</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-967 sk-text">17.90</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-763 sk-text"
              >莆田桂圆肉368克</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-581 sk-text">52.00</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-991 sk-text"
              >【新疆棉】宝宝也能用，全棉华夫格毛巾</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-341 sk-text">15.90</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
          </navigator>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-34-3137-886 {
  background-image: linear-gradient(
    transparent 34.3137%,
    #eeeeee 0%,
    #eeeeee 65.6863%,
    transparent 0%
  ) !important;
  background-size: 100% 88.9535rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-34-3137-278 {
  background-image: linear-gradient(
    transparent 34.3137%,
    #eeeeee 0%,
    #eeeeee 65.6863%,
    transparent 0%
  ) !important;
  background-size: 100% 88.9535rpx;
  position: relative !important;
}
.sk-text-14-2857-548 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-0-0000-114 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6512rpx;
  position: relative !important;
}
.sk-text-14-2857-561 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-0-0000-967 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6512rpx;
  position: relative !important;
}
.sk-text-14-2857-763 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-0-0000-581 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6512rpx;
  position: relative !important;
}
.sk-text-14-2857-991 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}
.sk-text-0-0000-341 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6512rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
