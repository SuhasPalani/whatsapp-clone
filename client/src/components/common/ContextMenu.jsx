import React, { useRef } from "react";

function ContextMenu({ options, coordinates, contextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);
  const hancleClick = (e, callback) => {};
  return (
    <div
      className="bg-dropdown-background fixed py-2 z-[100] shadow-xl"
      style={{
        top: `${coordinates.y}px`,
        left: `${coordinates.x}px`,
      }}
      ref={contextMenuRef}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li
            key={name}
            onClick={(e) => hancleClick(e, callback)}
            className="px-5 py-2 hover:bg-background-default-hover cursor-pointer"
          >
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
