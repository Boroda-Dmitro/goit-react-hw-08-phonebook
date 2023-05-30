import { toast } from 'react-toastify';
      
export const ErrorMessage = message => {
  toast.error(`Sorry, we get a problem: ${message}`);
};
