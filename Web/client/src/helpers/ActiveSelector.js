import * as React from "react"
import "./ActiveTabs.css"
export const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`tab-selector ${
      isActive
        ? "active"
        : "inactive"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
)
