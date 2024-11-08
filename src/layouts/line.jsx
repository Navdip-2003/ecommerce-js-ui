import React from 'react';

function Line() {
    return (
        <>
            <style jsx>
                {`
                    hr {
                        border: 0;
                        margin: 1.35em auto;
                        max-width: 100%;
                        background-position: 50%;
                        box-sizing: border-box;
                    }

                    .accessory {
                        height: 6px;
                        margin-top: 50px;
                        background-image: radial-gradient(
                        closest-side,
                        hsla(0, 0%, 50%, 1.0),
                        hsla(0, 0%, 50%, 0) 100%);
                        position: relative;
                    }
                    .accessory:after {
                        position: absolute;
                        top:  50%;
                        left: 50%;
                        display:block;
                        background-color: hsl(0, 0%, 75%);
                        height: 12px;
                        width:  12px;
                        transform: rotate(45deg);
                        margin-top:  10px;
                        margin-left: -10px;
                        border-radius: 4px 0;
                        border: 4px solid hsla(0, 0%, 100%, 0.35);
                        background-clip: padding-box;
                        box-shadow: -10px 10px 0 hsla(0, 0%, 100%, 0.15), 10px -10px 0 hsla(0, 0%, 100%, 0.15);
                    }
                `}
            </style>
            
            <hr className="accessory"></hr>
        </>
    );
}

export default Line