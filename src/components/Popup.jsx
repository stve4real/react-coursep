function Popup({title}){
    function handleConfirm({title}){
        console.log("Conform button clicked")
    }
    return(
        <>
  <div className="Popup">
    <span>{title} more wins</span>
    <div className="Popup_btns">
        <button onClick={handleConfirm}>confirm</button>
        <button className="Popup_btn--cancel" onClick={() => {
            console.log("Cancel clicked")
        }}>
            cancel
        </button>
    </div>

     <div>
        <p>{title} where are we going from here?</p>
        <button> Yes</button>
  </div>
  </div>



  <div className="backdrop"></div>
  </ >
    )
}

export default Popup;