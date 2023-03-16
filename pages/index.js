import Header from "../components/Header"
import { useScroll } from 'ahooks';
import { useEffect, useRef, useState } from "react";
import MainBanner from "../components/MainBanner";
import About from "../components/About";
import Work from "../components/Work";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

export default function Page() {

    // const ref = useRef(typeof window !== "undefined" ? document : null);
    
    // const scroll = useScroll(ref); 
    // useEffect(() => {
    //   const {top, left} = scroll
    //   console.log(top);
    // }, [scroll]);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const onClickMenu = (menu) => {
        let topOffset = 0;
        if (menu === "ABOUT") topOffset = ref1.current.offsetTop;
        if (menu === "CODING") topOffset = ref2.current.offsetTop;
        if (menu === "REDESIGN") topOffset = ref3.current.offsetTop;
        if (menu === "CONTACT") topOffset = ref4.current.offsetTop;
        window.scrollTo({top: topOffset, left: 0, behavior: 'smooth'});
    }

    //선택된 컴포넌트
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="indexWrap">
                {/* 헤더 */}
                <Header 
                    onClickMenu={onClickMenu}
                />
                {/* 메인 베너 */}
                <MainBanner />
                <About />
                <Work />
            </div>

            <CustomCursor 
                    targets={['#menu-1', '#menu-2', '#menu-3', '#menu-4', '.about_title', '.menu', '.slide-control-button div', '.view_more']}
                    customClass='custom-cursor'
                    dimensions={30}
                    fill='#FFF'
                    smoothness={{
                        movement: 0.2,
                        scale: 0.1,
                        opacity: 0.3,
                    }}
                    // opacity={0.3}
                    targetOpacity={0.4}
                    // strokeWidth={10}
                />
            
            <style jsx>{`
                .indexWrap { min-height: 100vh; background: #000;}
                .custom-cursor { mix-blend-mode:difference; position: relative; fill: #fff;}
                .custom-cursor circle { mix-blend-mode: difference;}
            `}
            </style>
        </>

    )
}
