export function configRouter (router) {

  router.map({
    '/events': {
      component: require('./components/events.vue')
    },
    '/about': {
      component: {
        template:"<div>Sobre</div>"
      }
    }
  })
}
