import type React from "react";

type AppProps = React.InputHTMLAttributes<HTMLInputElement>;

export const App: React.FC<AppProps> = ({ children, ...rest }) => {
  return (
    <div className="pretty p-default p-round">
      <input type="radio" {...rest} />
      <div className="state">
        <label>{children}</label>
      </div>
    </div>
  );
};
