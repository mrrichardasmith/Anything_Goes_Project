import React, { useState, useEffect, useRef } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];
  
  const [showDropdown, setShowDropdown] = useState(true);
  const [selected, setSelected] = useState({
    label: "The Color Red",
    value: "red"
  });
  const onSelectedChange = (option) =>  {
    setSelected(option)
  }
  
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }


    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });


  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color Click Away from the drop down to collapse it</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;



