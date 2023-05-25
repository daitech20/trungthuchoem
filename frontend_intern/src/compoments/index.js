import React from 'react';
import { AiOutlineDownCircle, AiOutlineMinusSquare, AiOutlineRedo } from "react-icons/ai";
import { getAllUsers, getTaskUser, MarkDone } from '../services/userServices';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: '',
            dataUsers: [],
            dataTasks: [],
            indexTasks: '',
            indexTaskDone: '',
        }
    }
    async componentDidMount() {
        await this.getAllUsers();
    }
    getAllUsers = async () => {
        let data = await getAllUsers();
        if (data && data.data) {
            this.setState({
                dataUsers: data.data
            })
        } else {
            {
                this.setState({
                    dataUsers: [],
                })
            }
        }
    }

    CountTasksDone = (data) => {
        let indexTasks = 0;
        let indexTaskDone = 0;
        for (const i of data) {
            indexTasks += 1;
            if (i.completed == true) {
                indexTaskDone += 1;
            }
        }
        this.setState({
            indexTasks: indexTasks,
            indexTaskDone: indexTaskDone,
        })
    }
    getTaskUser = async (id) => {
        let data = await getTaskUser(id);
        let dataTasks = [...data.data].sort((a, b) => a.completed - b.completed);
        this.CountTasksDone(data.data)
        if (data && data.data) {
            this.setState({
                dataTasks: dataTasks,
            })
        } else {
            this.setState({
                dataTasks: [],
            })
        }
    }
    handleOnchangeUser = async (event) => {
        let idUser = event.target.value;
        await this.getTaskUser(idUser)
    }
    handleMarkDone = async (idTask) => {
        this.setState({ isShow: idTask, })
        let data = await MarkDone(idTask);
        let dataTasks = this.state.dataTasks;
        let taskNew = data.data;
        dataTasks = dataTasks.filter(x => x.id != idTask);
        dataTasks.push(taskNew);
        this.setState({
            dataTasks: dataTasks,
        })
        this.CountTasksDone(dataTasks);
    }
    render() {
        let dataUsers = this.state.dataUsers;
        let dataTasks = this.state.dataTasks;
        return (
            <div className='h-screen w-screen bg-[#f5f4f4] lg:p-[30px] p-[15px] font-sans'>
                <div className='p-[20px] space-y-[14px] flex flex-col w-full h-full border bg-white  shadow-lg'>
                    <div className='border-b  font-[500] text-[18px] '>
                        <span>User</span>
                    </div>
                    <div>
                        <select onChange={(event) => this.handleOnchangeUser(event)}
                            className='border  h-[30px] shadow-sm px-[10px] rounded-[4px]'>
                            <option></option>
                            {dataUsers && dataUsers.map((item, index) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='border-b  font-[500] text-[18px]'>
                        <span>Tasks</span>
                    </div>
                    <div className='border shadow-sm overflow-y-auto h-full '>
                        {dataTasks && dataTasks.map((item, index) => {
                            return (
                                <div key={item.id} className='flex items-center justify-between px-[20px] py-[10px] border-b space-x-[30px]'>
                                    <div className='flex items-center space-x-[5px] text-[20px]'>
                                        {item.completed == false ?
                                            <AiOutlineMinusSquare className='text-[#f3bc09f5] ' />
                                            :
                                            <AiOutlineDownCircle className='text-[#08db2bde]' />
                                        }
                                        <span className='text-[16px]'>{item.title}</span>
                                    </div>
                                    {item.completed == false &&
                                        <button onClick={() => this.handleMarkDone(item.id)}
                                            className='border px-[5px] shadow-sm py-[2px] rounded-[5px] text-[16px] flex items-center space-x-[5px]'>
                                            {this.state.isShow == item.id && <AiOutlineRedo className='animate-spin' />}
                                            <span>Mark done</span>
                                        </button>
                                    }
                                </div>
                            )
                        })}

                    </div>
                    <div className='font-[500]'>
                        <span>Done {this.state.indexTaskDone}/{this.state.indexTasks} tasks</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default index;