<template>
  <div class="open">
    <ul class="places">
      <li v-for="place in places">
        <router-link :to="{ path: '/open/' + place.class_name }">{{place.name_en}}</router-link>
      </li>
    </ul>
    <ul  v-for="place in places" v-if="filter == place.class_name" class="calendar">
      <h2>{{place.name_en}}</h2>
      <ul>
        <li>{{place.opens_1}}-{{place.closes_1}}</li>
        <li>{{place.opens_2}}-{{place.closes_2}}</li>
        <li>{{place.opens_3}}-{{place.closes_3}}</li>
        <li>{{place.opens_4}}-{{place.closes_4}}</li>
        <li>{{place.opens_5}}-{{place.closes_5}}</li>
      </ul>
      <p v-for="day in calendar">
        <span v-if="place.id == day.place_id">
          {{day.day}} 
          {{day.status_en}} 
          <span v-if="day.status_en != 'Closed'"> {{day.open_hour}}-{{day.close_hour}}</span>
        </span>
      </p>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'open',
    data () {
      return {
        places: [],
        calendar: [],
        filter: ''
      }
    },
    created: function () {
      this.$http.get('http://fruccola.hu/admin/api/open')
        .then(function (response) {
          this.places = response.data
        })
      this.$http.get('http://fruccola.hu/admin/api/calendar')
        .then(function (response) {
          this.calendar = response.data
        })
    },
    watch: {
      '$route' (to, from) {
        this.filter = to.params.place
      }
    }
  }
</script>