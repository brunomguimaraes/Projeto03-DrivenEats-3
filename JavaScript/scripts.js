function FinishOrder() {
    alert("É pra já!");
}


function ActivateBottomButton() {
    let BottomButton = document.querySelector(".bottom-bar button");

    BottomButton.classList.add("activated-button");
    BottomButton.innerHTML = "Fechar pedido";
    BottomButton.onclick = FinishOrder;
}

function PickSelectedMainDish () {
    let MainDishMenu = document.querySelector(".main-dish ul");
    let SelectedMainDish = MainDishMenu.querySelector(".activated-item");
    return SelectedMainDish;
}

function PickSelectedDrink () {
    let DrinkMenu = document.querySelector(".drink ul");
    let SelectedDrink = DrinkMenu.querySelector(".activated-item");
    return SelectedDrink;
}


function PickSelectedDesert () {
    let DesertMenu = document.querySelector(".desert ul");
    let SelectedDesert = DesertMenu.querySelector(".activated-item");
    return SelectedDesert;
}

function CheckAllMenus () {

    let SelectedMainDish = PickSelectedMainDish ();
    let SelectedDrink = PickSelectedDrink ();
    let SelectedDesert = PickSelectedDesert ();
    
    if ( SelectedMainDish !== null && SelectedDrink !== null && SelectedDesert !== null) {
        ActivateBottomButton();
    }
}

function DeactivateOtherItems(ThisElement) {
    let ElementParent = ThisElement.parentNode;
    let SelectedChild = ElementParent.querySelector(".activated-item");
    if (SelectedChild !== null){
        SelectedChild.classList.remove("activated-item");
    }
}

function ActivateItem(ThisElement) {
    DeactivateOtherItems(ThisElement);
    ThisElement.classList.add("activated-item");
    CheckAllMenus ();
}

