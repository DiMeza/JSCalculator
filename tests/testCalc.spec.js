// @ts-check
import { test, expect } from '@playwright/test';

test('Positive Test: Addition', async ({ page }) => {
  await page.goto('file:///C:/Users/meza2/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/it-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F/JSCalculator/index.html');
  
  // Вводим числа
  await page.fill('#num1', '10');
  await page.fill('#num2', '20');
  
  // Нажимаем кнопку сложения
  await page.click('button >> text="+"');
  
  // Ожидаемый результат
  await expect(page.locator('#result')).toHaveText('Результат: 30');
});

test('Positive Test: Division without errors', async ({ page }) => {
  await page.goto('file:///C:/Users/meza2/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/it-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F/JSCalculator/index.html');
  
  // Вводим числа
  await page.fill('#num1', '100');
  await page.fill('#num2', '25');
  
  // Нажимаем кнопку деления
  await page.click('button >> text="/"');
  
  // Ожидаемый результат
  await expect(page.locator('#result')).toHaveText('Результат: 4');
});

test('Negative Test: Division by zero', async ({ page }) => {
  await page.goto('file:///C:/Users/meza2/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/it-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F/JSCalculator/index.html');
  
 // Вводим числа
 await page.fill('#num1', '50');
 await page.fill('#num2', '0');
 
 // Обрабатываем событие диалога
 page.once('dialog', async (dialog) => {
   // Проверяем текст сообщения
   await expect(dialog.message()).toContain('Ошибка! Деление на ноль.');
   
   // Закрываем диалог
   await dialog.dismiss();
 });
 
 // Нажимаем кнопку деления
 await page.click('button >> text="/"');
});

test('Negative Test: Empty fields', async ({ page }) => {
  await page.goto('file:///C:/Users/meza2/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/it-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F/JSCalculator/index.html');
  
  // Оставляем оба поля пустыми
  await page.fill('#num1', '');
  await page.fill('#num2', '');
  
  // Нажимаем кнопку сложения
  await page.click('button >> text="+"');
  
  // Ожидаем, что результат останется пустым
  await expect(page.locator('#result')).toHaveText('Результат: NaN');
});

test('T',async ({page})=>{
  await page.goto('file:///C:/Users/meza2/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/it-%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F/JSCalculator/index.html');
  await expect(page).toHaveTitle(/Калькулятор/);

})
