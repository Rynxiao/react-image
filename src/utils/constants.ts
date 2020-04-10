const LOADING_STATE = {
  INITIAL: { loading: false, isError: false, image: null as null },
  FAIL: { loading: false, isError: true, image: null as null },
  LOADING: { loading: true, isError: false, image: null as null },
  SUCCESS: { loading: false, isError: false },
};
export const NETWORK_ERROR = 'Network error';
export const IMAGE_LOAD_ERROR = 'Image didn\'t load successfully; error code:';

export default LOADING_STATE;
