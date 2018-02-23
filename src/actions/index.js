/*
  Index of all action creators.
  Action creators are functions that return actions,
  which are merely js objects with type and payload
  properties.
*/

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
