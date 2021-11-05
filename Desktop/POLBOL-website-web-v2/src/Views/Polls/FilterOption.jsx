import React, { useState } from "react"
import "./FilterOption.css"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import ShowChartIcon from "@mui/icons-material/ShowChart"
function FilterOption() {
  const [style, setStyle] = useState(" ")
  const [id, setId] = useState(0)
  const [click, setClicked] = useState(false)
  const showMenu = () => {
    setClicked(true)
    setStyle("dropdown-content")
    setId(1)
  }
  const closeMenu = () => {
    setClicked(false)
    setStyle("")
  }
  return (
    <div className="dropdown">
      <div className="animate">
        <ShowChartIcon color="success" />
      </div>

      <div class="dropBtn">
        {click === true ? (
          <>
            <div onClick={closeMenu}>
              <CloseIcon onClick={closeMenu} color="success" />
            </div>

            <div class={style} id={id}>
              {click === true && (
                <>
                  <a href="#">link1</a>
                  <a href="#">link1</a>
                  <a href="#">link1</a>
                  <a href="#">link1</a>{" "}
                </>
              )}
            </div>
          </>
        ) : (
          <MenuIcon onClick={showMenu} color="success" />
        )}
      </div>
    </div>
  )
}

export default FilterOption
