const navbarReducer=(state=[], action)=>{
	switch(action.type){
		case 'LOAD_NAVBAR':
		return [...action.payload]
		default:
		return state
	}
}
export default navbarReducer