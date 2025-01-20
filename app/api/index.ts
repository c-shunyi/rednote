import axios from 'axios';
import { url } from '@/app/config/gemini';

export const api = axios.create({
  baseURL: url,
});

export const rednoteContent = async (
  inputText: string,
  selectedLanguage: string
) => {
  const requestData = {
    contents: [
      {
        parts: [
          {
            text: `${inputText},Translate the above text into ${selectedLanguage},And make the text style more cheerful, add appropriate icon text,Just output the result.`,
          },
        ],
      },
    ],
  };
  const response = await axios.post(url, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.candidates[0].content.parts[0].text;
};

export const translateRednote = async (
  inputText: string,
  selectedLanguage: string
) => {
  const requestData = {
    contents: [
      {
        parts: [
          {
            text: `${inputText},Translate the above text into ${selectedLanguage},Just output the translation result.`,
          },
        ],
      },
    ],
  };
  const response = await axios.post(url, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.candidates[0].content.parts[0].text;
};
export const chineseName = async (
  inputText: string,
  selectedLanguage: string
) => {
  const requestData = {
    contents: [
      {
        parts: [
          {
            text: `${inputText},According to the above English name,generate a nice ${selectedLanguage} name with personality,The output name and the reason for the output name.`,
          },
        ],
      },
    ],
  };
  const response = await axios.post(url, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data.candidates[0].content.parts[0].text;
};
