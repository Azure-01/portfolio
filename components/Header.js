import React from 'react';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

export default function Header(props) {

    return (
        <>

            <header>
                <div className="logo"><img src="/images/logo.png" /></div>
                <nav>
                    <ul>
                        <li id="menu-1" onClick={() => { props.onClickMenu('ABOUT') }}>ABOUT</li>
                        <li id="menu-2" onClick={() => { props.onClickMenu('CODING') }}>CLONE CODING</li>
                        <li id="menu-3" onClick={() => { props.onClickMenu('REDESIGN') }}>REDESIGN</li>
                        <li id="menu-4" onClick={() => { props.onClickMenu('CONTACT') }}>CONTACT</li>
                    </ul>
                    <div className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>

            <style jsx>{`

            header {
                position: relative;
                top: 0; 
                left: 0;
                height: 128px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 0 48px;
                z-index: 999;
                // background-color: rgba(0, 0, 0, 0.1);
                // backdrop-filter: blur(2px);
            }

            .logo { flex: 0.1; z-index: 999;}
            .logo img{
                object-fit: contain;
                width: 27%;
                min-width: 48px;
                max-width: 58px;
                margin-top: 1rem;
            }
            nav {
                flex: 0.9;
            //   width: 100%;
            //   height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            }

            nav ul {
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            }
            nav ul li {
            list-style: none;
            color: #f9f9f9;
            min-height: 34px;
            line-height: 34px;
            cursor: pointer;
            font-family: 'Gowun Batang', serif;
            cursor: pointer;
            white-space: nowrap;
            box-sizing: border-box;
            text-align: center;
            position: relative;
            }
            nav ul li:after{
            content: '';
            display: block;
            left: 0;
            width: 100%;
            bottom: 1px;
            height: 1px;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            background: #f9f9f9;
            position: absolute;
            transition: transform .3s cubic-bezier(.165,.84,.44,1),-webkit-transform .3s cubic-bezier(.165,.84,.44,1);
            -webkit-transform-origin: left top;
            transform-origin: left top;
            } 
            nav ul li:hover:after{
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            }
            nav .menu{
            width: 32px;
            // height: 18px;
            cursor: pointer;
            min-height: 34px;
            padding: 8px 0;
            display: flex;
            flex-direction: column;
            align-items: end;
            position: fixed;
            }
            nav .menu span{
            width: 32px;
            height: 3px;
            background: #f9f9f9;
            display: block;
            margin-bottom: 5px;
            }
            nav .menu span:last-child{
            width: 22px;
            height: 3px;
            margin-bottom: 0;
            }
        `}</style>
        </>
    )
}
