import styled from "styled-components"

export const LoginBlock = styled.div`
    width: 400px;
    height: 560px;
    background: black;
    border-radius: 8px;
    margin-top: 40px;
    padding: 30px;
    box-sizing: border-box;
    color: white;
    z-index:3;
    a {
        text-decoration: none;
    }
    span {
        font-size: 12px;
    }
    h1 {
        margin-bottom: 16px;
    }
    input{
        width:340px;
        padding: 12px;
        outline: none;
        border: none;
        background: #585858;
        border-radius:6px;
        box-sizing: border-box;
        ::placeholder{
            color: #8C8C8C;
        }
    }
    input[type=password]{
        margin: 12px 0px 32px 0px;
    }
    
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
	 transition: background-color 5000s ease-in-out 0s;
	 -webkit-transition: background-color 9999s ease-out;
     -webkit-text-fill-color: white !important;
     -webkit-text-fill-background-color: #585858;
   }

    .loginButton{
        width:340px;
        padding: 12px;
        border-radius: 6px;
        background: #77DAFF;
        color: #656565;
        border: none;
        cursor: pointer;
    }
    .help {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    input[type=checkbox]{
        width: 10px;
        height: 10px;
    }
    .find {
        color: white;
        font-size: 14px;
    }
    .facebook {
        font-size: 12px;
        margin-bottom: 12px;
    }
    .membership {
        font-size: 12px;
    }
    .membership span {
        color: white;
    }
`