(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function r(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(r)?r:String(r)}var n=function(){function e(t){var n,o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i=function(e){"Escape"===e.key&&u.closePopup()},(o=r(o="_handleEscClose"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._selector=document.querySelector(t)}var n,o;return n=e,(o=[{key:"openPopup",value:function(){console.log(this),this._selector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._selector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._selector.querySelector(".popup__close-button").addEventListener("click",this.closePopup.bind(this)),this._selector.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&e.closePopup()}))}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},u.apply(this,arguments)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function s(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(y,e);var t,r,n,p,f=(n=y,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(n);if(p){var r=c(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(this,e)});function y(e,t){var r,n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),n=a(r=f.call(this,e)),i=function(){r._formValues={};for(var e=0;e<r._inputsMass.length;e++)r._formValues[r._inputsMass[e].name]=r._inputsMass[e].value;return r._formValues},(o=s(o="getInputValues"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,r._formSubmiter=t,r._inputsMass=r._selector.querySelectorAll(".popup__input"),r._form=r._selector.querySelector(".popup__form"),r}return t=y,(r=[{key:"setEventListeners",value:function(){u(c(y.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmiter)}},{key:"closePopup",value:function(){u(c(y.prototype),"closePopup",this).call(this),this._form.reset()}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),y}(n);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},m.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(o){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imgPopupImg=document.querySelector("#full-image-popup__img"),t._imgPopupName=document.querySelector(".full-image-popup__img-name"),t}return t=u,(r=[{key:"openPopup",value:function(e){m(b(u.prototype),"openPopup",this).call(this),this._imgPopupImg.src=e.target.src;var t=e.target.closest(".element").querySelector(".element__bottom-text").textContent;this._imgPopupImg.alt=t,this._imgPopupName.textContent=t}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(n);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function g(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(t)?t:String(t)}var S=function(){function e(t,r){var n,o,i,u=this,l=t.items,a=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i=function(e){return u._renderer(e)},(o=g(o="renderer"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._items=l,this._renderer=a,this._selector=document.querySelector(r)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){for(var t=0;t<e.length;t++)this._selector.prepend(e[t]._createElement())}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function k(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===w(t)?t:String(t)}var E=function(){function e(t){var r,n,o,i=this,u=t.userName,l=t.userWork;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(){return{name:i._userName.textContent,work:i._userWork.textContent}},(n=k(n="getUserInfo"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._userName=document.querySelector(u),this._userWork=document.querySelector(l)}var t,r;return t=e,(r=[{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userWork.textContent=t}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var C=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationParameters=t,this._formElement=r,this._fieldset=this._formElement.querySelector("fieldset"),this._inputList=Array.from(this._fieldset.querySelectorAll(this._validationParameters.inputSelector)),this._buttonElement=this._fieldset.querySelector(this._validationParameters.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}},{key:"_hideInputError",value:function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}},{key:"_checkInputValidity",value:function(e,t,r){t.validity.valid?this._hideInputError(e,t,r):this._showInputError(e,t,t.validationMessage,r)}},{key:"_setEventListeners",value:function(e,t){this.toggleButtonState(this._inputList,this._buttonElement,t.inactiveButtonClass);var r=this;this._inputList.forEach((function(n){n.addEventListener("input",(function(){r._checkInputValidity(e,n,t),r.toggleButtonState(r._inputList,r._buttonElement,t.inactiveButtonClass)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners(this._fieldset,this._validationParameters)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(e,t,r){this._hasInvalidInput(e)?(t.classList.add(r),t.setAttribute("disabled","disabled")):(t.classList.remove(r),t.removeAttribute("disabled","disabled"))}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var q=function(){function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=t,this._currentCardImg=r,this._currentCardTitle=n,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getCardTemplate",value:function(){return this._templateSelector.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(e,t,r){e.addEventListener("click",r),t.querySelector(".element__delete").addEventListener("click",T),t.querySelector(".element__bottom-like").addEventListener("click",x)}},{key:"_createElement",value:function(){var e=this._getCardTemplate(),t=e.querySelector(".element__image");return t.src=this._currentCardImg,t.alt=this._currentCardTitle,e.querySelector(".element__bottom-text").textContent=this._currentCardTitle,this._setEventListeners(t,e,this._handleCardClick),e}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){e.target.closest(".element").remove()}function x(e){e.target.classList.toggle("element__bottom-like_liked")}var R={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_err",errorClass:"popup__error_visible"},B=document.querySelector("#element").content;document.querySelector(".page").classList.remove("no-transition");var V=document.querySelector("#profileAddForm"),N=document.querySelector("#profileEditForm"),A=new C(R,V);A.enableValidation(),new C({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_err",errorClass:"popup__error_visible"},N).enableValidation();var D=new d("#full-image-popup");D.setEventListeners();var W=document.querySelector(".profile__add-button"),M=document.querySelector(".profile__edit-button"),U=new S({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){for(var t=[],r=0;r<e.length;r++){var n=new q(B,e[r].link,e[r].name,D.openPopup.bind(D));t.push(n)}return t}},".elements");U.addItem(U.renderer(U._items));var F=new E({userName:"#profile__name",userWork:"#profile__work"}),z=new p("#popupEdit",(function(e){e.preventDefault(),F.setUserInfo(z.getInputValues().name_input,z.getInputValues().work_input),z.closePopup()}));z.setEventListeners();var G=new p("#popupAdd",(function(e){e.preventDefault(),U.addItem(U.renderer([{name:G.getInputValues().newPlaceName,link:G.getInputValues().newPlaceImgLink}])),G.closePopup()}));G.setEventListeners();var H=document.querySelector("#popupName"),J=document.querySelector("#popupWork");W.addEventListener("click",(function(){G.openPopup.call(G),A.toggleButtonState(A._inputList,A._buttonElement,R.inactiveButtonClass)})),M.addEventListener("click",(function(){z.openPopup.call(z),H.value=F.getUserInfo().name,J.value=F.getUserInfo().work}))})();
//# sourceMappingURL=main.js.map