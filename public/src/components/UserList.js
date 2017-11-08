import User from "../models/User";
import mithril from "mithril";

console.log(User);

export const UserList = {
  oninit : User.loadList,
  view : function (){   
    return (
      <div className="user-list">
        {User.getList().map(function(user){
          console.log(user);
          return <li className="user">{user.firstName}</li>;
        })}
      </div>
    )
  }
}