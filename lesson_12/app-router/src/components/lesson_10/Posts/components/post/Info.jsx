import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export const Info = () => {
  const params = useParams();
  const history = useHistory();

  const [autor, setAutor] = useState({});

  const onClickGoBack = () => {
    history.goBack();
  };

  useEffect(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const responseAutor = await response.json();

    setAutor(responseAutor);
  }, []);
  return (
    <div>
      <ul>
        <li>{`Name: ${autor.name}`}</li>
        <li>{`Email: ${autor.email}`}</li>
        <li>{`Phone: ${autor.phone}`}</li>
        <li>{`Website: ${autor.website}`}</li>
        <li>{`Company: ${autor.company?.name}`}</li>
        <ul>
          Adress: <li>{`city: ${autor.address?.city}`}</li>
          <li>{`street: ${autor.address?.street}`}</li>
        </ul>
      </ul>
      <button onClick={onClickGoBack}>go back</button>
    </div>
  );
};
