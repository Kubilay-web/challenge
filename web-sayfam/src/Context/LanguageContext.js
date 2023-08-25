import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import Data from '../Api/Data';
import { toast } from 'react-toastify'; 

// Dil bilgisini paylaşmak için bir context oluşturdum.
const LanguageContext = createContext();

// Diğer bileşenlerde dil bilgisine erişimi sağlamak için bir özel kancası (hook) oluşturdum.
export function useLanguage() {
  return useContext(LanguageContext);
}

// Dil bilgisini ve dil değiştirme işlevini sağlayan LanguageProvider bileşeni oluşturdum.
export function LanguageProvider({ children }) {
  // Kullanıcının seçtiği dili depolamak ve yönetmek için state oluşturdum.
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language') || 
    (navigator.languages.includes('tr') ? 'tr' : 'en')
  );

  // Dil seçimini değiştiren işlev.
  const toggleLanguage = async () => {
    // Şu anki dili tersine çevirerek yeni bir dil belirledim.
    const newLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    
    // State'i güncelledim.
    setCurrentLanguage(newLanguage);
    
    // Yeni dili yerel depolamada sakladım.
    localStorage.setItem('language', newLanguage);

    try {
      // Yeni dili kullanarak API isteği yaptım.
      const response = await axios.post(
        'https://reqres.in/api/workintech',
        { language: newLanguage }
      );

      // API cevabını konsola yazdırdım.
      console.log(response.data);

      // Yeni dili kullanarak veri nesnesinden ilgili dil kaynaklarına eriştim.
      console.log(Data[newLanguage]);

      toast.success(`Dil değiştirildi: ${newLanguage === 'tr' ? 'Türkçe' : 'İngilizce'}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose:1000 
      });

    } catch (error) {
      // Hata durumunda hata mesajını konsola yazdırdım.
      console.error('Hata:', error);

      // Hata durumunda toast mesajı göster.
      toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  // Dil bilgisini ve dil değiştirme işlevini paylaşan bir context sağladım.
  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
