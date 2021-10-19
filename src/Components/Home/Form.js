import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../../CustomHook/useInput";
import { addNote } from "../store/Action/noteAction";
// import { add, addNote } from "../../Store/Actions";

function Form(props) {
  const [title, resetTitle, bindTitle] = useInput();
  const [content, resetContent, bindContent] = useInput();
  // const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addNote(title, content, false));
    if (!(title === "" || content === ""))
      dispatch(addNote({ title, content }));
    resetTitle("");
    resetContent("");
  };
  //   console.log("Note", title, content);
  // useEffect(() => {
  //   console.log("State ", state.notes);
  // }, [state]);
  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="black-text ">New Note</h5>
        <div className="input-field">
          <input
            value="Alvin"
            id="first_name2"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="first_name2">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="textarea1"
            className="materialize-textarea"
            {...bindContent}
          ></textarea>
          <label htmlFor="textarea1">Note Content</label>
        </div>
        <button className={"btn green"}>Add</button>
      </form>
    </div>
  );
}

export default Form;
