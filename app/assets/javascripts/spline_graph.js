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
            ajaxDone(response);
        })
    });
};

var ajaxDone = function(ajaxResponse){
    console.log(ajaxResponse);
};

// var buildSplineGraph = function(){
//     var value;
//     // $.ajax({type: 'post', url: '/index/api_request', async: false}).done(function(response){
//     //     stats = response;
//     //     total_audio_correct = []
//     //     for(i=0; i < total_correct.length; i++){
//     //         total_compile_correct.push(Math.round((total_correct[i][1]/(20*total_correct[i][0]) * 100)))
//     //     }
//     };
//     $(function(){
//         $('#total_progress_graph')
//         .highcharts({
//             credits: { enabled: false },
//             allowPointSelect: { enabled: true },
//             chart: { type: 'spline' },
//             title: { text: '' },
//             subtitle: { text: '3-year Series Value' },
//             xAxis: { categories: stats.games, title: { text: null } },
//             yAxis: { title: { text: 'Percent correct' },
//                     labels: { formatter: function(){return this.value + '%'} }
//             },
//             tooltip: { crosshairs: true, shared: true },
//             plotOptions: { spline: { marker: { radius: 4, lineColor: '#666666', lineWidth: 1 } } },
//             series: [{
//                 name: 'Total',
//                 data: total_compile_correct,
//                 cursor: 'pointer',
//                     point: {
//                         events: {
//                             click: function (e) {
//                                 x: e.pageX
//                                 $('#profile_page_graphs').hide();
//                             }
//                         }
//                     },
//             },
//             {
//                 name: 'Audio',
//                 data: total_audio_correct,
//                 cursor: 'pointer',
//                     point: {
//                         events: {
//                             click: function (e) {
//                                 x: e.pageX
//                             }
//                         }
//                     },
//             },
//             {
//                 name: 'Color',
//                 data: total_color_correct,
//                 cursor: 'pointer',
//                     point: {
//                         events: {
//                             click: function (e) {
//                                 x: e.pageX
//                             }
//                         }
//                     }
//             },
//             {
//                 name: 'Position',
//                 data: total_position_correct,
//                 cursor: 'pointer',
//                 point: {
//                     events: {
//                         click: function (e) {
//                             x: e.pageX
//                         }
//                     }
//                 }
//             }]
//         })
//     })
// };