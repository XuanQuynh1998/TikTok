import * as type from "./constants";

export const setVideo = (payload) => ({
  type: type.SET_VIDEO,
  payload,
});

export const setVisibleVideo = (payload) => ({
  type: type.SET_VISIBLE_VIDEO,
  payload,
});

export const setVolume = (payload) => ({
  type: type.SET_VOLUME,
  payload,
});

export const setVideoClicked = (payload) => ({
  type: type.SET_VIDEO_CLICKED,
  payload,
});

export const setScrollIntoView = (payload) => ({
  type: type.SET_SCROLL_INTO_VIEW,
  payload,
});

export const setOpenLoginModal = (payload) => ({
  type: type.SET_OPEN_LOGIN_MODAL,
  payload,
});

export const setUser = (payload) => ({
  type: type.SET_USER,
  payload,
});
