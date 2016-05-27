<template>
  <div>
  <div v-if="$loadingRouteData">
    <h3>Animated button</h3>
   	<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...
  </div>
  <div v-if="!$loadingRouteData">
    <a href="#" class="btn btn-default">Default</a>
    <a href="#" class="btn btn-primary">Primary</a>
    <a href="#" class="btn btn-success">Success</a>
    <a href="#" class="btn btn-info">Info</a>
    <a href="#" class="btn btn-warning">Warning</a>
    <a href="#" class="btn btn-danger">Danger</a>
    <a href="#" class="btn btn-link">Link</a>
    <ul v-show="users.length > 0" v-for="user in users" class="list-group">
      <li>{{ user.fullName }}</li>
    </ul>
  </div>
</div>
</template>

<script>
import usersService from './../services/users.js'

export default {
  route: {
    data: function (transition) {
    return usersService
      .getUsers(this)
      .then(function (data) {
        return { users: data }
      })
    }
  },
  data () {
    return {
      users: [],
      message: 'loading',
    };
  }
}
</script>

<style>
.glyphicon-refresh-animate {
    -animation: spin .7s infinite linear;
    -webkit-animation: spin2 .7s infinite linear;
}

@-webkit-keyframes spin2 {
    from { -webkit-transform: rotate(0deg);}
    to { -webkit-transform: rotate(360deg);}
}

@keyframes spin {
    from { transform: scale(1) rotate(0deg);}
    to { transform: scale(1) rotate(360deg);}
}
</style>
