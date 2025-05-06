import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));

    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (index, event) => {
        const value = event.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1); //as this will take always the latest value from the input
        setOtp(newOtp);

        //trigger submit
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === 4) {
            onOtpSubmit(combinedOtp);
        }

        //move to next input if current field is filled
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }
    const handleClick = (index) => {
        //use to take only the one input from one otp input box 
        // (i.e) if cursor is before number when we change the otp value it will not update as it will 
        // take the old value so inoder to avoid this we are giving the setSelectionRange as it will always 
        //have the pointer after the number so will update the new number entered in the otp box.
        inputRefs.current[index].setSelectionRange(1, 1);


        // this statments covers logic if we have 4 otp values unfortunately 2nd one is deleted
        //and if we try to fill the 3rd one it will automatically focus the 2nd input as it was not filled
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }

        // this statement cover the logic say in 4 otp values 1 and 3 are filled 2 and 4 needs to be filled
        // when we fill 2nd one the focus should be automatically moved to 4 th one as 3rd is already filled
        // so this line handle such case
        if (index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    }
    const handleKeyDown = (index, event) => {
        //when to backspace is clicked move back to previous input
        if (event.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }
    return (
        <div>
            {
                otp.map((value, index) => (
                    <input
                        type="text"
                        ref={(input) => (inputRefs.current[index] = input)}
                        key={index}
                        value={value}
                        onChange={() => handleChange(index, event)}
                        onClick={() => handleClick(index)}
                        onKeyDown={() => handleKeyDown(index, event)}
                        className='otpInput'
                    />
                ))
            }
        </div>
    )
}

export default OtpInput