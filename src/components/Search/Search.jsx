import { useState } from "react";
import { DropdownMenu } from "..";
import { SearchIcon, DeleteIcon } from "../icons";
import styles from "./Search.module.css";

import cn from "classnames";

export const Search = () => {
  const [text, setText] = useState("");

  const handleInput = ({ target: { value } }) => setText(() => value);

  const handleClearText = () => setText("");

  const showDeleteIcon = cn(styles.deleteButtonHide, {
    [styles.deleteButton]: text.trim().length,
  });

  return (
    <div className={styles.searchWrapper}>
      <button className={styles.search}>
        <div className={styles.icon}>
          <SearchIcon />
        </div>
        <div className={styles.searchInput}>
          <input type="text" onChange={handleInput} value={text}></input>
          <button className={showDeleteIcon} onClick={handleClearText}>
            <DeleteIcon />
          </button>
        </div>
        <div className={styles.navigation}></div>
      </button>
      <DropdownMenu />
    </div>
  );
};
