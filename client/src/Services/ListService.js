export default {
  getItems: () => {
    return fetch("/user/lists")
      .then(response => {
        if (response.status !== 401) {
          return response.json().then((data) => data);
        } else
          return { message: { msgBody: "Unauthorized" }, msgError: true };
      });
  },
  postItem: item => {
    return fetch("user/list", {
      method: "post",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else
        return { message: { msgBody: "Unauthorized" }, msgError: true };
    });
    
  },
};
