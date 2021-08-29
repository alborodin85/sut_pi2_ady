class ChartBuilderStrategy {
    constructor(title, retroDs, predictionDs) {
        this.labels = [
            '10.01.2021', '11.01.2021','12.01.2021','13.01.2021','14.01.2021','15.01.2021','16.01.2021','17.01.2021',
        ];
        this.data = {
            labels: this.labels,
            datasets: [
                retroDs,
                predictionDs,
                {
                    label: '',
                    borderColor: 'rgb(150, 150, 150)',
                    pointRadius: 0,
                    borderWidth: 1,
                    data: [{x: '15.01.2021', y: 0}, {x: '15.01.2021', y: 16}],
                }
            ]
        };
        this.config = {
            type: 'line',
            data: this.data,
            options: {
                aspectRatio: 4,
                plugins: {
                    legend: {
                        position: 'bottom',
                        display: false,
                    },
                    title: {
                        display: true,
                        text: title,
                    },
                }
            }
        };
        this.result = {};
    }
    buildDiagram(cssId) {
        this.result = new Chart(
            document.getElementById(cssId),
            this.config
        );
    }
}
