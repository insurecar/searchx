import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetch(`http://localhost:3000/searchQuery?q=${text}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
        console.log(filteredData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [text])

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
