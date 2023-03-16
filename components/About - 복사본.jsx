import React, { useEffect, useRef } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useScroll, useMouse } from 'ahooks';

const About = () => {
    const ref = useRef(null);
    const mouse = useMouse(ref.current);

    // console.log(mouse)

    // useEffect(() => {
    //     AOS.init();
    // }, []);

    const scroll = useScroll(typeof window !== "undefined" && document);
    const position = scroll ? scroll.top : 0;

    return (
        <>
            <div className="wrap">
                <h1 className="about_title">
                    {/* 시각적으로 아름답고 화려한 디자인만을 만드는 것이 전부가 아닌,
                    최적의 사용자 경험을 제공하는 것을 목표로 하는
                    웹 퍼블리셔가 되겠습니다. */}

                    새로운 도전과 성장하는 즐거움,<br />
                    디자인 너머 그 이상을 생각하는<br />
                    웹 디자이너

                </h1>
                <div className="imgBox">
                    <div className="imgArea pic01"><img src="/img/pic01.jpg"></img></div>
                    <div className="imgArea pic02"><img src="/img/pic02.jpg"></img></div>
                    <div className="imgArea pic03"><img src="/img/pic03.jpg"></img></div>
                    <div className="imgArea pic04"><img src="/img/pic04.jpg"></img></div>
                    <div className="imgArea pic05"><img src="/img/pic05.jpg"></img></div>
                    <div className="imgArea pic06"><img src="/img/pic06.jpg"></img></div>
                </div>

                {/* <div id="mouse-cursor"></div> */}
            </div>

            <style jsx>{`

            .wrap { 
                height: 250vh; 
                // background: url('../img/fixed_background.jpg')no-repeat center/cover; 
                background: url('../img/stars_bg04.jpg')no-repeat center/cover; 
                background-attachment: fixed; 
                padding: 46px; 
                position: relative;
                overflow: hidden;
            }
            .about_title { 
                color: #fff; 
                width: 100%;
                text-align: center; 
                font-size: 5vmin; 
                top: 50%;
                left: 0;
                transform: translateY(-50%); 
                opacity: ${position > 1500 ? 1 : 0};
                // transform: translateY(calc(50% + ${((position - 310) / 30)}%)); 
                letter-spacing: -1px; 
                position: absolute; 
                transition: 2s;
            }
            .imgBox{ overflow: hidden; height: 100%; margin: 0 auto; text-align: center; position: relative;}
            .imgArea{ position: absolute; transition: 1s; }
            .imgArea img{ width: 100%;}
            .pic01 {
                left: 50%;
                transform: translate(-50%, ${((position - 300) / 30)}%); 
                opacity: ${position > 300 ? 1 : 0};
                // height: 460px;
                // width: 325px;   
                width: 22vw;
            }
            .pic02 {
                left: 8vw;
                width: 26vw;
                top: 10%;
                transform: translateY(${((position - 310) / 30)}%); 
                opacity: ${position > 500 ? 1 : 0}
            }
            .pic03 {
                right: 8vw;
                width: 28vw;       
                top: 11%;   
                transform: translateY(${((position - 820) / 30)}%); 
                opacity: ${position > 800 ? 1 : 0}
            }
            .pic04 {
                left: 11vw;
                width: 24vw;
                top: 55%;
                z-index: 1;
                transform: translateY(${((position - 630) / 30)}%); 
                opacity: ${position > 1300 ? 1 : 0}
            }
            .pic05 {
                right: 1vw;
                width: 25vw;
                top: 50%;
                transform: translateY(${((position - 400) / 30)}%); 
                opacity: ${position > 1400 ? 1 : 0}
            }
            .pic06 {
                left: 41%;
                width: 29vw;
                top: 40%;
                transform: translateY(${((position - 200) / 30)}%); 
                opacity: ${position > 1100 ? 1 : 0}
            }
            .pic07 {
                right: 27vw;
                width: 26vw;
                top: 100%;
                transform: translateY(${((position - 70) / 30)}%); 
                opacity: ${position > 2000 ? 1 : 0}
            }

            #mouse-cursor {
                pointer-events: none;
                position: fixed; 
                top: ${mouse.clientY}px; 
                left: ${mouse.clientX}px; 
                width: 23px; 
                height: 23px; 
                border-radius: 50%; 
                // background: rgba(255, 255, 255, .4);   
                background: #fff;
                transform: translate(-50%, -50%);
                transition: all .1s ease-out;
                mix-blend-mode: difference;
                backface-visibility: hidden;
                z-index: 999;
            }

            `}</style>
        </>
    )
}

export default About;
