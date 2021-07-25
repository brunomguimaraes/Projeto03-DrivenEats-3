/*----------- Beginning of Global Variables --------- */
let MainDishSelection;
let MainDishName;
let MainDishPrice;
let DrinkSelection;
let DrinkName;
let DrinkPrice;
let DesertSelection;
let DesertName;
let DesertPrice;
let TotalPrice;
/*----------- End of Global Variables --------- */

/*------------Beginning of functions while user is choosing from the menu ------------*/

function DeactivateOtherItems (ThisElement) {
    let ElementParent = ThisElement.parentNode;
    let ActivatedElement = ElementParent.querySelector(".activated-item");
    if (ActivatedElement !== null){
        ActivatedElement.classList.remove("activated-item");
    }
}

function EvaluateBottomButton () {
    if ( MainDishSelection !== undefined && DrinkSelection !== undefined && DesertSelection !== undefined) {
        let BottomButton = document.querySelector(".bottom-bar button");
        BottomButton.classList.add("activated-button");
        BottomButton.innerHTML = "Fechar pedido";
        BottomButton.onclick = ConfirmOrder;
    }
}

function TransformPriceIntoNumber (StringPrice) {
    StringPrice = StringPrice.replace("R$ ","");
    StringPrice = StringPrice.replace(",",".");
    let NumberPrice = Number(StringPrice);
    return NumberPrice
}

function ActivateMainDish (ThisElement) {
    DeactivateOtherItems(ThisElement);
    MainDishSelection = ThisElement;
    MainDishSelection.classList.add("activated-item");
    MainDishName = MainDishSelection.querySelector(".item-title").innerText;
    MainDishPrice = MainDishSelection.querySelector(".item-price").innerText;
    MainDishPrice = TransformPriceIntoNumber(MainDishPrice);    
    EvaluateBottomButton();
}

function ActivateDrink (ThisElement) {
    DeactivateOtherItems(ThisElement);    
    DrinkSelection = ThisElement;
    DrinkSelection.classList.add("activated-item");
    DrinkName = DrinkSelection.querySelector(".item-title").innerText;
    DrinkPrice = DrinkSelection.querySelector(".item-price").innerText;
    DrinkPrice = TransformPriceIntoNumber(DrinkPrice);
    EvaluateBottomButton();
}

function ActivateDesert (ThisElement) {
    DeactivateOtherItems(ThisElement);    
    DesertSelection = ThisElement;
    DesertSelection.classList.add("activated-item");
    DesertName = DesertSelection.querySelector(".item-title").innerText;
    DesertPrice = DesertSelection.querySelector(".item-price").innerText;
    DesertPrice = TransformPriceIntoNumber(DesertPrice);
    EvaluateBottomButton();
}

/*------------ End of functions while user is choosing from the menu ------------*/

/*------------Beginning of functions after user has chosen from the menu ------------*/

function InsertNameAndPrice (ConfirmationScreen,ItemClass,ItemName,ItemPrice) {
    let ItemLine = ConfirmationScreen.querySelector(ItemClass);
    ItemLine.firstElementChild.innerText = ItemName;
    if (ItemName === "Total"){
        ItemPrice = "R$ " + ItemPrice.toFixed(2);
    } else {
        ItemPrice = ItemPrice.toFixed(2);
    }
    ItemPrice = ItemPrice.replace(".",",");
    ItemLine.lastElementChild.innerText = ItemPrice;
}

function ConfirmOrder () {
    let ConfirmationScreen = document.querySelector(".confirmation-screen");
    InsertNameAndPrice (ConfirmationScreen,".main-dish",MainDishName,MainDishPrice);
    InsertNameAndPrice (ConfirmationScreen,".drink",DrinkName,DrinkPrice);
    InsertNameAndPrice (ConfirmationScreen,".desert",DesertName,DesertPrice);
    TotalPrice = MainDishPrice + DrinkPrice + DesertPrice;
    InsertNameAndPrice (ConfirmationScreen,".total","Total",TotalPrice);
    ConfirmationScreen.classList.remove("hidden");

}

function FinishOrder () {
    let ClientName = prompt("Qual é o seu nome?");
    let ClientAdress = prompt("Qual é o seu endereço?");
    TotalPrice = MainDishPrice + DrinkPrice + DesertPrice;
    TotalPrice = TotalPrice.toFixed(2);
    let WhatsappMessage = "Olá, gostaria de fazer o pedido:\n";
    WhatsappMessage = WhatsappMessage + "- Prato: " + MainDishName + "\n";
    WhatsappMessage = WhatsappMessage + "- Bebida: " + DrinkName + "\n";
    WhatsappMessage = WhatsappMessage + "- Sobremesa: " + DesertName + "\n";
    WhatsappMessage = WhatsappMessage + "Total: R$ " + TotalPrice + "\n" + "\n";
    WhatsappMessage = WhatsappMessage + "Nome: " + ClientName + "\n";
    WhatsappMessage = WhatsappMessage + "Endereço: " + ClientAdress;
    let WebLink = "https://wa.me/5521988405128?text=" + encodeURIComponent(WhatsappMessage);
    window.open(WebLink, '_blank');
}

function CancelOrder () {
    let ConfirmationScreen = document.querySelector(".confirmation-screen");
    ConfirmationScreen.classList.add("hidden");
}

/*------------ End of functions after user has chosen from the menu ------------*/