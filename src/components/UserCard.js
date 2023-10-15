import { Link, useOutletContext } from "react-router-dom";

function UserCard({id, name}) {
  const users = useOutletContext()
  // console.log(users)

    return (
      <article>
          <h2>{name}</h2>
          <p>
            <Link to={`/profile/${id}`}>View profile</Link>
          </p>
      </article>
    );
  };
  
  export default UserCard;