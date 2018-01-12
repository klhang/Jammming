const apiKey = '';

const Spotify = {
  getAccessToken(){

  }
}

export default Spotify;


// fetch('url', {
//   method: 'POST',
//   body: JSON.stringify({id: '200'})
// }).then(response => {
//   if(response.ok){
//     return response.json();
//   }
//   throw new Error('failed');
// }, networkError => {
//   console.log(networkError.message);
// }).then(jsonResponse => {
//   return jsonResponse
// })
//
//
// async function getData(){
//   try(){
//     let response = await fetch('url', {
//       method: 'POST',
//       body: JSON.stringify({id: '200'})
//     })
//     if(response.ok){
//       let jsonResponse = await response.json();
//       return jsonResponse;
//     }
//     throw new Error('failed');
//   } catch(error) {
//     console.log(error);
//   }
// }
