import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {

    namespaced: true,

    //state: state,//Es redundante tener una llave que tiene el mismo valor y se puede dejar solo una para hacer referencia.
    state,
    mutations,
    actions,
    getters,

}

export default counterStore