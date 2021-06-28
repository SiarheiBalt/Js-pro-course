import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ACTIONS_POSTS } from "../../../../../redux/reducers/constants";
import { Preloader } from "../Preloader/Preloader";

export const Info = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const autor = useSelector((state) => {
    return state.postsReducer.autorInfo;
  });

  const onClickGoBack = () => {
    history.goBack();
  };

  useEffect(async () => {
    dispatch({ type: ACTIONS_POSTS.GET_AUTOR_REQUEST, params });
  }, []);

  return (
    <div>
      {autor.name === undefined ? (
        <Preloader />
      ) : (
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
      )}
      {autor.name && <button onClick={onClickGoBack}>go back</button>}
    </div>
  );
};
