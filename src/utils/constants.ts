const LOADING_STATE = {
  INITIAL: { loading: false, isError: false, image: null as null },
  FAIL: { loading: false, isError: true, image: null as null },
  LOADING: { loading: true, isError: false, image: null as null },
  SUCCESS: { loading: false, isError: false },
};

export default LOADING_STATE;
