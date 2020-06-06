import { connect } from 'react-redux';
import App from '../../App';
import { addToPanier, updatePanier } from '../../lib/action';

export const AppContainer = connect(
    function mapStateToProps(state){
        return {items: state.items}
    },

   function mapDispatchToProps(dispatch){
    return {   
    onAddToPanier: (item, quantity) => dispatch(addToPanier(item, quantity)),
    onUpdatePanier : (item, quantity) => dispatch(updatePanier(item, quantity))
    }
   }
)(App)
