'use strict'

const handler = {
  get: function(targetObject, field) {
    if (field === 'nextId') {
      this.set(targetObject, field, targetObject[field] ? 1 : targetObject[field]++)
      return targetObject[field];
    }
    return undefined;
  },
  set: function(targetObject, field, value) {
    if (field === 'nextId') {
      return targetObject[field] = value;
    }
  }
};