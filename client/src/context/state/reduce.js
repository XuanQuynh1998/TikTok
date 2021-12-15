import * as type from "./constants";

const initState = {
  videos: [],
  visibleVideo: null,
  videoVolume: 0,
  videoClicked: {
    isClicked: false,
    videoSrc: null,
    duration: 0,
    currentTime: 0,
  },
  scrollIntoView: false,
  openLoginModal: false,
  user: { loading: true, user: {} },
};

const reducer = (state, action) => {
  switch (action.type) {
    case type.SET_VIDEO:
      if (state.videos.every((video) => video.videoSrc !== action.payload.videoSrc)) {
        state.videos.push(action.payload);
      }
      state.videos = state.videos.map((video) => {
        if (video.videoSrc === action.payload.videoSrc) {
          video.isVisible = action.payload.isVisible;
        }

        return video;
      });

      return { ...state, videos: state.videos };

    case type.SET_VISIBLE_VIDEO:
      return { ...state, visibleVideo: action.payload };

    case type.SET_VOLUME:
      return {
        ...state,
        videoVolume: action.payload,
      };

    case type.SET_VIDEO_CLICKED:
      return {
        ...state,
        videoClicked: { ...state.videoClicked, ...action.payload },
      };

    case type.SET_SCROLL_INTO_VIEW:
      return { ...state, scrollIntoView: action.payload };

    case type.SET_OPEN_LOGIN_MODAL:
      return { ...state, openLoginModal: action.payload };

    case type.SET_USER:
      return { ...state, user: action.payload };

    default:
      throw new Error("Invalid action.");
  }
};

export { initState };
export default reducer;
