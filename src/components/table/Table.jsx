import React, { useRef } from "react";
import classes from "./styles.module.css";

export const Table = ({ data, handleFileUpload }) => {
  const fileRef = useRef(undefined);
  const onBtnClick = () => fileRef.current.click();

  return (
    <div className={classes.table_root}>
      <header className={classes.header}>
        <button onClick={onBtnClick} className={classes.myBtn1}>Загрузить новый файл</button>
      </header>

      <input
        ref={fileRef}
        onChange={handleFileUpload}
        className={classes.file_input}
        type="file"
        accept=".csv"
      />
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Номер телефона</th>
            <th>email</th>
            <th>Дата рождения</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
              <td>{row.bday}</td>
              <td>{row.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
