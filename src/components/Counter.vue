<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

    computed: {
        countComputed() {
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation', 'isLoading'])//Opción 1 con mapState
        /* ...mapState({
            count: state => state.count,
            lastMutation: state => state.lastMutation
        })//Opción 2 con mapState */
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        incrementBy() {
            this.$store.commit('incrementBy', 5)
        },
        /*incrementRandomInt() {
            this.$store.dispatch( 'incrementRandomInt' )
        },*///Método 1 para ejecutar la acción.
        //...mapActions(['incrementRandomInt'])//Método 2 para ejecutar la acción.
        ...mapActions({
            randomInt: 'incrementRandomInt'//Se puede personalizar el nombre con el que se llamará a la acción.
        })//Método 3 para ejecutar la acción.
    }

}
</script>