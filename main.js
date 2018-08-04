// I declare an empty image array that will store my Image objects.
let imageArray = [];

//finding image tag in html of which src attribute I will be able to change later.
let elImage1 = document.getElementById('random-image1');
let elImage2 = document.getElementById('random-image2');
let elImage3 = document.getElementById('random-image3');

//declaring image index for global access
let imageIndex1;
let imageIndex2;
let imageIndex3;

// new Constructor function for creating image objects
let Image = function(index, name, filePath, showed, clicked) {             
    this.index = index;
    this.name = name;
    this.filePath = filePath;
    this.showed = showed;
    this.clicked = clicked;
}

//Instanitating new image objects. Clicked and showed are assigned a value of 0.

if(localStorage.imageObject) {
    imageArray = JSON.parse(localStorage.getItem("imageObject"))
}
else {

let image1 = new Image(0, 'Thanos', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/code-demo/assets/thanos.jpg', 0, 0);
let image2 = new Image(1, 'Thor', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/code-demo/assets/thor.jpg', 0, 0);
let image3 = new Image(2, 'Deadpool', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/code-demo/assets/deadpool.jpeg', 0, 0);
let image4 = new Image(3, 'Black-panther', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/code-demo/assets/black-panther.jpg', 0, 0);
let image5 = new Image(4, 'Breakfast', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/assets/breakfast.jpg', 0, 0);
let image6 = new Image(5, 'Dog-duck', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/assets/dog-duck.jpg', 0, 0);
let image7 = new Image(6, 'Drstrange', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/code-demo/assets/drstrange.jpg', 0, 0);
let image8 = new Image(7, 'Hulk', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/code-demo/assets/hulk.jpg', 0, 0);
let image9 = new Image(8, 'Wolverine', 'https://raw.githubusercontent.com/CodePartnersMD/MD201-01/master/weeks-5-6/lecture-10/code-demo/assets/wolverine.jpg', 0, 0);

//pushing new image objects to image array
imageArray.push(image1, image2, image3,image4, image5, image6,image7, image8, image9);

};

// Creating a function that will help me select random images that weren't shown in the previous slide.
let randomImage = function() {

    // declaring indices of random images.
    let indOfImg1Shown;
    let indOfImg2Shown;
    let indOfImg3Shown;

     // This checks whether the images are shown the 2nd time.
    if(imageIndex1) {          
        indOfImg1Shown = imageIndex1.index;
        indOfImg2Shown = imageIndex2.index;
        indOfImg3Shown = imageIndex3.index;
    }

    // Making sure each of the three images are distinct. Also comparing with the previous one.
    let rnd1 = Math.round(Math.random() * (imageArray.length-1));
    while(rnd1 == indOfImg1Shown || rnd1 == indOfImg2Shown || rnd1 == indOfImg3Shown) {
        rnd1 = Math.round(Math.random() * (imageArray.length-1));
    }
    imageIndex1 = imageArray[rnd1];

    let rnd2 = Math.round(Math.random() * (imageArray.length-1));
    while(rnd1 == rnd2 || rnd2 == indOfImg1Shown || rnd2 == indOfImg2Shown || rnd2 == indOfImg3Shown) {
        rnd2 = Math.round(Math.random() * (imageArray.length-1));
    }
    imageIndex2 = imageArray[rnd2];
    
    let rnd3 = Math.round(Math.random() * (imageArray.length-1));
    while(rnd1 == rnd3 || rnd2 == rnd3 || rnd3 == indOfImg1Shown || rnd3 == indOfImg2Shown || rnd3 == indOfImg3Shown) {
        rnd3 = Math.round(Math.random() * (imageArray.length-1));
    }
    imageIndex3 = imageArray[rnd3];

    // added these lines so each time random images are selected, they need to be shown on the screen.
    elImage1.src = imageIndex1.filePath;
    elImage2.src = imageIndex2.filePath;
    elImage3.src = imageIndex3.filePath;

    // incrementing "showed" counter for each random image
    imageIndex1.showed++;
    imageIndex2.showed++;
    imageIndex3.showed++;
}
   
// variable to hold total selections, globally
let totalSelections = localStorage.getItem("total" || 0);

// let totalSelections = 0;
// if(localStorage.getItem('total')){
//     totalSelections = localStorage.getItem('total');
// } 

let totalSelected = document.getElementById('total-selected');


function chartLabels(prop) {
    let labels = []
    for(let i=0; i<imageArray.length; i++) {

        labels.push(imageArray[i][prop])
    }
return labels
}

function createChart () {
    var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: chartLabels('name'),
        datasets: [{
            label: ' Number of Votes',
            data: chartLabels('clicked'),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'


                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1,
            stack: 1
        },
        {
            label: ' Times shown',
            data: chartLabels('showed'),
            backgroundColor: [
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)',
                'rgba(245, 240, 80, 0.9)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'



            ],
            borderWidth: 1,
            stack: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

}





// creating event handler to track number of times image is clicked
let imageClick = function(e) {
    // FIRST, RECORD THE CLICK AND THEN SHOW NEXT THREE IMAGES
   
    //accessing clicked property on random image and incrementing by 1 each time clicked
    if(e.target.id == 'random-image1')              // this is basically checking which image was clicked so the corresponding counter to be incremented
        imageIndex1.clicked += 1;
    else if(e.target.id == 'random-image2')
        imageIndex2.clicked += 1;
    else
        imageIndex3.clicked += 1;
    
    // add 1 to totalSelections, and update the value on screen
    totalSelections++;
    totalSelected.innerText = 'Total selected: ' + totalSelections;
    
    // sum all clicks of the three images and if it is 25, remove event listners and show the result
    if(totalSelections === 25) {

        // remove imageClick event listner from each image
        elImage1.removeEventListener('click', imageClick);
        elImage2.removeEventListener('click', imageClick);
        elImage3.removeEventListener('click', imageClick);

        // add disabled class to images, to indicate it's disabled
        elImage1.className = 'disabled';
        elImage2.className = 'disabled';
        elImage3.className = 'disabled';

        console.log('25 selections have been made.');

        // create ul element for showing the result
        let ul = document.createElement('ul');
        // create li for each image with showed > 0
        for(let i=0; i < imageArray.length; i++) {
            if(imageArray[i].showed > 0) {
                let li = document.createElement('li');
                li.innerHTML = '<strong>' + imageArray[i].clicked + '</strong> votes for ' + imageArray[i].name + '.';
                li.innerHTML += ' Total times shown: <strong>' + imageArray[i].showed + '</strong>';
                // add it to ul
                ul.appendChild(li);
            }
        }

        // finally add the list (ul) to the result and show the result
        let res = document.getElementById('result');
        res.appendChild(ul);
        res.style.display = 'block';
        createChart()

} else {
//   This shows the next three images until the total selections reach 25. 
    randomImage();
    }

localStorage.setItem("imageObject", JSON.stringify(imageArray))
console.log(localStorage)
console.log(imageArray)

localStorage.setItem("total", totalSelections)


}

// attaching event listener to image tag
elImage1.addEventListener('click', imageClick);
elImage2.addEventListener('click', imageClick);
elImage3.addEventListener('click', imageClick);

// calling random image function that will display random image for the first time. 
randomImage();