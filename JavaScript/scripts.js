function DeactivateOtherItems(ThisElement) {
    let ElementParent = ThisElement.parentNode;
    let SelectedChild = ElementParent.querySelector(".activated-item");
    if (SelectedChild !== null){
        SelectedChild.classList.remove("activated-item");
    }
}



function ActivateItem(ThisElement) {
    DeactivateOtherItems(ThisElement)
    ThisElement.classList.add("activated-item");
}