<template>
  <div class="advantage card">
    <img :src="`${item.imageUrl}`" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantage',
  props: {
    item: Object
  }
}
</script>