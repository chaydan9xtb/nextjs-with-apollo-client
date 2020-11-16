import classnames from "classnames";
import styles from "./style.module.css";

const InputField = (props) => {
  const {
    input,
    meta,
    label,
    placeholder,
    className,
    viewPassWord,
    showPassWord,
    inputType,
  } = props;
  return (
    <div className="relative">
      {label && <label>{label}: </label>}
      <input
        {...input}
        type={
          inputType === "text" ? "text" : viewPassWord ? "text" : "password"
        }
        placeholder={placeholder}
        className={`${classnames("w-full", className)} ${
          meta.touched && meta.error === "require" ? styles.input_error : ""
        }`}
      />
      {inputType === "password" ? (
        viewPassWord ? (
          <img
            src="/images/show_password.png"
            className={`absolute ${styles.position_icon}`}
            onClick={showPassWord}
          ></img>
        ) : (
          <img
            src="/images/password.png"
            className={`absolute ${styles.position_icon}`}
            onClick={showPassWord}
          ></img>
        )
      ) : null}
    </div>
  );
};
export default InputField;
