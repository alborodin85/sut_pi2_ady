class SummaryChartBuilder {
    constructor() {
        let numberOfRequests = new NumberOfRequests();
        numberOfRequests.retro.fill = false;
        numberOfRequests.prediction.fill = false;
        let numberOfErrors = new NumberOfErrors();
        numberOfErrors.retro.fill = false;
        numberOfErrors.prediction.fill = false;
        let memoryLoading = new MemoryLoading();
        memoryLoading.retro.fill = false;
        memoryLoading.prediction.fill = false;
        let freeDiskSpace = new FreeDiskSpace();
        freeDiskSpace.retro.fill = false;
        freeDiskSpace.prediction.fill = false;

        let correctStates = {};
        correctStates.color = '#198754';
        correctStates.retro = {
            label: `Нормальная работа (ретро)`,
            backgroundColor: correctStates.color,
            pointBackgroundColor: correctStates.color,
            borderWidth: 0,
            pointRadius: 7,
            data: [
                {x: '10.01.2021', y: 20},
                {x: '13.01.2021', y: 20},
                {x: '14.01.2021', y: 20},
            ],
        };

        correctStates.prediction = {
            label: `Нормальная работа (прогноз)`,
            backgroundColor: correctStates.color,
            pointBackgroundColor: correctStates.color,
            data: [
                {x: '17.01.2021', y: 20},
            ],
            borderWidth: 0,
            pointRadius: 7,
            borderDash: [12,4],
        };

        let warningStates = {};
        warningStates.color = '#FFC107';
        warningStates.retro = {
            label: `Завтра будет сбой (ретро)`,
            backgroundColor: warningStates.color,
            pointBackgroundColor: warningStates.color,
            borderWidth: 0,
            pointRadius: 7,
            data: [
                {x: '11.01.2021', y: 20},
            ],
        };

        warningStates.prediction = {
            label: `Завтра будет сбой (прогноз)`,
            backgroundColor: warningStates.color,
            pointBackgroundColor: warningStates.color,
            data: [
                {x: '15.01.2021', y: 20},
            ],
            borderWidth: 0,
            pointRadius: 7,
            borderDash: [12,4],
        };

        let crashStates = {};
        crashStates.color = '#DC3545';
        crashStates.retro = {
            label: `Остановка из-за аварии (ретро)`,
            backgroundColor: crashStates.color,
            pointBackgroundColor: crashStates.color,
            borderWidth: 0,
            pointRadius: 7,
            data: [
                {x: '12.01.2021', y: 20},
            ],
        };

        crashStates.prediction = {
            label: `Остановка из-за аварии (прогноз)`,
            backgroundColor: crashStates.color,
            pointBackgroundColor: crashStates.color,
            data: [
                {x: '16.01.2021', y: 20},
            ],
            borderWidth: 0,
            pointRadius: 7,
            borderDash: [12,4],
        };


        this.labels = [
            '10.01.2021', '11.01.2021','12.01.2021','13.01.2021','14.01.2021','15.01.2021','16.01.2021','17.01.2021',
        ];
        this.data = {
            labels: this.labels,
            datasets: [
                numberOfRequests.retro,
                numberOfRequests.prediction,
                numberOfErrors.retro,
                numberOfErrors.prediction,
                memoryLoading.retro,
                memoryLoading.prediction,
                freeDiskSpace.retro,
                freeDiskSpace.prediction,
                correctStates.retro,
                correctStates.prediction,
                warningStates.retro,
                warningStates.prediction,
                crashStates.retro,
                crashStates.prediction,
                {
                    label: 'Текущая дата',
                    borderColor: 'rgb(150, 150, 150)',
                    pointRadius: 0,
                    borderWidth: 1,
                    data: [{x: '15.01.2021', y: 0}, {x: '15.01.2021', y: 20}],
                }
            ]
        };
        this.config = {
            type: 'line',
            data: this.data,
            options: {
                aspectRatio: 2,
                plugins: {
                    legend: {
                        position: 'bottom',
                        display: true,
                    },
                    title: {
                        display: true,
                        text: 'Сводные данные',
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
