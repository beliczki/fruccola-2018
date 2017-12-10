<template>
  <div class="menu">
    <ul class="categories">
      <li v-for="category in categories">
        <router-link :to="{ path: '/menu/' + category.slug_en }">{{category.name_en}}</router-link>
      </li>
    </ul>
    <ul class="items" v-if="items.length > 0">
      <li v-for="item in items">
        <h2>{{item.name_en}}</h2>
        <p>{{item.desicription_en}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
        categories: [],
        items: []
      }
    },
    created: function () {
      this.$http.get('http://fruccola.hu/admin/api/menu/categories')
        .then(function (response) {
          this.categories = response.data
        })
    },
    watch: {
      '$route' (to, from) {
        this.$http.get('http://fruccola.hu/admin/api/menu/' + to.params.category)
          .then(function (response) {
            this.items = response.data
          })
      }
    }
  }
</script>