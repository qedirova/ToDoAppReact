import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={s.wrapper}>
      <h1>
        WELCOME TO <br /> TODOAPP
      </h1>
      <Link to={"/list"} className={s.btn}>
        Get started
      </Link>
    </div>
  );
}
