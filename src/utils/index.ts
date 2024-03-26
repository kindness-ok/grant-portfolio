import { useState } from 'react';

const useUtilities = () => {
  const [emailText, setEmailText] = useState('');
  const [nameText, setNameText] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleNameChange = (e: Event) => {
    setNameText(e.target.value);
  };
  const handleEmailChange = (e: Event) => {
    setEmailText(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value)
  };
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return {
    nameText,
    emailText,
    messageText,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    openInNewTab,
  }
};

export default useUtilities;
