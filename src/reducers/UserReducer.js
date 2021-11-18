export const initialSate = {
    avatar: '',
    favorites: [],
    appointments: [],
    itens: []
  };
  
  export const UserReducer = (state, action) => {
    console.log(action.type);
    switch (action.type) {
      case 'setAvatar':
        return {...state, avatar: action.payload.avatar};
        break;
      case 'setName':
        return {...state, name: action.payload.name};
      break;
      default:
        return state;
    }
  };