












export class FormValidator {
  constructor(validationParameters, formElementSelector) {
    this._validationParameters = validationParameters
    this._formElement = formElementSelector
  }
  _showInputError(formElement, inputElement, errorMessage, validationParameters) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationParameters.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationParameters.errorClass);
  };
  _hideInputError(formElement, inputElement, validationParameters) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationParameters.inputErrorClass);
    errorElement.classList.remove(validationParameters.errorClass);
    errorElement.textContent = '';
  };
  _checkInputValidity(formElement, inputElement, validationParameters) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, validationParameters);
    } else {
      this._hideInputError(formElement, inputElement, validationParameters);
    }
  };
  _setEventListeners(formElement,validationParameters) {
    const inputList = Array.from(formElement.querySelectorAll(validationParameters.inputSelector));
    const buttonElement = formElement.querySelector(validationParameters.submitButtonSelector);
  
    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState(inputList, buttonElement, validationParameters.inactiveButtonClass);
    const currentContext = this
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        currentContext._checkInputValidity(formElement, inputElement, validationParameters);
        // чтобы проверять его при изменении любого из полей
        currentContext._toggleButtonState(inputList, buttonElement, validationParameters.inactiveButtonClass);
      });
    });
  };
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formElement));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fields'));
  
      fieldsetList.forEach((fieldSet) => {
        this._setEventListeners(fieldSet, this._validationParameters);
      });
  
    });
  };
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  };
  _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
  }
}

















