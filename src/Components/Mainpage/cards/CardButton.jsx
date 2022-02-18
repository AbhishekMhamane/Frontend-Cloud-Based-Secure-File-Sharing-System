import { useEffect, useRef, useState } from "react";
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import './CardButton.css';

function CardButton() {
  const ref = useRef()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])

  return (
    <div className="wrapper" ref={ref}>
      <button
        className="button1"
        onClick={() => setIsMenuOpen(oldState => !oldState)}
        style={{width:"20px",height:"-20px",opacity:"transperant"}}
      >
        <ThreeDotsVertical />
      </button>
      {isMenuOpen && (
        <ul className="list">
          <li className="list-item">Download</li>
          <li className="list-item">Rename</li>
          <li className="list-item">Delete</li>
          <li className="list-item">Share</li>
        </ul>
      )}
    </div>
  )
}

export default CardButton;
