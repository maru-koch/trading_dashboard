import ReactDom from 'react-dom'
import './modal.css'
import PropTypes from 'prop-types'


const OVERLAY_STYLE ={
    position: 'fixed',
    left:0,
    right:0,
    bottom:0,
    top: 0,
    margin: '0 auto',
    backgroundColor:'rgba(0,0,0,0.5)',
    opacity:1,
    zIndex: 1000
}

const MODAL_STYLE ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    padding: '50px',
    zIndex: 1000,
     opacity:1,
}

export const Modal=({open, close, children})=>{
    if (!open) return null;
    console.log("modal",open)
    return ReactDom.createPortal(
    <>
        <main className="modal" style ={OVERLAY_STYLE} onClick={close}>
        <div style ={MODAL_STYLE} >
            {children}
        </div>
        </main>
    </>,
    document.getElementById('portal')
    )
}

Modal.propType={
    open:PropTypes.bool,
    close:PropTypes.string,
    children: PropTypes.node
}