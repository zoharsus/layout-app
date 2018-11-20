import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentList: [
      {id: 1, h: 150, w: 150},
      {id: 2, h: 150, w: 150},
      {id: 3, h: 150, w: 150},
      {id: 4, h: 150, w: 150},
      {id: 5, h: 150, w: 150},
      {id: 6, h: 150, w: 150},
      {id: 7, h: 150, w: 150},
      {id: 8, h: 150, w: 150},
      {id: 9, h: 150, w: 150},
      {id: 10, h: 150, w: 150}
    ],
    layouts: [
      {id: 1, components: []},
      {id: 2, components: []},
      {id: 3, components: []},
      {id: 4, components: []},
      {id: 5, components: []},
      {id: 6, components: []}
    ]
  },
  mutations: {
    dragIn(state, id, component) {
        state.layouts[id].push(component)
    },
    removeComponent(state, id, component) {
        state.layouts[id].splice(layouts[id].indexOf(component), 1)
    }
  },
  actions: {

  }
})
