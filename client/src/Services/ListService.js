export default {

  getFruitVeg : () => {
    return fetch('/user/fruitvegList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postFruitVeg : fruitVeg => {
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
  },

  getFreshFood : () => {
    return fetch('/user/freshfoodList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postFreshFood : freshFood => {
    return fetch('/user/freshfoodItems', {
      method : "post",
      body : JSON.stringify(freshFood),
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
  },

  getFrozenFood : () => {
    return fetch('/user/frozenfoodList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postFrozenFood : frozenFood => {
    return fetch('/user/frozenfoodItems', {
      method : "post",
      body : JSON.stringify(frozenFood),
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