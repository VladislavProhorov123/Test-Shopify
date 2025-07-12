# Shopify Product Page Template — Test Project

## 📄 Описание

Тестовая Shopify-тема, в которой реализан кастомный шаблон страницы продукта.  
Весь функционал находится в `sections/product-template.liquid`.

## 🧱 Основные файлы

- `templates/product.liquid` – подключает секцию продукта
- `sections/product-template.liquid` – шаблон карточки товара со списком изображений

## 🚀 Как протестировать

1. Тема загружена в магазин `vlatest.myshopify.com` как неопубликованная.
2. Предпросмотр доступен по ссылке:https://vlatest.myshopify.com/products/snowboard?preview_theme_id=142741274822

## 💻 Технологии

- Shopify Liquid
- HTML/CSS/JS (без фреймворков)
- Shopify CLI

## 🔧 Запуск локально

```bash
shopify theme dev --store vlatest.myshopify.com