export const WINDOW_RESIZE = "WINDOW_RESIZE";

export const windowResized = (windowWidth, windowHeight) => {
  return {
    type: WINDOW_RESIZE,
    response: { windowWidth, windowHeight }
  };
};