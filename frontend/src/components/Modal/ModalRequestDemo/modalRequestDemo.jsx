import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {Modal} from '../modal'
import {PopUp} from '../PopUp';


export const ModalRequestDemo=({open})=>{
    
    // simplifies the process of requesting demo
    // and prevents the repetition of logic

    const [isOpen, setIsOpen] = useState(true)
    const [msgSent, setMsgSent] = useState(false)
    const [requestDemo, setRequestDemo] = useState(false)

    const closeModal=()=>{
        setIsOpen(false)
        setRequestDemo(false)
    }

    const requestDemoHandler =()=>{
         setRequestDemo(true)
         setTimeout(()=>{
            setMsgSent(true)
         }, 5000)
    }

    useMemo(()=>{
        // calls the setIsOpen function when open (bool) changes
        setIsOpen(open)
    },[open])

    return (
        <div>
            <Modal open = {isOpen} >
           
                <PopUp 
                    title="Message Sent" 
                    content="We have received your message. You will be contacted by our representative within 7 working days"
                    btnText="ok"
                    action={closeModal}
                />
            </Modal>
        </div>
    )
}

ModalRequestDemo.propTypes = {
    open: PropTypes.bool,
    requestDemo: PropTypes.bool,
    msgSent: PropTypes.bool,
    closeModal: PropTypes.func,
    requestModalHandler: PropTypes.func,

}