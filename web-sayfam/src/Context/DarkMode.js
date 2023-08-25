import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Renk modu bilgisini paylaşmak için bir context oluşturdum.
const ColorModeContext = createContext();

// Diğer bileşenlerde renk modu bilgisine erişimi sağlamak için bir özel kancası (hook) oluşturdum.
export const useColorMode = () => {
  return useContext(ColorModeContext);
};

// Renk modu bilgisini ve değiştirme işlevini sağlayan ColorModeProvider bileşeni oluşturdum.
export const ColorModeProvider = ({ children }) => {
  // Renk modunun durumunu yönetmek için state oluşturdum.
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Tarayıcının tercih ettiği renk modunu kontrol ettim.
    const preferredDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Tarayıcının tercih ettiği renk modu veya depolanan renk modunu kontrol ederek state'i güncelledim.
    const storedDarkMode = localStorage.getItem('darkMode');
    if (preferredDarkMode || storedDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Renk modunu değiştiren işlev.
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());

    // Kullanıcıya bilgi mesajı gösterdim.
    const modeMessage = newDarkMode ? 'Karanlık moda geçildi' : 'Açık moda geçildi';
    toast.info(modeMessage, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  // Paylaşılan context değerini oluşturdum.
  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  // Context'i sağladım.
  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </ColorModeContext.Provider>
  );
};
