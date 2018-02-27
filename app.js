const http = new easyHttp;


//get using our library methode
//  http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
//   if(err){
//     console.log(err);
//   }else{
//   console.log(response);
// }
// });

//post methode using out lib
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
//   console.log(response);
// });

//PUT methode using our Lib:

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//   console.log(response);
// });

// http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
//   if(!err){
//     console.log(response);
//   }else{
//     console.log(err);
//   }
// })



