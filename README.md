# Progress Component

Компонент Progress отображает прогресс выполнения задачи в виде дуги, поддерживает анимацию и скрытие.

---

### Демо - https://denis-gh.github.io/ozon-test-task/

---

## Как использовать компонент в своих проектах

1. Скопируйте файлы `js/progress.js` и `styles/progress.css` в свой проект.

2. Инициализируйте Progress, передав любой контейнер (строку-селектор контейнера или DOM-элемент):

```javascript
const progress = new Progress('#progress-сontainer')
// или
const container = document.getElementById('progress-сontainer')
const progress = new Progress(container)
```
3. Используйте API методы

| Метод | Описание |
|-------|----------|
| `setValue(number)` | Устанавливает прогресс (от 0 до 100) |
| `setAnimated(boolean)` | Включает/отключает анимацию вращения |
| `setHidden(boolean)` | Показывает/скрывает компонент |

---

## Автор

#### Денис Вакуленко:

- [telegram](https://t.me/denis0tg)
- [e-mail](mailto:00vakulenko@gmail.com)