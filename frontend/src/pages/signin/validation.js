
export const validate=(values)=>{
    const errors = {};
    if (!values.email){
        errors.email ="Email cannot be empty"
    }else if(!values.email.includes('@')){
        errors.email="Invalid email address"
    }
    if (!values.password){
        errors.password ="Password cannot be empty"
    }else if (values.password.length < 6){
        errors.password ="Invalid password"
    }
    return errors;
}

