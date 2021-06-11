const Validate = (inputs) => {
    // name errors
    const errors ={};
    if(!inputs.userName) {
        errors.userName = "Check name";
    } 

    // phonenumber
    if(!inputs.phoneNumber || inputs.phoneNumber.length!=10) {
        errors.phoneNumber ="Check Phonenumber"
    }
    return errors;
}
export default Validate;