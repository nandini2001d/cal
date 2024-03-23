import React, { useState } from 'react'
import CalButton from '../../Modules/CalButton/CalButton'
import CalInput from '../../Modules/CalInput/CalInput';


export default function CalMain() {

    // const btn=[1,2,3,4,5,6];
    const [currentBtn, setCurrentBtn] = useState('0');
    const [op, setOp] = useState('');
    const [val1, setVal1] = useState(0);
    const [show, setshow] = useState("");


    const currentBtnfunction = (btnName) => {

        const newCurrentval = currentBtn === '0' ? btnName : currentBtn + btnName;
        setCurrentBtn(newCurrentval);
    }

    const OpOperation = (operation) => {

        setOp(operation);
        // console.log(op);
        setVal1(currentBtn);

        //for show
        setshow(val1 + op + currentBtn);

        setCurrentBtn('');


        //for not show equal operatoer
        if (op === '=') {
            // then inside that on;y show result
            setshow(currentBtn);
        }


        if (op === '+') {

            let result = parseFloat(val1) + parseFloat(currentBtn);
            setCurrentBtn(result);
        }
        else if (op === '-') {


            let result = parseFloat(val1) - parseFloat(currentBtn);
            setCurrentBtn(result);

        }
        else if (op === '*') {


            let result = parseFloat(val1) * parseFloat(currentBtn);
            setCurrentBtn(result);

        }

        else if (op === '/') {


            let result = parseFloat(val1) / parseFloat(currentBtn);
            setCurrentBtn(result);

        }
        else {
            setCurrentBtn('');
        }


    }


    const clearbtn = () => {

        setCurrentBtn("0");
        setVal1('0')
        setOp('');
        setshow('');

    }

    const btn = ['Clear', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const opArray = ['+', '-', '*', '/', '='];

    const buttoniterate = btn.map((value) => <CalButton key={value} btnName={value} clearbtn={clearbtn} currentBtnfunction={currentBtnfunction} currentBtn={currentBtn} />);
    const operatorinterate = opArray.map((value) => <CalButton key={value} btnName={value} currentBtnfunction={OpOperation} currentBtn={op} />);


    return (
        <>

            < div className='main-container'>
                <h1 className='mb-4'>CALCULATOR</h1>
                {/* <h4>CalMain</h4> */}
                <span className='main-span'>{show}
                    {
                        op === '=' ? "" : `${op}`
                    }</span><br />
                <CalInput currentBtnfunction={currentBtnfunction} currentBtn={currentBtn} />
                <div className='main-box'>

                    {buttoniterate}
                    {operatorinterate}


                </div>

            </div>


        </>
    )
}
