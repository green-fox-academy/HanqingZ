export const ADD_TAG = 'add';
export const REMOVE_TAG = 'remove';
export const REMOVE_TAGS = 'removeAll';

export function add_tag(color) {
  return{
    type: ADD_TAG,
    tagType: color
  }
}

export function remove_tag(color) {
  return{
    type: REMOVE_TAG,
    tagType: color,
  }
}

export function remove_all_tag() {
  return{
    type: REMOVE_TAGS,
  }
}