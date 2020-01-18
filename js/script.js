const avg = document.querySelector('.avg');
const caut = document.querySelector('.caut');
const comp = document.querySelector('.comp');
const confident = document.querySelector('.confident');

function random() {
  return Math.floor(Math.random() * 20) + 1;
}
let bar1 = random();
let bar2 = random();
let bar3 = random();
let bar4 = random();
let bar5 = random();
let bar6 = 100 - (bar1 + bar2 + bar3 + bar4 + bar5);
let nowy = '';
nowy += bar1 + '% ';
nowy += bar2 + '% ';
nowy += bar3 + '% ';
nowy += bar4 + '% ';
nowy += bar5 + '% ';
nowy += bar6 + '%';

let bar7 = random();
let bar8 = random();
let bar9 = random();
let bar10 = random();
let bar11 = random();
let bar12 = 100 - (bar7 + bar8 + bar9 + bar10 + bar11);
let secondBatch = '';
secondBatch += bar7 + '% ';
secondBatch += bar8 + '% ';
secondBatch += bar9 + '% ';
secondBatch += bar10 + '% ';
secondBatch += bar11 + '% ';
secondBatch += bar12 + '%';

let bar13 = random();
let bar14 = random();
let bar15 = random();
let bar16 = random();
let bar17 = random();
let bar18 = 100 - (bar13 + bar14 + bar15 + bar16 + bar17);
let thirdBatch = '';
thirdBatch += bar13 + '% ';
thirdBatch += bar14 + '% ';
thirdBatch += bar15 + '% ';
thirdBatch += bar16 + '% ';
thirdBatch += bar17 + '% ';
thirdBatch += bar18 + '%';

let bar19 = random();
let bar20 = random();
let bar21 = random();
let bar22 = random();
let bar23 = random();
let bar24 = 100 - (bar19 + bar20 + bar21 + bar22 + bar23);
let forthBatch = '';
forthBatch += bar19 + '% ';
forthBatch += bar20 + '% ';
forthBatch += bar21 + '% ';
forthBatch += bar22 + '% ';
forthBatch += bar23 + '% ';
forthBatch += bar24 + '%';

avg.style.gridTemplateColumns = nowy;
caut.style.gridTemplateColumns =  secondBatch;
comp.style.gridTemplateColumns =  thirdBatch;
confident.style.gridTemplateColumns =  forthBatch;

Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
      //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(23 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse+"px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

let randomNumber = () => {
  return Math.floor(Math.random() * 28) + 1;
}

var config = {
  type: 'doughnut',
  data: {
    labels: [],
    datasets:[{
        label: 'My First dataset',
        backgroundColor: 'orange',
        borderColor: 'orange',
        data: [75]
    }]
  },
  options: {
    elements: {
      center: {
        text: '21/28',
        color: '#000000',
        fontStyle: 'Arial',
        sidePadding: 20
      }
    },
    cutoutPercentage: 92,
    rotation: 2 * Math.PI,
    circumference: 1.5 * Math.PI
  }
};

var config1 = {
  type: 'doughnut',
  data: {
    labels: [],
    datasets:[{
        label: 'My First dataset',
        backgroundColor: 'orange',
        borderColor: 'orange',
        data: [75]
    }]
  },
  options: {
    elements: {
      center: {
        text: randomNumber() + '/28',
        color: '#000000',
        fontStyle: 'Arial',
        sidePadding: 20
      }
    },
    cutoutPercentage: 92,
    rotation: 2 * Math.PI,
    circumference: 1.5 * Math.PI
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, config);

window.addEventListener('load', () => {
    if (myChart.options.elements.center.text == '21/28') {
      myChart.options.elements.center.text = randomNumber() + '/28';
      myChart.update();
    } else {
      myChart = new Chart(ctx, config1);
    }
});
