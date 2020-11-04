export default {
  getItems : () => {
    return fetch('/user/fruitvegList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postItem : fruitVeg => {
    return fetch('/user/fruitvegItems', {
      method : "post",
      body : JSON.stringify(fruitVeg),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  }
}