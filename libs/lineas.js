new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20, value2: 7 },
    { year: '2009', value: 10, value2: 0 },
    { year: '2010', value: 5, value2: 5 },
    { year: '2011', value: 5, value2: 23 },
    { year: '2012', value: 20, value2: 10 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value','value2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Usuarios', 'No usuarios'],
  resize: true,
  lineColors:['#3C7B79','#618E67']
});
