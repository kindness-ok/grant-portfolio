const useOpenMe = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return {
    openInNewTab
  }
};

export default useOpenMe;
