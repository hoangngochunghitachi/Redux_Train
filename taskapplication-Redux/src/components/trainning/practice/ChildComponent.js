import React from 'react';

function ChildComponent(props) {

    function sendDataToParent() {
        console.log('click okkkk')
        props.onReceiveData('send data')
    }

    return (
        <div>
            <button onClick={sendDataToParent} className="btn btn-primary">Send data to parentcomponet</button>
        </div>
    );
}

export default ChildComponent;