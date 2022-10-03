import React from 'react';
import '../styles/loading.css'

const Loading = () => {
    return (
        <div className='overlay'>
            <div class="lds-hourglass"></div>
        </div>
    );
};

export default Loading;