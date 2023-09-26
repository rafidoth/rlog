import { useEffect, useState } from "react";
import ThemeChangerComponent from "./app/features/theme/ThemeChangerComponent";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, assignTheme } from "./app/features/theme/themeSlice";
function App() {
  const dispatch = useDispatch();

  return (
    <>
      <ThemeChangerComponent>
        <div className="bg-green-200 dark:bg-black h-screen flex justify-center items-center">
          <button
            className="bg-blue-700 dark:bg-red-400 p-4 text-white rounded-3xl"
            onClick={() => {
              dispatch(changeTheme());
            }}
          >
            dark mode
          </button>
        </div>
      </ThemeChangerComponent>
      {/* <div className={theme}></div> */}
    </>
  );
}

export default App;
