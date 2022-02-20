import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Input.scss";
import { useTranslation } from "react-i18next";

const Input = forwardRef(({ error, ...props }, ref) => {
  const { t } = useTranslation();
  return (
    <div className="input-container">
      <input ref={ref} className={`${error ? "error" : ""}`} {...props} />
      {error ? (
        <span className="error">{hadndleError(t, error.type)}</span>
      ) : null}
    </div>
  );
});

Input.propsTypes = {
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    ref: PropTypes.node,
  }),
};

const hadndleError = (t, errorType) => {
  switch (errorType) {
    case "required":
      return t("errors.required");
    default:
      return t("errors.other", { errorType: errorType });
  }
};

export default Input;
