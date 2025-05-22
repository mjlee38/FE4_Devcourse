import styles from "./Footer.module.css";
import className from "classnames";
import classNames from "classnames/bind";
export default function Footer() {
  const isLoggedin = true;
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <h1 className={className({ title: false })}>title</h1>
        <p className={`${styles["red-color"]} ${styles.underline}`}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
