import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn284433Reducer from '../features/SignIn284433/redux/reducers'
import SignIn284419Reducer from '../features/SignIn284419/redux/reducers'
import SignIn273699Reducer from '../features/SignIn273699/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn284433: SignIn284433Reducer,
SignIn284419: SignIn284419Reducer,
SignIn273699: SignIn273699Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});