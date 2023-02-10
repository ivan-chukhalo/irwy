import react from "react";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";

export default function Verb(props) {
  function isFavorite() {
    const currentStorageContent = JSON.parse(
      window.localStorage.getItem("irwy")
    );
    return currentStorageContent.includes(props.value);
  }

  function handleClick() {
    props.setFavorites((currentList) =>
      isFavorite()
        ? currentList.filter((word) => word !== props.value)
        : [...currentList, props.value]
    );
  }

  return (
    <div className="verb">
      <span>{props.value}</span>
      {props.hasIcon && (
        <HeartIcon fill={isFavorite() ? "red" : "grey"} onClick={handleClick} />
      )}
    </div>
  );
}
