import { useEffect, useRef, useMemo } from "react";

const changeBg = () =>{

    var colors = [
        '#F2B705',
        '#F25C05',
        '#0388A6',
        '#0E5929',
        '#F272A1',
    ]

    var container = document.getElementById('container');

    var text = document.getElementById('value');	//Scroll Value
    var color = document.getElementById('color');	//Color Code

    //Wheel Event
    container.onwheel = changeBgColor;

    var colorIndex = 0;
    var scrollValue = 0;	//get mouse wheel value

    function changeBgColor(e) {
        scrollValue += e.deltaY * 0.01;
        text.textContent = Math.floor(scrollValue);

        console.log(scrollValue);

        //위로 Scroll
        if (scrollValue > 10) {
            colorIndex += 1;
            if (colorIndex > colors.length-1) colorIndex = 0;
            color.textContent = colors[colorIndex];
            container.style.backgroundColor = colors[colorIndex];	//배경색 변경
            scrollValue = 0;	//스크롤 값 초기화
        }

        //아래로 Scroll
        if (scrollValue < -10) {
            colorIndex -= 1;
            if (colorIndex < 0) colorIndex = colors.length-1;
            color.textContent = colors[colorIndex];
            container.style.backgroundColor = colors[colorIndex];	//배경색 변경
            scrollValue = 0;	//스크롤 값 초기화
        }
        e.preventDefault(); // disable the actual scrolling
    }

}


const colorBg = () => {
    // getElementById('body').addClass('color-' + $(this).data('color'));

}
const Work = () => {

    // 1. 스크롤 위치를 확인한다.
    // 2. #work-page의 위치를 확인
    // 3. 1. 과 2. 를 비교하여 2. 보다 1.이 더 큰 경우 스크롤 이벤트를 중지한다.
    // 4. 이후부터 스크롤이 한페이지 씩 이동되도록 변경
    // 4-1. 한 페이지의 크기를 구한다.
    // 4-2. 스크롤의 방향을 구한다.
    // 4-3. 특정 위치까지 스크롤하는 방법
    // 5. 스크롤이벤트 중지한거 다시 푸는 방법

    
    useEffect(() => {
        // changeBg();
        // 서버사이드 렌더링이 아닌 클라이언트 사이드 렌더링일 경우
        if (typeof window !== 'undefined') {
            const  target1 =  document.querySelector('body');
            const  target2 =  document.querySelector('#work-page');
            console.dir(target2);
            console.dir(target2.offsetTop);
            target1.onscroll = (e) => {
                e.preventDefault();
                if (target2.offsetTop < window.scrollY) {

                }
            }
        }
    }, []);

    return (
        <>
            <div className="wrap" id="work-page">
                <div className="project_area project01 panel">
                    <div className="info_box">
                        <h1>Apple</h1>
                        <p>모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.<br />
                            헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.<br />
                            국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.</p>
                    </div>
                    <div className="img_box"></div>
                    <div></div>
                    <div className="numbering">
                        <span>01</span>
                        <span>/</span>
                        <span>06</span>
                    </div>
                </div>
                {/* <div className="project_area project02"></div>
                <div className="project_area project03"></div> */}
                <div className="project_area project02 panel" data-color="violet">
                    <div className="info_box">
                        <h1>m-sync</h1>
                        <p>모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.<br />
                            헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.<br />
                            국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.</p>
                    </div>
                    <div className="img_box"></div>
                </div>

                <div className="panel" data-color="indigo">
                    <h2>Indigo panel</h2>
                </div>
                <div className="panel" data-color="blue">
                    <h2>Blue panel</h2>
                </div>
                <div className="panel" data-color="green">
                    <h2>Green panel</h2>
                </div>
            </div>
    


            <style jsx>{`
                .wrap { 
                    min-height: 300vh; 
                    width: 100%;
                    background: #fff;
                    padding: 48px; 
                    position: relative;
                }
                .project_area,
                .panel{
                    width: 100%;
                    height: 80vh;
                    border: 1px solid;
                    display: flex;
                    background-attachment: fixed;
                    position: relative;
                }
                .project_area > .info_box,
                .project_area > .img_box{
                    display: flex;
                    align-items: center;
                    padding: 48px; 
                }
                .project_area .info_box{
                    flex: .45;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 180px;
                }
                .project_area .info_box h1{
                    // font-family: 'Daehan-Bold';
                    // font-family: "Nanum Myeongjo",serif;
                    font-family: "Gowun Batang",serif;
                    width: 100%;
                    font-size: 3rem;
                    margin: 0;
                }
                .project_area .info_box p{
                    font-family: 'Pretendard-Regular';
                    margin-top: 50px;
                    color: #6c6c6c;
                    line-height: 1.3;
                }
                .project_area .img_box{
                    flex: .55;
                    margin: 0 auto;
                }
                .project01 .img_box{
                    background: url("/images/apple.jpg")no-repeat 18% 100%;
                }
                .project02 .img_box{
                    background: #000 url("/images/msync.jpg")no-repeat center bottom/135%
                }
                .numbering {
                    position: absolute;
                    bottom: 0;
                    padding: 0 !important;
                    font-size: 1.1rem;
                    font-family: 'SBAggroM';
                }
                .numbering span:first-child{ font-size: 150px;}
                .numbering span:nth-child(2){ margin: 0 10px;}
                .numbering span:first-child{3}{
                    
                }

                .color-violet {
                    background-color: #7A4EAB;
                  }
                  .color-indigo {
                    background-color: #4332CF;
                  }
                  .color-blue {
                    background-color: #2F8FED;
                  }
                  .color-green {
                    background-color: #4DCF42;
                  }
                  .color-yellow {
                    background-color: #FAEB33;
                  }
                  .color-orange {
                    background-color: #F19031;
                  }
                  .color-red {
                    background-color: #F2293A;
                  }
            `}</style>
        </>
    )
}

export default Work;
// export default {Work, changeBg};