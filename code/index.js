var storedData = [];
var imgStorage = [];
var getThatSexyPhoto = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];
var totalClicks = 0;

function GetThatPic(name, path){
  this.pic = name;
  this.path = path;
  this.count = 0;
  imgStorage.push(this);
}

var imgCaller = function () {
  for(var i = 0; i < getThatSexyPhoto.length; i += 1) {
    new GetThatPic(getThatSexyPhoto[i], 'img/'  + getThatSexyPhoto[i] + '.jpg');
  }
}
var tableLabels = function() {
    for (i = 0; i < pictureName.length; i += 1) {
    pictureName[i].pic + ', '
  }
}
getRandomIndex = function() {
  return Math.floor((Math.random() * (14-1) + 1));
}
var index1;
var index2;
var index3;

var tracker = function () {
    index1 = getRandomIndex();
    var firstImage = document.getElementById('box1');
    firstImage.src = imgStorage[index1].path;


    index2 = getRandomIndex();
    var secondImage = document.getElementById('box2');
    secondImage.src = imgStorage[index2].path;

    index3 = getRandomIndex();
    var thirdImage = document.getElementById('box3');
    thirdImage.src = imgStorage[index3].path;
    if(index1 === index2 || index1 === index3 || index2 === index3 ) {
      tracker();
    }
}
var killThatChart = function() {
}
var hideChart = document.getElementById('masterDataBox')
var resetBtn = document.getElementById('imgButtonClick');
resetBtn.addEventListener('click', function() {
  totalClicks = 0;
  btnFunc();
  hideChart.className = 'hidden'
});

var btnFunc = function() {
  var eventRemover =function() {
    img1Btn.removeEventListener('click', img1BtnFunc);
    img2Btn.removeEventListener('click', img2BtnFunc);
    img3Btn.removeEventListener('click', img3BtnFunc);
  }
  var img1BtnFunc = function() {
    imgStorage[index1].count ++;
    if(totalClicks < 15 ) {
      totalClicks += 1;
      tracker();
    } else {
      eventRemover();
      chartFantastic();
      myChart.className=''
    }
  }
  var img2BtnFunc = function() {
    imgStorage[index1].count ++;
    if(totalClicks < 15 ) {
      totalClicks += 1;
      tracker();
    } else {
      eventRemover();
      chartFantastic();
      myChart.className=''
    }
  }
  var img3BtnFunc = function() {
    imgStorage[index1].count ++;
    if(totalClicks < 15 ) {
      totalClicks += 1;
      tracker();
    } else {
      eventRemover();
      chartFantastic();
      myChart.className=''
    }
  }
  var img1Btn = document.getElementById('box1');
    img1Btn.addEventListener('click', img1BtnFunc);
  var img2Btn = document.getElementById('box2');
    img2Btn.addEventListener('click', img2BtnFunc);
  var img3Btn = document.getElementById('box3');
    img3Btn.addEventListener('click', img3BtnFunc);
  }
  var chartFantastic = function() {
  var data = {
    labels: ['bag', 'banana', 'boots', 'cthulhu', 'dragon', 'pen', 'shark', 'sweep', 'unicorn', 'water_can', 'wine_glass', 'chair', 'scissors', 'usb'],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "purple",
        strokeColor: "black",
        highlightFill: "black",
        highlightStroke: "rgba(220,220,220,1)",
        data: [imgStorage[0].count,imgStorage[1].count,imgStorage[2].count,imgStorage[3].count,imgStorage[4].count,imgStorage[5].count,imgStorage[6].count,imgStorage[7].count,imgStorage[8].count,imgStorage[9].count,imgStorage[10].count,imgStorage[11].count,imgStorage[12].count,imgStorage[13].count]
      },
    ]
  };
  var ctx = document.getElementById("myChart").getContext("2d");
  ctx.canvas.width = 800;
  ctx.canvas.height = 400;
  var myNewChart = new Chart(ctx).Bar(data);
}

imgCaller();
tracker();
btnFunc();
