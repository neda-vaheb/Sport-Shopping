const MOCK_OTP ="123456";
export const SendMockOTp = async(Phone:string):Promise<{
    success:boolean;
    message:string;
    otp?:string;
}>=>{
    await new Promise((resolve)=>setTimeout(resolve,2000))
if(!Phone){
    return{
        success:false,
        message:"Phone number is required"
    }
};
return{
    success:true,
    message:"Otp send successfully",
    otp:MOCK_OTP
};
}

export const VerifyMockOtp = async(phone:string,otp:string):Promise<{success:boolean , message:string}>=>{
    await new Promise((resolve)=>setTimeout(resolve,900))
    if(otp !==MOCK_OTP){
        return{
            success:false,
            message:"Invalid Otp"
        }
    }
    return{
        success:true,
        message:"otp verified successfully",
    }
}