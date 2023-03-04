import { Welcome } from "./Welcome";

export function UserList() {
  const user = [
    {
      name: "John",
      pic: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Abraham",
      pic: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Albert",
      pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Laura",
      pic: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jennifer",
      pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div>
      {user.map((usr, index) => (
        <Welcome key={index} name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}
