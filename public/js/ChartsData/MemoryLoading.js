class MemoryLoading {
    constructor() {
        this.title = 'Загрузка физической памяти';
        this.color = '0, 150, 0';

        this.retro = {
            label: `${this.title} (ретро)`,
            backgroundColor: `rgba(${this.color}, 0.3)`,
            borderColor: `rgba(${this.color}, 1)`,
            pointBackgroundColor: `rgba(${this.color}, 1)`,
            fill: true,
            data: [
                {x: '10.01.2021', y: 0},
                {x: '11.01.2021', y: 1},
                {x: '12.01.2021', y: 2},
                {x: '13.01.2021', y: 4},
                {x: '14.01.2021', y: 7},
                {x: '15.01.2021', y: 5},
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
