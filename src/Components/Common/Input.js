import { useRef } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Input = ({ label, name, formik, type = "text", inputRef }) => {
  const showHideBtn = useRef();

  //   Show Hide Btn
  if (showHideBtn.current) {
    showHideBtn.current.children[0].addEventListener("click", function () {
      this.classList.add("hide");
      showHideBtn.current.children[1].classList.remove("hide");
      inputRef.current.type = "text";
    });
    showHideBtn.current.children[1].addEventListener("click", function () {
      this.classList.add("hide");
      showHideBtn.current.children[0].classList.remove("hide");
      inputRef.current.type = "password";
    });
  }

  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          {...formik.getFieldProps({ name })}
          type={type}
          name={name}
          id={name}
          ref={inputRef ? inputRef : undefined}
        />
        {type == "password" && (
          <span ref={showHideBtn}>
            <FaEyeSlash className={`icon`} />
            <FaEye className={`icon hide`} />
          </span>
        )}
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
