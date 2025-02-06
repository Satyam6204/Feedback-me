let numVal=0;
console.log("javaScript is Running")
let main = document.querySelector('main');

let x1 = document.getElementById('btn1');
let x2 = document.getElementById('btn2');
let x3 = document.getElementById('btn3');
let x4 = document.getElementById('btn4');
let x5 = document.getElementById('btn5');
let button = document.getElementById('submit');

const b1 = btn1 = () => {
    x1.style.backgroundColor = 'white';
    x2.style.backgroundColor = '';
    x3.style.backgroundColor = '';
    x4.style.backgroundColor = '';
    x5.style.backgroundColor = '';

    numVal = 1;
    console.log(value);
}
const b2 = btn2 = () => {
    x1.style.backgroundColor = 'white';
    x2.style.backgroundColor = 'white';
    x3.style.backgroundColor = '';
    x4.style.backgroundColor = '';
    x5.style.backgroundColor = '';
    numVal = 2;
    console.log(value);
}
const b3 = btn3 = () => {
    x1.style.backgroundColor = 'white';
    x2.style.backgroundColor = 'white';
    x3.style.backgroundColor = 'white';
    x4.style.backgroundColor = '';
    x5.style.backgroundColor = '';
    numVal = 3;
    console.log(value);
}
const b4 = btn4 = () => {
    x1.style.backgroundColor = 'white';
    x2.style.backgroundColor = 'white';
    x3.style.backgroundColor = 'white';
    x4.style.backgroundColor = 'white';
    x5.style.backgroundColor = '';
    numVal = 4;
    console.log(value);
}
const b5 = btn5 = () => {
    x1.style.backgroundColor = 'white';
    x2.style.backgroundColor = 'white';
    x3.style.backgroundColor = 'white';
    x4.style.backgroundColor = 'white';
    x5.style.backgroundColor = 'white';
    numVal = 5;

}



    const result = button.addEventListener('click', function () {

        let box = document.querySelector('#box')
        box.style.display = "none"
        console.log("keee")
        let mPB = document.createElement('div');
        mPB.style.left = "0";
        mPB.style.right = "0";
        mPB.style.height = "300px";
        mPB.style.width = "300px";
        mPB.style.borderRadius = "20px"
        mPB.style.backgroundColor = "#333";
        mPB.style.display = "flex";
        mPB.style.justifyContent = "center";
        mPB.style.alignItems = "center";
        mPB.style.flexDirection = "column"
        let CardImage = document.createElement('img');
        CardImage.src = "card.webp";
        CardImage.style.width = '150px';
        let text1 = document.createElement('h5');
        text1.style.color = ' rgb(253, 131, 66)';
        text1.style.backgroundColor = 'gray';
        text1.style.borderRadius = '5px';
        text1.style.height = '18px';
        text1.style.width = '130px';
        text1.style.textAlign = 'center';
        text1.style.marginTop = '1px';
        let text2 = document.createElement('h2');
        text2.style.color = 'white'
        text2.style.marginTop = '10px';
        let para = document.createElement('p');
        para.style.color = 'gray';
        para.style.marginTop = '10px';
        para.style.textAlign = 'center';
        para.style.fontSize = '15px';
        text1.textContent = `You selected ${numVal} out of 5`;
        text2.textContent = 'Thank you!';
        para.textContent = `We appreciate you 
            taking the time to give a rating.
            if you ever need more support,
            don't hesitate to get in touch`;
        mPB.append(CardImage, text1, text2, para)
        box.appendChild(mPB);
        main.appendChild(mPB);
        document.body.appendChild(main)

    })








