import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function Modal({ defaultVal, handleUpdate }) {
    const [showModal, setShowModal] = useState(true)

    const modalRef = useRef()
    const inputRef = useRef()

    useClickOutside(modalRef, showModal, () => setShowModal(false))

    return (
        <div>
            {showModal && (
                <div className={styles.overlay}>
                    <div ref={modalRef} className={styles.modal}>
                        <div className={styles.modalContent}>
                            <h3>Modal Title</h3>
                            <input ref={inputRef} type="text" defaultValue={defaultVal} />
                            <button onClick={() => {
                                handleUpdate(inputRef.current.value)
                                setShowModal(false)
                            }}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Modal