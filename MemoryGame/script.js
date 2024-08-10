let cards = [
    {
        'name': '1',
        'img': 'pic1.avif'
    },
    {
        'name': '2',
        'img': 'pic2.avif'
    },
    {
        'name': '3',
        'img': 'pic3.avif'
    },
    {
        'name': '4',
        'img': 'pic4.avif'
    },
    {
        'name': '5',
        'img': 'pic5.avif'
    },
    {
        'name': '6',
        'img': 'pic6.webp'
    }
];

const parentdiv = document.querySelector('#card-section');
const gameCard = cards.concat(cards);

// step 3:
// basic code to make div suffel you just have to change the data of an array by making an funtion:
const mynumbers = (array) =>{
    for(let i = array.length-1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1))

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

let shuffledchild = mynumbers(gameCard);

let clickcnt = 0;
let firstcard = "";
let secondcard = "";

// styling the match:
const card_matches = ()=>{
    let card_selected = document.querySelectorAll(".card_selected")

    card_selected.forEach((currelement)=>{
        currelement.classList.add("cardMatch");
    })
}


// step 7 restgame :
const resrtGame = () =>{
    firstcard = "";
    secondcard = "";
    clickcnt = 0;

    let card_selected = document.querySelectorAll(".card_selected")

    card_selected.forEach((currelement)=>{
        currelement.classList.remove("card_selected");
    })
}

// step 4:
parentdiv.addEventListener("click", (event)=>{


    let curcard = event.target;
    clickcnt++;
    if(clickcnt < 3){

        if(clickcnt === 1){
            firstcard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
        }
        else{
            secondcard = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
        }

        if(firstcard !== "" && secondcard !== ""){
            if(firstcard === secondcard){
                // curcard.classList.add("cardMatch");
                setTimeout(()=>{
                    card_matches();
                    resrtGame();
                },1000)
                
            }
            else{
                setTimeout(()=>{
                    resrtGame();
                },1000)
            }
        }
    }

    if(curcard.id === "card-section"){
        return false;
    }
    
})


for(let i = 0; i<shuffledchild.length; i++){
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffledchild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledchild[i].img})`;

    // create 2 div extra here:
    const frontDiv = document.createElement('div');
    frontDiv.classList.add('front_card');

    // another one is here:
    const backDiv = document.createElement('div');
    backDiv.classList.add('back_card');

    // add image to back div only:
    backDiv.style.backgroundImage = `url(${shuffledchild[i].img})`;


    parentdiv.appendChild(childDiv);
    childDiv.appendChild(frontDiv);
    childDiv.appendChild(backDiv);
}


