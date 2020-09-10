$(document).ready(function() {
    $.get("/api/seed", seed);
    function seed(data) {
        console.log(data)
    }


    $.get("/api/seed", data);

    function data(data) {
        // Set label array
        var labels = [];
        switch (new Date().getMonth()) {
            case 0:
                labels = ["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan"];
                break;
            case 1:
                labels = ["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"];
                break;
            case 2:
                labels = ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"];
                break;
            case 3:
                labels = ["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr"];
                break;
            case 4:
                labels = ["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"];
                break;
            case 5:
                labels = ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];
                break;
            case 6:
                lables = ["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul"];
                break;
            case 7:
                labels = ["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];
                break;
            case 8:
                labels = ["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"];
                break;
            case 9:
                labels = ["Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"];
                break;
            case 10:
                labels = ["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"];
                break;
            case 11:
                labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                break;
        }
        console.log(data)
        var cutter61 = []; //position 0
        var cutter62 = []; //position 1
        var cutter63 = []; //position 2
        var cutter71 = []; //position 3
        var cutter72 = []; //position 4
        var cutter73 = []; //position 5
        var cutter81 = []; //position 6
        var cutter82 = []; //position 7
        var cutter83 = []; //position 8
        var cutter91 = []; //position 9
        var cutter92 = []; //position 10
        var cutter93 = []; //position 11

        cutter61.push(data[0].month1, data[0].month2, data[0].month3, data[0].month4, data[0].month5, data[0].month6, data[0].month7, data[0].month8, data[0].month9, data[0].month10, data[0].month11, data[0].month12)
        cutter62.push(data[1].month1, data[1].month2, data[1].month3, data[1].month4, data[1].month5, data[1].month6, data[1].month7, data[1].month8, data[1].month9, data[1].month10, data[1].month11, data[1].month12)
        cutter63.push(data[2].month1, data[2].month2, data[2].month3, data[2].month4, data[2].month5, data[2].month6, data[2].month7, data[2].month8, data[2].month9, data[2].month10, data[2].month11, data[2].month12)
        cutter71.push(data[3].month1, data[3].month2, data[3].month3, data[3].month4, data[3].month5, data[3].month6, data[3].month7, data[3].month8, data[3].month9, data[3].month10, data[3].month11, data[3].month12)
        cutter72.push(data[4].month1, data[4].month2, data[4].month3, data[4].month4, data[4].month5, data[4].month6, data[4].month7, data[4].month8, data[4].month9, data[4].month10, data[4].month11, data[4].month12)
        cutter73.push(data[5].month1, data[5].month2, data[5].month3, data[5].month4, data[5].month5, data[5].month6, data[5].month7, data[5].month8, data[5].month9, data[5].month10, data[5].month11, data[5].month12)
        cutter81.push(data[6].month1, data[6].month2, data[6].month3, data[6].month4, data[6].month5, data[6].month6, data[6].month7, data[6].month8, data[6].month9, data[6].month10, data[6].month11, data[6].month12)
        cutter82.push(data[7].month1, data[7].month2, data[7].month3, data[7].month4, data[7].month5, data[7].month6, data[7].month7, data[7].month8, data[7].month9, data[7].month10, data[7].month11, data[7].month12)
        cutter83.push(data[8].month1, data[8].month2, data[8].month3, data[8].month4, data[8].month5, data[8].month6, data[8].month7, data[8].month8, data[8].month9, data[8].month10, data[8].month11, data[8].month12)
        cutter91.push(data[9].month1, data[9].month2, data[9].month3, data[9].month4, data[9].month5, data[9].month6, data[9].month7, data[9].month8, data[9].month9, data[9].month10, data[9].month11, data[9].month12)
        cutter92.push(data[10].month1, data[10].month2, data[10].month3, data[10].month4, data[10].month5, data[10].month6, data[10].month7, data[10].month8, data[10].month9, data[10].month10, data[10].month11, data[10].month12)
        cutter93.push(data[11].month1, data[11].month2, data[11].month3, data[11].month4, data[11].month5, data[11].month6, data[11].month7, data[11].month8, data[11].month9, data[11].month10, data[11].month11, data[11].month12)
        
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart1 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Target',
                    data: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
                    backgroundColor: 'rgba(255,255,255,0)',
                    borderColor: 'rgba(0,0,0,1)',
                    lineTension: 0,
                    borderWidth: 4
                }, {
                    label: data[0].notes,
                    data: cutter61,
                    backgroundColor: 'rgba(255,255,255,0)',
                    borderColor: '#0000ff',
                    lineTension: 0,
                    borderWidth: 4
                }, {
                    label: data[1].notes,
                    data: cutter62,
                    backgroundColor: 'rgba(255,255,255,0)',
                    borderColor: '#009900',
                    lineTension: 0,
                    borderWidth: 4
                }, {
                    label: data[2].notes,
                    data: cutter63,
                    backgroundColor: 'rgba(255,255,255,0)',
                    borderColor: '#cccc00',
                    lineTension: 0,
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0.5,
                            suggestedMax: 0.8,
                            stepSize: 0.05
                        }
                    }]
                }
            }
        });
    }
    
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})