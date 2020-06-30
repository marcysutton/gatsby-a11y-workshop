import React, {useRef, useEffect, useState} from "react"

import "./card-flip.scss"

function CardFlip (props) {
    let toggleButtonRef = useRef(null)
    let closeButtonRef = useRef(null)
    let overlayRef = useRef(null)

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }
    const closeOverlay = () => {
        setIsActive(false)
        toggleButtonRef.current.focus()
    }
    useEffect(() => {
        console.log('HIIIIII')
        const handler = (event) => {
            console.log(event.propertyName)
            if (event.propertyName === 'opacity' && closeButtonRef.current !== null) {
                closeButtonRef.current.focus()
            }
        }
        window.addEventListener('transitionend', handler)
    }, [])
    const activeClass = isActive ? "active" : ""
    const overlay = isActive
        ? <div>
            <div>
                <div className="gradient-overlay"></div>
                <button
                    className="team-close-button"
                    aria-label={`Close ${props.memberName}`}
                    ref={closeButtonRef}
                    onClick={closeOverlay}
                >
                    X
                </button>
                <h5 className="team-name">{props.memberName}</h5>
                <span className="team-subtitle">{props.subtitle}</span>
                <p>{props.bio}</p>
                <div className="team-socials">
                    <a href={props.twitterLink}>
                        twitter
                    </a>
                </div>
            </div>
        </div>
    : false
    return (
        <div className="team-member">
            <div className={`team-content ${activeClass}`}>
                <button className="toggle-button"
                    onClick={handleClick}
                    ref={toggleButtonRef}
                >
                    <span className="team-image">
                        <img src={props.image} alt="" />
                    </span>
                    <span className="team-name">{props.memberName}</span>
                    <span className="team-subtitle">{props.subtitle}</span>
                </button>

                <div role="dialog"
                    className="team-content-overlay"
                    ref={overlayRef}
                >
                    {overlay}
                </div>
            </div>
        </div>
    )
}

export default CardFlip