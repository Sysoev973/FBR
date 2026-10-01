// Минимальная логика модального окна (КР №1 оценивается как HTML/CSS-проект).
// На страницах без модалки (product, order, contacts) скрипт ничего не делает.
const orderDialog = document.getElementById('order-dialog');

if (orderDialog) {
  const orderForm = document.getElementById('order-form');
  const selectedInput = document.getElementById('selected-product');
  const selectedLabel = document.getElementById('selected-product-label');
  const successMessage = document.getElementById('success-message');

  const resetValidation = () => {
    Array.from(orderForm.elements).forEach((el) => el.removeAttribute('aria-invalid'));
  };

  document.querySelectorAll('.product-card__button').forEach((button) => {
    button.addEventListener('click', () => {
      selectedInput.value = button.dataset.product;
      selectedLabel.textContent = 'Выбран товар: ' + button.dataset.product;
      selectedLabel.hidden = false;
      orderDialog.showModal();
    });
  });

  document.getElementById('close-order-dialog').addEventListener('click', () => orderDialog.close());

  // Закрытие по клику на затемнённый фон
  orderDialog.addEventListener('click', (event) => {
    if (event.target === orderDialog) orderDialog.close();
  });

  orderDialog.addEventListener('close', () => {
    resetValidation();
    orderForm.reset();
    selectedLabel.hidden = true;
  });

  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    resetValidation();
    if (!orderForm.checkValidity()) {
      Array.from(orderForm.elements).forEach((el) => {
        if (el.willValidate && !el.checkValidity()) el.setAttribute('aria-invalid', 'true');
      });
      orderForm.reportValidity();
      return;
    }
    orderDialog.close();
    successMessage.hidden = false;
    setTimeout(() => { successMessage.hidden = true; }, 5000);
  });
}
