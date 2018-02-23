export default (prevState = null, action) => {
  // console.log(action);
  switch (action.type) {

    case 'select_library':
      return action.payload;

    default:
      return prevState;

  }
};
