import { makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import FormButtons, { IButtonItem } from "./FormButtons";
import LoadingSpinner from "./LoadingSpinner";


export interface IAuthentication{
    userName : string,
    email : string,
    password : string
}

interface IProps{
    isUserNameVisible : boolean,
    title : string,
    tertiary : IButtonItem,
    onSubmit : (data : IAuthentication) => void,
    height : string
}

interface MUIProps{
    height : string
}

const useStyles = makeStyles<Theme, MUIProps>({
    container:{
        width : "100%",
        display : "flex",
        height: "100%",
        justifyContent : "space-evenly",
        flexDirection : "column"
    },
    outerDiv: {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height : "70vh"
    },
    title: {
        textAlign : "center"
    },
    innerDiv: {
        width : "60%",
        height : (props) => props.height,
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-evenly",
        alignItems : "center"
    },
    buttons:{
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-end"
    },
    button : {
        margin : "0 10px"
    },
    errorMessage : {
        color : 'red'
    }
})

export default function Authentication(props : IProps){
    const styles = useStyles({height : props.height});
    const {register, reset, handleSubmit, formState:{errors}} = useForm<IAuthentication>();
    const history = useHistory();
    const [isLoading, setloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("")

    const onSubmit = async(login : IAuthentication) => {
        try{
            setloading(true);
            await props.onSubmit(login);
            reset();
            history.push("/");
            setloading(false);
        }catch(e : any){
            setloading(false);
            setErrorMessage(e.message)
        }
    }
    return(
        <>
        <div className={styles.outerDiv}>
            <div className={styles.innerDiv}>
                <Typography variant="h4" className={styles.title}>{props.title}</Typography>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                    {props.isUserNameVisible && 
                    <TextField {...register("userName", {
                                required : true,
                                minLength : {value : 4, message : " Name should have a minimum length of 4"},
                        })}
                     variant="outlined" 
                     placeholder="User name" 
                     required={true}
                     label = "user Name"
                    error={errors && errors.userName?.message ? true : false}
                     helperText={errors.userName?.message} id="username"/>
                    }

                    <TextField type="email" {...register("email", {
                            required : true,
                            minLength : {value : 4, message : " Name should have a minimum length of 4"},
                            pattern : {value : /\w+@\w+\.\w+/, message : "Regex not matched"}
                    })}
                     variant="outlined" 
                     placeholder="Email" 
                     required={true}
                     label = "Email address"
                    error={errors && errors.email?.message ? true : false}
                     helperText={errors.email?.message} id="emailId"/>

                    <TextField type="password" {...register("password", {
                        required : true,
                        minLength : {value : 6, message : "Password should have a minimum length of 6"},
                    })}
                     variant="outlined" 
                     placeholder="Password" 
                     required={true}
                     label = "Password"
                    error={errors && errors.password?.message ? true : false} 
                    helperText={errors.password?.message} id="password"/>

                    <div className={styles.buttons}>
                        <FormButtons
                            primary={{
                                label : "Submit",
                                onClick : ()=> console.log("Submitted..")
                            }}
                            secondary={{
                                label : "Reset",
                                onClick : ()=> reset()
                            }}
                            tertiary={props.tertiary}
                        />
                    </div>
            </form>
            {errorMessage !== ""? <Typography variant="h5" id="errorMessage" className={styles.errorMessage}>{errorMessage}</Typography> : null}
            {isLoading && <LoadingSpinner/>}
            </div>
        </div>
        </>
    )
}