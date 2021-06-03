var inputpart  =  document.querySelector("#input-one")

var buttonpart =  document.querySelector("#button-part")
var outputpart = document.querySelector("#output-two")

var serverURL = "http://api.openweathermap.org/data/2.5/weather?q="
var key = "&APPID=d3446f47edcdc6112d572819e1ee43af"

function getTranslationURL(text)
{

  return   serverURL +  text + key ; 

}

buttonpart.addEventListener ("click" , EventHandler ) 
 function EventHandler()
{
// input taken
    var inputText = inputpart.innerText;

    fetch(getTranslationURL(inputText))
    
      .then(response => response.json())
      .then(json => 
      {
        
        var translatedText = " country: " + json['sys']['country'] + " temperature: " + json['main']['temp'] ;
        outputpart.innerText = translatedText;
        
       }
     )

     
}



