const initialStat = {
    something:false,
    data:{},
}

export default function reducer(state = initialStat, action) {
    switch (action.type) {
      case 'INIT': {
          return {
            //   ...state, // Browsify error thing
              something:true,
              data:action.payload
          };
      }
    case 'UPDATE_DATA': {
          return {
            //   ...state, // Browsify error thing
              something:true,
              data:action.payload
          };
      }
    default:
        return state;
    }
}
