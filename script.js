fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/retrievebulkdataset?&key=9F9HQHU2RSB5P9RZPP8CFYFYV&taskId=cecd9be8347e9f95699f60dafaa9109a&zip=false",)
    .then(response => response.json())
    .then(json => console.log(json))