const getOtpMailOptions = (email, otp) => {
  return {  
  from: `"DEALfusion" <info.dealfusion@gmail.com>`,
  to : email,
  subject: "Your OTP Code - DEALfusion",
  html: `
    <div style="
      max-width: 500px;
      margin: auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      border-radius: 10px;
      background: #f9f9f9;
      border: 1px solid #ddd;
    ">
      <h2 style="text-align:center; color:#333;">
        DealFusion OTP Verification
      </h2>

      <p style="font-size:16px; color:#555; text-align:center;">
        Use the OTP below to verify your email:
      </p>

      <div style="
        font-size: 28px;
        font-weight: bold;
        letter-spacing: 6px;
        color: #fff;
        background: #000;
        padding: 12px 24px;
        text-align: center;
        border-radius: 8px;
        margin: 20px auto;
        width: fit-content;
      ">
        ${otp}
      </div>

      <p style="text-align:center; font-size:14px; color:#777;">
        This OTP will expire in <b>5 minutes</b>.
      </p>

      <hr />

      <p style="font-size:12px; color:#999; text-align:center;">
        If you did not request this OTP, please ignore this email.
      </p>

      <p style="font-size:12px; color:#999; text-align:center;">
        © ${new Date().getFullYear()} DEALfusion. All rights reserved.
      </p>
    </div>
  `
  }
};
module.exports=getOtpMailOptions;