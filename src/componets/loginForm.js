import React from "react";
import Logo from "../assets/adballoon.jpg";
import 구글로그인버튼 from "../assets/구글 로그인 버튼.svg";
import 네이버로그인버튼 from "../assets/네이버 로그인 버튼.svg";
import 카카오로그인버튼 from "../assets/kakao_login_medium_narrow.png";

function LoginForm(){

    return(
    <div className="pageArea">
        <div className="LoginArea">
            <img src = { Logo } className="Logo"></img>
            <form>
                    <p><input className="LoginInput" type="text" name="ID" placeholder="아이디를 입력하세요."></input></p>
                    <p><input className="LoginInput" type="password" name="PW" placeholder="비밀번호를 입력하세요."></input></p>
                    <div>
                        <a href="#" className="SignUp" value="회원가입">회원가입</a>
                        <a href="#" className="IdPwFind" value="아이디/비번찾기">아이디/비밀번호 찾기</a>
                    </div>
                    <div><input className="LogFormBt" type="submit" value="로그인"></input></div>
                    
                </form>    
            </div>
    </div>
    );
}
export default LoginForm;