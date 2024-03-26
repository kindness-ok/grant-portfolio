import { useState } from 'react';

const useUtilities = () => {
  const [emailText, setEmailText] = useState<string>('');
  const [nameText, setNameText] = useState<string>('');
  const [messageText, setMessageText] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameText(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
