import {initialState} from './MeinStore';

/*  export const reducer = (state = initialState, action) => state;
 */ 


 export const reducer = (state = initialState, action) => {
	switch (action.type) {
    
			case "CHANGE_COLOR":
					return {
							...state,
							farbe: "blue"
					};

			case "CHANGE_COLORinRED":
					return {
							...state,
							farbe: "red"
					};
			

			default:
					return state
	}
}