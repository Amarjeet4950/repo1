
const initial = {
    itmName='',
    img=''
}

export const reducer = (state=initial ,action)=> {
    switch (action.type) {
        case 'get':
            return {
                ...state
            }
        default:
            break;
    }
}