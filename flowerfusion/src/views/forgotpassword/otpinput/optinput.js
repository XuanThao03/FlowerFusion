import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import otpEmail from '../../../ultils/otpEmail';
import {message} from 'antd';
export function OTPInput(props) {
  const navigate = useNavigate();

  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);
  const {state} = useLocation();
  const {otp, email} = state;
  const [currentOTP, setCurrentOTP] = useState(otp);
  //console.log('props ', email);

  function resendOTP(recoverEmail) {
    console.log(recoverEmail);
    if (disable) return;
    var params = {
      otp: Math.floor(Math.random() * 9000 + 1000),
      to_email: recoverEmail,
    };

    console.log('otp resend:', params.otp);
    setCurrentOTP(params.otp);

    // /otpEmail(params);

    message.info('A new OTP has succesfully been sent to your email.');
    setTimer(60);
  }

  function verfiyOTP(recoverEmail) {
    console.log('currentOTP', currentOTP);
    //console.log('props 2', props.otp);
    if (parseInt(OTPinput.join('')) === currentOTP) {
      console.log('verified');
      navigate('/resetpassword', {
        state: {email: recoverEmail},
      });
    } else
      message.warning(
        'The code you have entered is not correct, try again or re-send the link',
      );
    return;
  }

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="flex  bg-gray-50">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email </p>
            </div>
          </div>

          <div>
            <div>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={e =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={e =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={e =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      onChange={e =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }></input>
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <button
                    onClick={() => verfiyOTP(email)}
                    className=" self-center bg-button-black  w-full h-10 rounded-[10px] text-white text-xs font-[Lexend] font-normal items-center">
                    Verify Account
                  </button>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{' '}
                    <a
                      className="flex flex-row items-center"
                      style={{
                        color: disable ? 'gray' : 'blue',
                        cursor: disable ? 'none' : 'pointer',
                        textDecorationLine: disable ? 'none' : 'underline',
                      }}
                      onClick={() => resendOTP(email)}>
                      {disable ? `Resend OTP in ${timerCount}s` : 'Resend OTP'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
