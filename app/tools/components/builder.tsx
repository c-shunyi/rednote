'use client';
import React, { useState } from 'react';
import { chineseName, translateRednote, rednoteContent } from '@/app/api';
import MdContent from '@/app/components/mdContent';

export default function Builder({ type }: { type: string }) {
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('Chinese');
  const [translatedText, setTranslatedText] = useState(
    'Generated Chinese name is here...'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  if (type == 'rednote-chinese-name') {
    const handleTranslate = async () => {
      setIsLoading(true);
      try {
        const data = await chineseName(inputText, 'Chinese');
        setTranslatedText(data);
      } catch (error) {
        console.error(error);
        setTranslatedText('Error occurred during translation.');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="p-4 xm:p-0">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md border border-gray-300 rounded-lg">
          <input
            className="w-full p-4 border border-gray-300 rounded-lg text-gray-600"
            placeholder="Enter your English name here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4 flex-col gap-4 sm:flex-row">
            <div></div>
            <button
              className={`px-4 py-2 rounded-lg ${
                isLoading ? 'bg-gray-400' : 'bg-red-500'
              } text-white`}
              onClick={handleTranslate}
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>
          <div className="mt-6 p-4 border border-gray-300 rounded-lg text-gray-600">
            <MdContent markdown={translatedText} />
          </div>
        </div>
      </div>
    );
  } else if (type == 'rednote-content') {
    const handleTranslate = () => {
      setIsButtonDisabled(true);
      console.log(inputText, language);

      rednoteContent(inputText, language)
        .then((data) => {
          setTranslatedText(data);
          setIsButtonDisabled(false);
        })
        .catch((error) => {
          console.error(error);
          setTranslatedText('Error occurred during translation.');
          setIsButtonDisabled(false);
        });
    };

    return (
      <div className="p-4 xm:p-0">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md border border-gray-300 rounded-lg">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg text-gray-600"
            placeholder="Enter your English text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4 flex-col gap-4 sm:flex-row">
            <select
              className="border border-gray-300 rounded-lg p-2 text-gray-600"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Chinese">中文 (Chinese)</option>
              <option value="Spanish">Español (Spanish)</option>
              <option value="French">Français (French)</option>
              <option value="German">Deutsch (German)</option>
              <option value="Japanese">日本語 (Japanese)</option>
              <option value="Korean">한국어 (Korean)</option>
              <option value="Russian">Русский (Russian)</option>
              <option value="Portuguese">Português (Portuguese)</option>
              <option value="Italian">Italiano (Italian)</option>
              <option value="Arabic">العربية (Arabic)</option>
              <option value="Hindi">हिन्दी (Hindi)</option>
              <option value="Turkish">Türkçe (Turkish)</option>
              <option value="Dutch">Nederlands (Dutch)</option>
              <option value="Swedish">Svenska (Swedish)</option>
              <option value="Polish">Polski (Polish)</option>
              <option value="Hebrew">עברית (Hebrew)</option>
              <option value="Thai">ไทย (Thai)</option>
              <option value="Vietnamese">Tiếng Việt (Vietnamese)</option>
              <option value="Indonesian">Bahasa Indonesia (Indonesian)</option>
              <option value="Malay">Bahasa Melayu (Malay)</option>
              <option value="Finnish">Suomi (Finnish)</option>
              <option value="Norwegian">Norsk (Norwegian)</option>
              <option value="Danish">Dansk (Danish)</option>
              <option value="Greek">Ελληνικά (Greek)</option>
              <option value="Hungarian">Magyar (Hungarian)</option>
              <option value="Czech">Čeština (Czech)</option>
              <option value="Romanian">Română (Romanian)</option>
              <option value="Bulgarian">Български (Bulgarian)</option>
              <option value="Ukrainian">Українська (Ukrainian)</option>
              <option value="Slovak">Slovenčina (Slovak)</option>
              <option value="Croatian">Hrvatski (Croatian)</option>
              <option value="Lithuanian">Lietuvių (Lithuanian)</option>
              <option value="Latvian">Latviešu (Latvian)</option>
              <option value="Estonian">Eesti (Estonian)</option>
            </select>
            <div>
              <button
                className={`px-4 py-2 rounded-lg ${
                  isButtonDisabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-500 text-white'
                }`}
                onClick={handleTranslate}
                disabled={isButtonDisabled} // 禁用按钮
              >
                {isButtonDisabled ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>
          <div className="mt-6 p-4 border border-gray-300 rounded-lg text-gray-600">
            <MdContent markdown={translatedText} />
          </div>
        </div>
      </div>
    );
  } else if (type == 'translate-rednote') {
    const handleTranslate = () => {
      setIsButtonDisabled(true);

      translateRednote(inputText, language)
        .then((data) => {
          setTranslatedText(data);
          setIsButtonDisabled(false);
        })
        .catch((error) => {
          console.error(error);
          setTranslatedText('Error occurred during translation.');
          setIsButtonDisabled(false);
        });
    };

    return (
      <div className="p-4 xm:p-0">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md border border-gray-300 rounded-lg">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg text-gray-600"
            placeholder="Enter your English text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4 flex-col gap-4 sm:flex-row">
            <select
              className="border border-gray-300 rounded-lg p-2 text-gray-600"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Chinese">中文 (Chinese)</option>
              <option value="Spanish">Español (Spanish)</option>
              <option value="French">Français (French)</option>
              <option value="German">Deutsch (German)</option>
              <option value="Japanese">日本語 (Japanese)</option>
              <option value="Korean">한국어 (Korean)</option>
              <option value="Russian">Русский (Russian)</option>
              <option value="Portuguese">Português (Portuguese)</option>
              <option value="Italian">Italiano (Italian)</option>
              <option value="Arabic">العربية (Arabic)</option>
              <option value="Hindi">हिन्दी (Hindi)</option>
              <option value="Turkish">Türkçe (Turkish)</option>
              <option value="Dutch">Nederlands (Dutch)</option>
              <option value="Swedish">Svenska (Swedish)</option>
              <option value="Polish">Polski (Polish)</option>
              <option value="Hebrew">עברית (Hebrew)</option>
              <option value="Thai">ไทย (Thai)</option>
              <option value="Vietnamese">Tiếng Việt (Vietnamese)</option>
              <option value="Indonesian">Bahasa Indonesia (Indonesian)</option>
              <option value="Malay">Bahasa Melayu (Malay)</option>
              <option value="Finnish">Suomi (Finnish)</option>
              <option value="Norwegian">Norsk (Norwegian)</option>
              <option value="Danish">Dansk (Danish)</option>
              <option value="Greek">Ελληνικά (Greek)</option>
              <option value="Hungarian">Magyar (Hungarian)</option>
              <option value="Czech">Čeština (Czech)</option>
              <option value="Romanian">Română (Romanian)</option>
              <option value="Bulgarian">Български (Bulgarian)</option>
              <option value="Ukrainian">Українська (Ukrainian)</option>
              <option value="Slovak">Slovenčina (Slovak)</option>
              <option value="Croatian">Hrvatski (Croatian)</option>
              <option value="Lithuanian">Lietuvių (Lithuanian)</option>
              <option value="Latvian">Latviešu (Latvian)</option>
              <option value="Estonian">Eesti (Estonian)</option>
            </select>
            <button
              className={`px-4 py-2 rounded-lg ${
                isButtonDisabled ? 'bg-gray-400' : 'bg-red-500'
              } text-white`}
              onClick={handleTranslate}
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? 'Generating...' : 'Generate'}
            </button>
          </div>
          <div className="mt-6 p-4 border border-gray-300 rounded-lg text-gray-600">
            <MdContent markdown={translatedText} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Invalid type</div>;
  }
}
