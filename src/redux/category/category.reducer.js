import { TOGGLE_CATEGORY_CHECK } from './category.types';
import { CATEGORIES } from './category.data';

const initialState = {
  categories: CATEGORIES,
};

export default function categoryReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_CATEGORY_CHECK:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.uniqueName === payload) category.checked = !category.checked;
          return category;
        }),
      };
    default:
      return state;
  }
}
