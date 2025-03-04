let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');

let main = document.querySelector('main');
let form = document.querySelector('form');
let description = document.querySelector('.description'); 
//it seems querySelector is for the ones without id so it seeks and selects, querySelector.

let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');

form.addEventListener('submit', (event) =>{
   event.preventDefault();
   if(valueSearch.value !=''){
    searchWeather();
   }
})

let id = 'ec528256a9758044803d8904c165d537';
let url='http://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;

const searchWeather = () => {
  fetch(url + '&q=' + valueSearch.value)

  .then(responsive => {
    if (!responsive.ok) {
      throw new Error('Enter a Valid location');
    }
    return responsive.json();
  })
  
  .then(data => {
    console.log(data);

    if (data.cod == 200){
      city.querySelector('figcaption').innerText = data.name;
      city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
      
      temperature.querySelector('img').src='https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
      temperature.querySelector('figcaption span').innerText = data.main.temp;

      description.innerText=data.weather[0].description;

      clouds.innerText = data.clouds.all;
      humidity.innerText = data.main.humidity;
      pressure.innerText = data.main.pressure;
    }

    valueSearch.value = '';
  })

  .catch(error => {
    console.error('Error:', error);
    main.classList.add('error');
    setTimeout(() => {
      main.classList.remove('error')
    }, 3000);
    });
  };

const initApp = () => {
  valueSearch.value = 'Kenya';
  searchWeather();
}

initApp();
