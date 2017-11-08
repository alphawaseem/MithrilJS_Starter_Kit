import mithril from 'mithril';

function User() {
  let list = [];

  function loadList() {
    return mithril.request({
      method: 'GET',
      "url": "https://rem-rest-api.herokuapp.com/api/users",
      withCredentials: true
    }).then(function (result) {
      console.log(result)
      list = result.data;
    });
  }

  function getList(){
    return list;
  }

  let publicApi = {
    getList : getList,
    loadList : loadList
  }

  return publicApi

}

let UserRequestApi = User();

export default UserRequestApi;