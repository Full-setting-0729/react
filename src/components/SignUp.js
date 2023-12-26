import React, { useState } from "react";
import "../App.css";

function SignUpForm() {
    const defaultImageSrc = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const [previewImage, setPreviewImage] = useState(defaultImageSrc);
    

    const handleImageUpload = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewImage(event.target.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    
    return (
        <div className="SignUppageArea">
            <div className="signUpArea">
                <form>
                <div>
                        <label htmlFor="profileImageUpload" className="signup-profileImg-label">프로필 이미지 추가</label>
                        <input
                            type="file"
                            id="profileImageUpload"
                            accept="image/*"
                            className="signup-profileImg-input "
                            onChange={handleImageUpload}
                            
                        />
                        {/* 프로필 미리보기 */}
                        <img
                            src={previewImage}
                            alt="Profile Preview"
                            className="image-preview"
                            style={{ width: '100px', height: '100px' }}
                        />
                    </div>
                    {!previewImage && (
                        <img
                            src={defaultImageSrc}
                            alt="Default Profile"
                            style={{ width: '100px', height: '100px' }}
                        />
                    )}
                    <div className="form-content">
                        <div className="ID-container">
                            <p className="content">아이디<br />
                                <input className="InputArea" type="text" id="ID" placeholder="아이디 입력" />
                            </p>
                            <button className="chkID-button">중복확인</button>
                        </div>
                        <p className="content">비밀번호<br />
                            <input className="InputArea" type="password" id="PWD" placeholder="비밀번호 입력" />
                        </p>
                        <p className="content">비밀번호 확인<br />
                            <input className="InputArea" type="password" id="ChkPWD" placeholder="비밀번호 확인"/>
                        </p>
                        <div className="phone-container">
                            <p className="content">휴대폰 번호<br />
                                <input className="InputArea" type="text" id="phone" placeholder="-없이 입력해주십쇼" />
                            </p>
                            <button className="authButton">인증하기</button>
                            </div>
                        <div className="checkBoxJob">
                            <ul>
                                <li className="radio_item">
                                    <input type="radio" id="influencer1" name="jobType" value="I" class="hidden-input" checked></input>
                                    <label for="influencer1" class="custom-radio-button">인플루언서</label>
                                </li>
                                <li className="radio_item">
                                    <input type="radio" id="advertiser1" name="jobType" value="A" class="hidden-input"></input>
                                    <label for="advertiser1" class="custom-radio-button">광고주</label>
                                </li>
                            </ul>
                        </div>
                        <p className="content">사업자 번호<br />
                            <input className="InputArea" type="text" id="BussinessNum" placeholder="사업자 번호" />
                        </p>
                        <p className="content">주소<br />
                            <input className="InputArea" type="text" id="adress" placeholder="주소" />
                        </p>
                        <div className="buttonContainer">
                            <input type="submit" value="가입하기" />
                            <input type="button" value="뒤로가기" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;