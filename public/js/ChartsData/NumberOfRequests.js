class NumberOfRequests {
    constructor() {
        this.title = 'Число запросов к серверу';
        this.color = '0, 0, 255';

        this.retro = {
            label: `${this.title} (ретро)`,
            backgroundColor: `rgba(${this.color}, 0.3)`,
            borderColor: `rgba(${this.color}, 1)`,
            pointBackgroundColor: `rgba(${this.color}, 1)`,
            fill: true,
            data: [
                {x: '10.01.2021', y: 0},
                {x: '11.01.2021', y: 10},
                {x: '12.01.2021', y: 8},
                {x: '13.01.2021', y: 5},
                {x: '14.01.2021', y: 3},
                {x: '15.01.2021', y: 7},
            ],
        };

        this.prediction = {
            label: `${this.title} (прогноз)`,
            backgroundColor: `rgba(${this.color}, 0.1)`,
            borderColor: `rgba(${this.color}, 1)`,
            pointBackgroundColor: `rgba(${this.color}, 1)`,
            fill: true,
            data: [
                //
            ],
            borderDash: [12,4],
        };

        this.chartBuilderStrategy = new ChartBuilderStrategy(this.title, this.retro, this.prediction);
    }

}
