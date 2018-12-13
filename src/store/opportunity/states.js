import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

const State = {
    opportunity: null
};

const OpportunityModule = {
    namespaced: true,
    state: State,
    getters: Getters,
    actions: Actions,
    mutations: Mutations
};

export default OpportunityModule;