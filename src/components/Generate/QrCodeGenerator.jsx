import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import s from './qrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
  const [value, setValue] = useState(''); // Состояние для текста QR-кода
  const [result, setResult] = useState(''); // Состояние для сгенерированного QR-кода

  // Обработчик нажатия кнопки
  const onClickHandler = () => {
    if (!value.trim()) {
      // Проверка, что строка не пустая
      alert('Пожалуйста, введите текст для генерации QR-кода.');
      return;
    }

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    // Сохраняем новое значение в localStorage
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value); // Установка результата для отображения QR-кода
    setValue(''); // Очистка текстового поля
  };

  // Обработчик изменения ввода
  const onChangeHandler = (event) => {
    setValue(event.target.value); // Установка введённого текста
    setResult(''); // Сброс результата при изменении текста
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        placeholder="Введите текст..."
        onChange={onChangeHandler}
        className={s.input}
      />
      <button type="button" className={s.button} onClick={onClickHandler}>
        Сгенерировать QR
      </button>
      {result !== '' && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={result} size={200} />
        </div>
      )}
    </div>
  );
};
