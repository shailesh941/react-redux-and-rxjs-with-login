import React from "react";
import { useForm } from "react-hook-form";
import ajaxObs from "../../shared/services/api-service";
const Login = () =>{
    const { register, handleSubmit } = useForm();
    // {username: 'kminchelle',password: '0lelplR',}
    const onSubmit = (data) => {
        console.log(data)
        const payload = {
            url:'auth/login',
            method:'POST',
            body:JSON.stringify(data)
        }
        ajaxObs(payload).subscribe({
        next: (data) => {
            console.log('data', data)
        },
        error: err => {
            console.log(err)
        }
        })
    };
    return(
        <div>
            <h3 className="text-center mb-5">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email address</label>
                    <input {...register("username")} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input {...register("password")} type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
        </div>
    )
}

export default Login;