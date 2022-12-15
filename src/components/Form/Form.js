import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({setEasy, setMedium, setHard}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const easy = e.target.easy.value;
        const medium = e.target.medium.value;
        const hard = e.target.hard.value;

        if(easy > 100 || medium > 100 || hard > 100){
            return toast.error("Number can't be more than 100")
        }
        
        setEasy(easy)
        setMedium(medium)
        setHard(hard)

        e.target.reset()
    }
    
    return (
        <div className='form_container'>
            <form className='flex justify-center items-end gap-6' onSubmit={handleSubmit}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Easy</span>
                    </label>
                    <input type="number" name='easy' placeholder="Type a Number" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Medium</span>
                    </label>
                    <input type="number" name='medium' placeholder="Type a Number" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Hard</span>
                    </label>
                    <input type="number" name='hard' placeholder="Type a Number" className="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary btn-wide sm:w-auto'>Reset</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Form;