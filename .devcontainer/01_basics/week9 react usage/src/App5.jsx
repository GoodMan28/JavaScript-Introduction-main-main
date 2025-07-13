// Here we will learn how to use the props as children props which improves the readability of the code

import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children, closeMessage }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '5px',
            }}>
                <div style={{marginBottom: 10}}><button onClick={onClose}>{closeMessage}</button></div>
                {children}
            </div>
        </div>
    );
};

const App = () => {
    let [isOpen, setisOpen] = useState(false);

    return (
        <div>
            <button style={{cursor: "pointer"}} onClick={() => setisOpen(true)}>Know the Legend</button>
            <Modal isOpen={isOpen} onClose={() => setisOpen(false)} closeMessage={"I knew it would be him!!!"}>
                {/* Passing the children . It is also a type of props but it is more readable as we write it in the tag*/}
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQGzm_g0l83-IA/profile-displayphoto-shrink_400_400/B56ZXOfZdHGcAg-/0/1742926094560?e=1758153600&v=beta&t=5lcCQEpVN_xKGR4MZeWO2e3tPmR-kMj4pb2-XQZVvzE" style={{height:100, width: 100, borderRadius: 100}}/>
                </div>
            </Modal>
        </div>
    );
};

export default App;