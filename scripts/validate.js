const validationParametersDict = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_err',
  errorClass: 'popup__error_visible'
}

const showInputError = (formElement, inputElement, errorMessage, validationParameters) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationParameters.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationParameters.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, validationParameters) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationParameters.inputErrorClass);
    errorElement.classList.remove(validationParameters.errorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, validationParameters) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationParameters);
    } else {
      hideInputError(formElement, inputElement, validationParameters);
    }
  };
  
  const setEventListeners = (formElement,validationParameters) => {
    const inputList = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
    const buttonElement = formElement.querySelector(validationParameters.submitButtonSelector);
  
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement, validationParameters.inactiveButtonClass);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, validationParameters);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement, validationParameters.inactiveButtonClass);
      });
    });
  };
  
  const enableValidation = (validationParameters) => {
    const formList = Array.from(document.querySelectorAll(validationParameters.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fields'));
  
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet, validationParameters);
      });
  
    });
  };
  
  enableValidation(validationParametersDict);
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  }
  function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
  }
  