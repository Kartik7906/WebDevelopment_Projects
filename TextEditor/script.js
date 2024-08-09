let optionsButtons = document.querySelectorAll(".option-button");
let advanceOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("font-size");
let writtingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList =[
    "Arial",
    "Verdana", 
    "Times New Roman", 
    "Garamond",
     "Georgia",
      "Courier New",
       "cursive"];

const initializer = () =>{
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    // create options for font names
    fontList.map(value => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // fonsize allows only till 7
    for(let i=1; i<=7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }


    // default size
    fontSizeRef.value = 3;

};

// main logic
const modifyText = (command, defaultUi, value) => {
    document.execCommand(command,defaultUi,value);
};

// for basic operation which dont need value parameter
optionsButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        modifyText(button.id, false,null);
    });
});

// options that require value parameter 
advanceOptionButton.forEach((button) =>{
    button.addEventListener("change", ()=> {
        modifyText(button.id, false, button.value);
    });
});
// link
linkButton.addEventListener("click", () =>{
    let userLink = prompt("Enter a URL");
    if(/http/i.test(userLink)){
        modifyText(linkButton.id, false, userLink);
    }
    else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) =>{
    className.forEach((button) => {
            button.addEventListener("click", () =>{

                if(needsRemoval){
                    let alreadyActive = false;
                    console.log("NOOOO");
                    if(button.classList.contains("active")){
                        alreadyActive = true;
                    }

                    highlighterRemover(className);
                    if(!alreadyActive){
                        button.classList.add("active");
                    }
                }
                else{
                    button.classList.toggle("active");
                }
         });
    });
};

const highlighterRemover = (className) =>{
    className.forEach((button) =>{
        button.classList.remove("active");
    });
}



window.onload = initializer();