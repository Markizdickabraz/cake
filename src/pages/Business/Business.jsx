import React, { useState } from 'react'
import { Title } from '../About/AboutStyle';
import { BusinessContainer, TextBusiness } from './BusinessStyle';

const Business = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    const textToCopy = "0675880198";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch((error) => console.error('Failed to copy text:', error));
  };
  return (
    <BusinessContainer>
      <Title>Кондитерський цех "Ідеал" у місті Кривий Ріг терміново шукає офіційних дилерів та партнерів.</Title>
      <TextBusiness>Найбільший кондитерський цех у місті Кривий Ріг, у зв'язку з розширенням, терміново шукає офіційних дилерів та партнерів по всім містам України.</TextBusiness>
      <TextBusiness>Ми гарантуємо якість запропонованої продукції, постійний прибуток, співпрацю на довгі роки.</TextBusiness>
      <TextBusiness onClick={handleCopyText}>
        {isCopied ? "Номер телефону скопійовано!" : "Деталі за телефоном: (067)58-80-198, Валентина Тимофіївна."}
      </TextBusiness>
    </BusinessContainer>
  )
}

export default Business;
