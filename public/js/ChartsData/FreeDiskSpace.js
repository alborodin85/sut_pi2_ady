class FreeDiskSpace {
    constructor() {
        this.title = 'Свободное место на диске';
        this.color = '150, 150, 0';

        this.retro = {
            label: `${this.title} (ретро)`,
            backgroundColor: `rgba(${this.color}, 0.3)`,
            borderColor: `rgba(${this.color}, 1)`,
            pointBackgroundColor: `rgba(${this.color}, 1)`,
            fill: true,
            data: [
                {x: '10.01.2021', y: 14},
                {x: '11.01.2021', y: 14},
                {x: '12.01.2021', y: 13},
                {x: '13.01.2021', y: 11},
                {x: '14.01.2021', y: 10},
                {x: '15.01.2021', y: 9},
            ],
        };

        this.prediction = {
            label: `${this.title} (прогноз)`,
            backgroundColor: `rgba(${this.color}, 0.1)`,
            borderColor: `rgba(${this.color}, 1)`,
            pointBackgroundColor: `rgba(${this.color}, 1)`,
            fill: true,
            data: [
                {x: '15.01.2021', y: 9},
                {x: '16.01.2021', y: 8},
                {x: '17.01.2021', y: 9},
            ],
            borderDash: [12,4],
        };

        this.chartBuilderStrategy = new ChartBuilderStrategy(this.title, this.retro, this.prediction);
    }

}
