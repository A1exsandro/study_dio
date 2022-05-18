import React from 'react';
import * as S from './styled';

function Profile() {
    return (
    <S.Wrapper>
        <S.WrapperImage 
            src="https://avatars.githubusercontent.com/u/83672739?v=4" 
            alt="Avatar of user" 
        />
        <S.WrapperInfoUser>
            <div>
                <h1>Alexsandro Antônio</h1>
                <S.WrapperUserName>
                    <h3>UserName: </h3>
                    <a 
                    href="https://github.com/A1exsandro"
                    target="_blank"
                    rel="noreferrer"
                    >
                        a1exsandro
                    </a>
                </S.WrapperUserName>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount> 
        </S.WrapperInfoUser>
    </S.Wrapper>
    );
}

export default Profile;