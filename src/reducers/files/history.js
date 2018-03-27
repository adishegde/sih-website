import { RECIEVE_FILE_HISTORY } from "actions/files";

function fileHistoryReducer(state = [], action) {
    switch (action.type) {
        case RECIEVE_FILE_HISTORY:
            return [...action.historyList];

        default:
            return state;
    }
}

export default function historyReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_FILE_HISTORY:
            return {
                ...state,
                [action.id]: fileHistoryReducer(state[action.id], action)
            };

        default:
            return state;
    }
}
