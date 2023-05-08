export function openPopup(targetPopup) {
    targetPopup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEsc)
  }
export function closeByEsc(e) {
    if (e.key === "Escape") {
      const popup = document.querySelector(".popup_opened")
      closePopup(popup);
    }
}
export function closePopup(targetPopup) {
    targetPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEsc)
}