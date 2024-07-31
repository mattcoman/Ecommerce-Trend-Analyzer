function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getTrends(productData) {
  var apiKey = 'YOUR_TRENDSANALYSIS_API_KEY';
  var url = 'https://api.trendsanalysis.com/analyze?dataUrl=' + productData + '&apiKey=' + apiKey;
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return '<p>Trends: ' + json.trends.join(', ') + '</p>';
}
