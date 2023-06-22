
export const validate=(values)=>{
    const errors = {};
    if (!values.username){
        errors.username ="Email cannot be empty"
    }else if(!values.username.includes('@')){
        errors.username="Invalid email address"
    }
    if (!values.password){
        errors.password ="Password cannot be empty"
    }else if (values.password.length < 6){
        errors.password ="Invalid password"
    }
    return errors;
}

