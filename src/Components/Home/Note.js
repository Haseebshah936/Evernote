import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeNote, toogleFav } from "../store/Action/noteAction";
// import { removeNote } from "../../Store/Actions";

function Note({ id, title, content, favorite, date }) {
  const dispatch = useDispatch();
  const heartState = favorite ? "favorite" : "favorite_outline";
  return (
    <div className="note white" style={{ marginTop: 30 }}>
      <div className="right-align">
        <i
          className="material-icons red-text"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(toogleFav(favorite, id))}
        >
          {heartState}
        </i>
        <i
          className="material-icons "
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(removeNote(id))}
        >
          delete
        </i>
      </div>
      <Link to={`/note/${id}`}>
        <h5 className="black-text">{title}</h5>
      </Link>
      <p className="truncate">{content}</p>
      <p className="grey-text">{moment(date.toDate()).calendar()}</p>
      <div className="right-align">
        <i className="material-icons black-text" style={{ cursor: "pointer" }}>
          edit
        </i>
      </div>
    </div>
  );
}

export default Note;
