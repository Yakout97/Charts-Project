const labels = [
    "4:00",
    "11:00",
    "18:00",
    "1:00",
    "15:00",
    "22:00",
    "23:00"
      ];
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(0,57,166)',
          borderColor: 'rgb(255, 76, 97)',
          data: [0.8, 0.2, 0.4, 0.1, 0.6, 0.9, 0.7],
        }]
      };
    
    //config
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
    
    // redner
    
    var myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    // second one
    const labels1 = [
        "4:00",
        "11:00",
        "18:00",
        "1:00",
        "15:00",
        "22:00",
        "23:00"
          ];
          const data1 = {
            labels: labels1,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(0,57,166)',
              borderColor: 'rgb(255, 76, 97)',
              data: [0.8, 0.2, 0.4, 0.1, 0.6, 0.9, 0.7],
            }]
          };
              //config
    const config1 = {
        type: 'line',
        data: data1,
        options: {}
      };
    // render second
    var myChart2 = new Chart(
        document.getElementById('myChart2'),
        config1
      );

                        // third pie one-------------------'
 
const labelspie = [
    "Cash",
    "Credit card",
      ];
      const datapie = {
        labels: labelspie,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['rgb(0,57,166)','rgb(254,76,97)'],
          data: [0.6, 0.2,],
        }]
      };
    
    //config
    const pie = {
      type: 'pie',
      data: datapie,
      options: {}
    };
    //render
    var myChart = new Chart(
        document.getElementById('myChartpie'),
        pie
      );
                // fourth pie one

    const labelspie1 = [
    "Cash",
    "Credit card",
      ];
      const datapie1 = {
        labels: labelspie1,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['rgb(0,57,166)','rgb(254,76,97)'],
          data: [0.6, 0.2,],
        }]
      };
    
    //config
    const pie1 = {
      type: 'pie',
      data: datapie1,
      options: {}
    };
    //render
    var myChart = new Chart(
        document.getElementById('myChartpie1'),
        pie1
      );

