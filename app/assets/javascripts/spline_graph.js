$(document).ready(function(){
    ready();
});

var ready = function() {
        queryFormAjax('#query-form')
};

var queryFormAjax = function(formTag){
    $(formTag).submit(function(e){
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: '/api_query',
            data: $(this).serialize()
        }).done(function(response){
            ajaxDone(response, buildSplineGraph);
        })
    });
};

var ajaxDone = function(ajaxResponse, graphingFunction){
    console.log(ajaxResponse);
    graphingFunction(ajaxResponse);
};

var buildSplineGraph = function(graphingData){
    $(function(){
        $('#graph')
        .highcharts({
            credits: { enabled: false },
            allowPointSelect: { enabled: true },
            chart: { type: 'spline' },
            title: { text: '' },
            subtitle: { text: '3yr Price Index' },
            xAxis: { categories: graphingData.dates, title: { text: null } },
            yAxis: { title: { text: 'Weighted Average' },
                    labels: { formatter: function(){return this.value + '%'} }
            },
            tooltip: { crosshairs: true, shared: true },
            plotOptions: { spline: { marker: { radius: 4, lineColor: '#666666', lineWidth: 1 } } },
            series: [{
                name: 'Price Index',
                data: graphingData.values,
                cursor: 'pointer',
                    point: {
                        events: {
                            click: function (e) {
                                x: e.pageX
                            }
                        }
                    },
            }]
        })
    })
};