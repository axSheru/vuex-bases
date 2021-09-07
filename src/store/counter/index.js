import getRandomInt from '@/helpers/getRandomInt'
import state from './state'
import * as mutations from './mutations'

const counterStore = {

    namespaced: true,

    //state: state,//Es redundante tener una llave que tiene el mismo valor y se puede dejar solo una para hacer referencia.
    state,
    mutations,
    actions: {
        async incrementRandomInt({ commit }) {

            commit( 'setLoading', true )
            
            const randomInt = await getRandomInt()
            
            commit( 'incrementBy', randomInt )
            
            commit( 'setLoading', false )

        }
    },
    getters: {
        squareCount( state ) {
            return state.count * state.count
        }
    }

}

export default counterStore