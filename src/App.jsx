import React, { useEffect, useState } from "react";

function App() {
  // THEMES
  const themes = ["default", "light", "violet"];

  const [currentTheme, setCurrentTheme] = useState(() => {
    const themeInStorage = localStorage.getItem("theme");
    return themeInStorage && themes.includes(themeInStorage)
      ? themeInStorage
      : themes[0];
  });

  const handleTheme = (theme) => {
    setCurrentTheme(theme);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme;
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const switchStyle = {
    "--offset": `${themes.indexOf(currentTheme) * 23}px`,
  };

  // KEY AND OPERATIONS
  const [nums, setNums] = useState("");

  const handleButtons = (value) => {
    setNums((prevNums) => prevNums + value);
  };

  const deleteNum = () => {
    setNums(nums.slice(0, -1));
  };

  const result = () => {
    try {
      setNums(eval(nums).toString());
    } catch (err) {
      setNums("Error")
    }
  };

  const clear = () => {
    setNums("");
  };

  // HTML STRUCTURE
  return (
    <>
      <div
        className={`h-screen w-screen font-leagueSpartan flex items-center justify-center bg-bgMain text-[32px] text-mainText`}
      >
        <main className={`w-[32rem] h-[45rem]`}>
          <div className="flex justify-between items-end mb-8">
            <h1 className="text-xl leading-7 tracking-tight ml-2">calc</h1>
            <div className="flex items-end gap-[1.625rem] text-sm leading-3">
              <p className="uppercase tracking-wider mb-[0.3125rem]">Theme</p>
              <div className="flex flex-col gap-1">
                <div className="flex justify-center gap-3">
                  {themes.map((theme, index) => (
                    <label
                      key={index}
                      className="min-w-[12px] text-center"
                      htmlFor={`theme-${theme}`}
                    >
                      {index + 1}
                    </label>
                  ))}
                </div>
                <div
                  className="w-[72px] h-[26px] bg-bgToggle rounded-full flex justify-between cursor-pointer *:appearance-none *:cursor-pointer relative before:size-4 before:bg-bgTertiary before:hover:bg-bgTertiaryHover before:rounded-full before:absolute before:left-[5px] before:top-[5px] before:transition-all before:translate-x-[var(--offset)]"
                  style={switchStyle}
                >
                  {themes.map((theme, index) => (
                    <input
                      key={index}
                      id={`theme-${theme}`}
                      type="radio"
                      name="theme"
                      className="relative h-full flex-1 rounded-full bg-[transparent]"
                      onChange={() => handleTheme(theme)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`screen h-[8rem] rounded-lg bg-bgScreen mb-6 flex items-center justify-end pr-8 text-6xl overflow-x-auto whitespace-nowrap`}
          >
            {nums}
          </div>
          <div className="grid grid-cols-4 gap-6 p-8 rounded-lg bg-bgToggle w-full text-primaryText">
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover active:translate-y-1"
              onClick={() => handleButtons("7")}
            >
              7
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("8")}
            >
              8
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("9")}
            >
              9
            </button>
            <button
              className="h-14 py-2 uppercase rounded-lg bg-bgSecondary shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-secondaryShadow text-mainText hover:bg-bgSecondaryHover"
              onClick={deleteNum}
            >
              del
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("4")}
            >
              4
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("5")}
            >
              5
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("6")}
            >
              6
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("+")}
            >
              +
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("1")}
            >
              1
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("2")}
            >
              2
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("3")}
            >
              3
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("-")}
            >
              -
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons(".")}
            >
              .
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("0")}
            >
              0
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("/")}
            >
              /
            </button>
            <button
              className="h-14 py-2 rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-primaryShadow bg-bgPrimary hover:bg-bgPrimaryHover"
              onClick={() => handleButtons("*")}
            >
              x
            </button>
            <button
              className={`h-14 py-2 rounded-lg col-span-2 uppercase bg-bgSecondary shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-secondaryShadow text-mainText hover:bg-bgSecondaryHover`}
              onClick={clear}
            >
              reset
            </button>
            <button
              className={`h-14 py-2 rounded-lg col-span-2 bg-bgTertiary hover:bg-bgTertiaryHover lg shadow-[0_4px_0_rgba(0,0,0,0.5)] shadow-tertiaryShadow text-mainText`}
              onClick={result}
            >
              =
            </button>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
