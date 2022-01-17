import {useForm} from 'react-hook-form'

interface IForm{
    name : string,
    email : string,
    password : string
}

export default function HooksUI(){
    const {register, reset, handleSubmit, formState:{errors}} = useForm<IForm>();

    const myCallBack = (data : IForm) => {
        //Send data to the backend
        console.log("The data is as"+ data.name + " "+data.email+" "+data.password)
    }

    //binding
    //reset
    //form submit 
    //validation
    return(
        <form onSubmit={handleSubmit(myCallBack)}>
            <input type="text" placeholder="name" {...register("name", {
                required : true,
                minLength : {value : 4, message : " Name should have a minimum length of 4"},
                maxLength : {value : 8, message : "Name should have max length of 8"}
            })}/>
            {errors.name?.message && <div>{errors.name.message}</div>}
            <input type="email" placeholder="email" {...register("email", {
                required : true,
                pattern : {value : /\w+@\w+\.\w+/, message : "Regex not matched"}
            })}/>
            {errors.email?.message && <div>{errors.email.message}</div>}
            <input type="password" placeholder="password" {...register("password")}/>
            <button onClick={()=> reset()}>Reset</button>
            <button type="submit">Submit</button>
        </form>
    )
}