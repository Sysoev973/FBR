const orderDialog = document.getElementById('order-dialog');
const orderButtons = document.querySelectorAll('.product-card__button');
const closeDialogButton = document.getElementById('close-order-dialog');
const selectedProductInput = document.getElementById('selected-product');
const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

// Функция очистки ошибок
const resetFormValidation = () => {
  const formElements = Array.from(orderForm.elements);
  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });
};

// Открытие модального окна
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    selectedProductInput.value = productName;
    orderDialog.showModal();
  });
});

// Закрытие по кнопке «Закрыть»
closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

// Сброс состояния при закрытии диалога
orderDialog.addEventListener('close', () => {
  resetFormValidation();
  orderForm.reset();
});

// Валидация и отправка формы
orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  resetFormValidation();

  if (!orderForm.checkValidity()) {
    const formElements = Array.from(orderForm.elements);
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });
    orderForm.reportValidity();
    return;
  }

  // Успешная отправка
  successMessage.hidden = false;
  orderDialog.close();
  
  // Автоскрытие плашки успешной отправки через 5 секунд
  setTimeout(() => {
    successMessage.hidden = true;
  }, 5000);
});