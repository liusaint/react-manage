function homeReducer(state,action){
	if(!state){
		state = {
			pageList:[],
		}
	}
	switch (action.type) {
		case 'INIT_PAGE_LIST':
	

			state = {
				...state,
				pageList:action.pageList
			}
			break;


	}
	return state;
}

export default homeReducer;