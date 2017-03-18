import { NEW_GAME } from './actions/gameActionTypes'
import { flatten } from '../utils/arrays';

const makeEmptyGameTable = (size) => Array(size).fill(Array(size).fill(null));

const reducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_GAME:
      const { size } = action.payload;

      return {
        ...state,
        fields: makeEmptyGameTable(size)
                  .map((row, x) => row.map((cell, y) => ({
                    x, y, value: null
                  })))
      };

    // case 'STEP_GAME':
    //   const { player, x, y } = action.payload;
    //   return {
    //     ...state,
    //     fields: [
    //       ...fields.slice(0, x - 1),
    //       [

    //       ],
    //       ...fields.slice(x + 1, fields.length)
    //     ]
    //   }
  }

  return state;
};

export const getGameFields = (state) => flatten(state.fields);

export default reducer;