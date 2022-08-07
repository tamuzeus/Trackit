import styled from "styled-components";

export default function Header() {

    return (
        <HeaderProfile>
            <TittleSite>Trackit</TittleSite>

            <ProfileImgBody>
                <Img src="http://pm1.narvii.com/7903/18ebcadf76c2bb8dac09d9078962c1a08ac1b111r1-512-512v2_uhq.jpg"/>
            </ProfileImgBody>
        </HeaderProfile>
    )

}

const HeaderProfile = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed; 
    top: 0; 
    `

const TittleSite = styled.p`
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left: 20px;
`

const ProfileImgBody = styled.div`
    width: 51px;
    height: 51px;
    margin-right: 20px;
`

const Img = styled.img`
    object-fit: contain;
    border: transparent solid;
    border-radius: 50%;
    width: 100%;
    height: 100%;
`