// @ts-check
import { test, expect, chromium } from '@playwright/test';

test('Positive Test: Addition', async ({ page }) => {
  await page.goto('file:///../index.html');
  
  // Вводим числа
  await page.fill('#num1', '10');
  await page.fill('#num2', '20');
  
  // Нажимаем кнопку сложения
  await page.click('button >> text="+"');
  
  // Ожидаемый результат
  await expect(page.locator('#result')).toHaveText('Результат: 30');
});

test('Positive Test: Division without errors', async ({ page }) => {
  await page.goto('file:///../index.html');
  
  // Вводим числа
  await page.fill('#num1', '100');
  await page.fill('#num2', '25');
  
  // Нажимаем кнопку деления
  await page.click('button >> text="/"');
  
  // Ожидаемый результат
  await expect(page.locator('#result')).toHaveText('Результат: 4');
});

test('Negative Test: Division by zero', async ({ page }) => {
  await page.goto('file:///../index.html');
  
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
  await page.goto('file:///../index.html');
  
  // Оставляем оба поля пустыми
  await page.fill('#num1', '');
  await page.fill('#num2', '');
  
  // Нажимаем кнопку сложения
  await page.click('button >> text="+"');
  
  // Ожидаем, что результат останется пустым
  await expect(page.locator('#result')).toHaveText('Результат: NaN');
});

test('T',async ({page})=>{
  await page.goto('file:///../index.html');
  await expect(page).toHaveTitle(/Калькулятор/);

})
