import classes from "./styles.module.css";
import { useRef } from "react";

export const Form = ({ handleFileUpload }) => {
  const fileRef = useRef(undefined);
  const onBtnClick = () => fileRef.current.click();
  return (
    <div className="Form">
      <p className={classes.text}>Выберите файл в формате CSV</p>
      <button onClick={onBtnClick} className={classes.myBtn}>
        Выберите файл
      </button>
      <input
        ref={fileRef}
        className={classes.file_input}
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
    </div>
  );
};
