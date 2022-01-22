let size;
let time;
let skin_type;
let skin_feel;
let divItems;

//getting value and coloring the div;

var getSize = (x,item) =>{
   
   
    divItems = document.getElementsByClassName('sizediv');
    this.clear();
    item.style.backgroundColor = '#E78471';
   
    size = x;
    console.log(size)
}


//this function is setting white background color
var clear = () => {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = 'white';
    }
    }


//getting value and coloring the div;

var getTime = (x,item) => {
    divItems = document.getElementsByClassName('timediv');
    this.clear();
    item.style.backgroundColor = '#E78471';
    time = x;
    console.log(time);
}


//getting value and coloring the div;

var getSkinType = (x,item) => {
    divItems = document.getElementsByClassName('typediv');
    this.clear();
    item.style.backgroundColor = '#E78471';

    skin_type = x;
    console.log(skin_type);

}


//getting value and coloring the div;

var getSkinFeel = (x,item) => {

    divItems = document.getElementsByClassName('feeldiv');
    this.clear();
    item.style.backgroundColor = '#E78471';


    skin_feel = x;
    console.log(skin_feel);

}


//collect all data in object

var getData = () => {

    let details = {
        size,
        time,
        skin_type,
        skin_feel,
    }

    console.log(details);
    window.location.href = '/quiz2/subscription'
}