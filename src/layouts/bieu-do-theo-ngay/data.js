export const data = [["0h", 0], ["0h30p", 0], ["1h", 0],
    ["1h30p", 0], ["2h", 0], ["2h30p", 0], ["3h", 0],
    ["3h30p", 0], ["4h", 0], ["4h30p", 0], ["5h", 0],
    ["5h30p", 0], ["6h", 0], ["6h30p", 0], ["7h", 0],
    ["7h30p", 0], ["8h", 0], ["8h30p", 0], ["9h", 0],
    ["9h30p", 0], ["10h", 0], ["10h30p", 0], ["11h", 0],
    ["11h30p", 0], ["12h", 0], ["12h30p", 0], ["13h", 0],
    ["13h30", 0], ["14h", 0], ["14h30p", 0], ["15h", 0],
    ["15h30p", 0], ["16h", 0], ["16h30p", 0], ["17h", 0],
    ["17h30p", 0], ["18h", 0], ["18h30p", 0], ["19h", 0],
    ["19h30p", 0], ["20h", 0], ["20h30p", 0], ["21h", 0],
    ["21h30p", 0], ["22h", 0], ["22h30p", 0], ["23h", 0],
    ["23h30", 0]];
export const dateList = data.map(function (item) {
    return item[0];
});
export const valueList = data.map(function (item) {
    return item[1];
});
export const option = {
    // Make gradient line here
    visualMap: [
        {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        },
        {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
        }
    ],
    title: [
        {
            left: 'center',
            text: 'Nhiệt độ'
        },
        {
            top: '55%',
            left: 'center',
            text: 'Độ ẩm'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [
        {
            data: dateList
        },
        {
            data: dateList,
            gridIndex: 1
        }
    ],
    yAxis: [
        {},
        {
            gridIndex: 1
        }
    ],
    grid: [
        {
            bottom: '60%'
        },
        {
            top: '60%'
        }
    ],
    series: [
        {
            type: 'line',
            showSymbol: false,
            data: valueList
        },
        {
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
        }
    ]
};