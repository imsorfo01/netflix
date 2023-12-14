export const checkValidData=(email,password)=>{
    
   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
   const isPasswordValid= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
   if (!isEmailValid) return "Email is not Valid"
   if (!isPasswordValid) return "Password Should Contain Minimum eight characters, at least one letter and one number"

return null
}