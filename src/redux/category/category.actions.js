import { TOGGLE_CATEGORY_CHECK } from './category.types';

export function toggleCategoryCheck(categoryUniqueName) {
  return {
    type: TOGGLE_CATEGORY_CHECK,
    payload: categoryUniqueName,
  };
}
