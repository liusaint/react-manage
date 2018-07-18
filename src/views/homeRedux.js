function homeReducer(state, action) {
	if (!state) {
		state = {
			loadingList: false,

			pageList: [],
		}
	}
	switch (action.type) {
		case 'INIT_PAGE_LIST':


			state = {
				...state,
				pageList: action.pageList,
				loadingList:false
			}
			break;
		case 'FETCH_LIST_BEFORE':


			state = {
				...state,
				loadingList: true
			}
			break;


	}
	return state;
}

export default homeReducer;