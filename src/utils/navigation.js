// Utility functions for navigation and scrolling

export const scrollToElement = (elementId, behavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior });
    return true;
  }
  return false;
};

export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior });
};

export const handlePageNavigation = async (navigate, targetPath, callback, currentPath = null) => {
  const effectivePath = currentPath ?? window.location.pathname;

  if (effectivePath !== targetPath) {
    navigate(targetPath);
    // Use requestAnimationFrame for better timing
    return new Promise(resolve => {
      requestAnimationFrame(() => {
        resolve();
        if (callback) callback();
      });
    });
  } else if (callback) {
    callback();
  }
};
