import { useState } from 'react';
import { Resend } from 'resend';
import mailTemplateAction from './mailer';
import { toast } from './toast';

const resend = new Resend(process.env.NEXT_PUBLIC_RESET_APIKEY as string);

interface sendMailProps {
  emailText: string;
  nameText: string;
  messageText: string;
}
const useUtilities = () => {
  const [error, setError] = useState<string>('');
  const [emailText, setEmailText] = useState<string>('');
  const [nameText, setNameText] = useState<string>('');
  const [messageText, setMessageText] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameText(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailText(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.target.value);
  };
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const sendMail = async () => {
    console.log(process.env.NEXT_PUBLIC_RESET_APIKEY as string);
    const res = await resend.emails.send({
      from: 'kindnessokpugie5@gmail.com',
      to: 'kindnessokpugie5@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your grant portfolio <strong>first email</strong>!</p>'
    });
    console.log(res, 'resssss send mail service');
    return res;
  };
  const sendMailAction = async () => {
    toast.promise(sendMail(), {
      loading: 'Loading',
      success: (data) => `Successfully saved ${data}`,
      error: (err) => `This just happened: ${err.toString()}`,
    }, {
      style: {
        minWidth: '250px',
      },
      success: {
        duration: 5000,
        icon: '🔥',
      },
    });
  };
  /* const sendMail = async (nameText: string, emailText: string, messageText: string) => {
    if (!nameText || !emailText || !messageText) return setError('Fill All Fields.');
    const res = await mailTemplateAction(nameText, emailText, messageText);
    console.log(res)
  } */
  return {
    error,
    nameText,
    emailText,
    messageText,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    openInNewTab,
    sendMailAction,
  }
};

export default useUtilities;
