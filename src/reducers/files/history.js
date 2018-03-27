import { RECIEVE_FILE_HISTORY } from "actions/files";

export default function historyReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_FILE_HISTORY:
            return {
                ...state,
                [action.id]: [...action.historyList]
            };

        default:
            return state;
    }
}
