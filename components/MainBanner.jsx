import React, { useState, useEffect, useRef } from 'react'
import { useSize } from 'ahooks';
let timer = null;
function MainBanner() {

	const intervalFunction = () => {
		const target = document.querySelector('.container > .slide.active');
		const idx = Number(target.className.split(' ')[2].replace("s", "")) - 1;
		if (idx < 2) setIndex(idx + 1);
		else setIndex(0);
	}

	useEffect(() => {
		timer = setInterval(intervalFunction, 5000);
		return () => {
			clearInterval(timer);
		}
	}, []);

	const ref = useRef(null);
	const size = useSize(ref);

	// 페이지 인덱스
	const [index, setIndex] = useState(0);

	const onNextSlide = () => {
		if (index < 2) setIndex(index + 1);
		else setIndex(0);
	}

	const onPrevSlide = () => {
		if (index > 0) setIndex(index - 1);
		else setIndex(2);
	}

	return (
		<>
			<div className="line-1" />
			<div className="line-2" />
			<button className="view_more">view project<span></span></button>
			<div className="slide-control-button">
				<div onClick={onPrevSlide}><img src="/images/arrow_prev.png" /></div>
				<div onClick={onNextSlide}><img src="/images/arrow_next.png" /></div>
			</div>
			<div className={`container`} ref={ref}>

				<div className={`slide s1 ${index === 0 ? 'active' : ''}`}>
					<div className="main_title">
						{/* <span>ideation</span> */}
						<span>Discover new value</span>
						<h1>Serendipity</h1>
					</div>
					<div className="img_inner">
						<div className="img_bx"></div>
					</div>
				</div>

				<div className={`slide s2 ${index === 1 ? 'active' : ''}`}>
					<div className="main_title">
						<span>Deep blue sky</span>
						<h1>Azure</h1>
					</div>
					<div className="img_inner">
						<div className="img_bx"></div>
					</div>
				</div>

				<div className={`slide s3 ${index === 2 ? 'active' : ''}`}>
					<div className="main_title">
						<span>Melody</span>
						<h1>Lyrical</h1>
					</div>
					<div className="img_inner">
						<div className="img_bx"></div>
					</div>
				</div>
			</div>

			<style jsx>{`
			
			.line-1 {position: absolute; top:182px; left: 48px;  width: 1px; background: #777; z-index: 998; height: ${size ? (size.height - 230) : 700}px;}
			.line-2 {position: absolute; bottom: 48px; left: 48px; height: 1px;  background: #777; z-index: 998; width: ${size ? size.width - 216 : 1200}px;}
			.view_more{
				position: absolute;
				top: 75%;
				left: 96px;
				z-index: 998;
				padding: 25px;
				background: #000;
				color: #fff;
				border: 1px solid #333;
				min-width: 230px;
				font-size: 1rem;
				text-align: left;
				box-sizing: border-box;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.view_more span{ background: #7f7f7f; width: 14px; height: 2px; display: block;}
			.slide-control-button {position: absolute; bottom: 48px; right: 48px; z-index: 5; display: flex; align-items: center; justify-content: center;}
			.slide-control-button > div {width: 60px; height: 22px; display: flex; align-items: center; justify-content: center; background: none; cursor: pointer;}

			.container {height: 100vh; }
            .slide {transition: 3000ms; width: 100%; height: 100vh; position: absolute; top: 0; left: 0; opacity: 0; padding: 0 96px 96px;}
            .slide.active {opacity: 1; transition-delay: 0.8s; }

			.container .slide .img_inner{
				width: 720px;
				height: 96%;
				position: absolute;
				top: -48px;
				right: 180px;
				overflow: hidden;
			}
			.container .slide .img_bx{
				width: 100%;
				height: 100%;
				transform: scale(1.1);
				transition: 8s all ease-in-out;
			}
			.slide.active .img_bx {
				transform: scale(1) !important;
				transition: 8s all ease-in-out;
				transition-delay: 1.3s;
				transition-property: transform;
			}
			.container .s1 .img_bx{
				background: url(../images/main_banner01.jpg)no-repeat center/cover;
			}
			.container .s2 .img_bx{
				background: url(../images/main_banner02.jpg)no-repeat center/cover;
			}
			.container .s3 .img_bx{
				background: url(../images/main_banner03.jpg)no-repeat center/cover;
			}
			.container .slide.s2 {background: #000;}
			.container .slide.s3 {background: #000;}

			.container .slide .main_title {
				color: #fefefe;
				position: absolute;
    			top: 30%;
			}
			.container .slide .main_title h1 {
				font-size: 10vh;
				font-family: 'Nanum Myeongjo', serif;
				margin-top: 40px;
			}
			.container .slide .main_title span {
				font-family: 'Daehan-Bold';
				font-family: 'IBM Plex Sans KR', sans-serif;
				letter-spacing: 5px;
			    color: #eee;
			}
			`}</style>
		</>
	)
}

export default React.memo(MainBanner);
