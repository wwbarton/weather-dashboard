var openWeatherApi =
  "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={1e379fefcd27ae82381c513757c74b03}";

// function SaveDataToLocalStorage(data)
// {
//     var a = [];
//     // Parse the serialized data back into an aray of objects
//     a = JSON.parse(localStorage.getItem('session')) || [];
//     // Push the new data (whether it be an object or anything else) onto the array
//     a.push(data);
//     // Alert the array value
//     alert(a);  // Should be something like [Object array]
//     // Re-serialize the array back into a string and store it in localStorage
//     localStorage.setItem('session', JSON.stringify(a));
// }
