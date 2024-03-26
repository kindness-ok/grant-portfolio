const useUtilities = () => {
  const [emailText, setEmailText] = useState('');
  const [nameText, setNameText] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleNameChange = (e) => {
    setNameText(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailText(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessageText(e.target.value)
  };
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return {
    openInNewTab
  }
};

export default useUtilities;
