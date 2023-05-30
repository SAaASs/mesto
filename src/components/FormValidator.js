export class FormValidator {
  constructor(validationParameters, formElement) {
    this._validationParameters = validationParameters
    this._formElement = formElement
    this._fieldset = this._formElement.querySelector('fieldset')
    this._inputList = Array.from(this._fieldset.querySelectorAll(this._validationParameters.inputSelector));
    this._buttonElement = this._fieldset.querySelector(this._validationParameters.submitButtonSelector);
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
    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState(this._inputList, this._buttonElement, validationParameters.inactiveButtonClass);
    const currentContext = this
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        currentContext._checkInputValidity(formElement, inputElement, validationParameters);
        // чтобы проверять его при изменении любого из полей
        currentContext._toggleButtonState(currentContext._inputList, currentContext._buttonElement, validationParameters.inactiveButtonClass);
      });
    });
  };
  enableValidation() {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      this._setEventListeners(this._fieldset, this._validationParameters);
  };
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  };
  _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled")
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled", "disabled")
  }
  }
}

















