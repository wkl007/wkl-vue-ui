<template>
  <button
    class="wkl-vue-btn"
    :class="type ? 'wkl-vue-btn-' + type : ''"
  >
    按钮
  </button>
</template>

<script>
export default {
  name: 'WklVueButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped lang="less">
.wkl-vue-btn {
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }

  &-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }

  &-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }

  &-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }

  &-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}

</style>
