import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Theme'
import ToggleButton from './ToggleButton'
import '../styles/Menu.css';

export default function Menu() {
    const { theme } = useContext(ThemeContext);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpened(isMenuOpened ? false : true);
    };
    return (
        <div className='Menu'>
            <div className='toggle-button'>
                {theme === 'light-theme' && isMenuOpened ? <svg width="40" height="40" viewBox="16 12 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}>
                    <g filter="url(#filter0_d_71_19840)">
                        <rect x="16" y="12" width="40" height="40" rx="12" fill="white"/>
                        <path d="M42 26L30 38M42 38L30 26" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_71_19840" x="0.6" y="0.6" width="70.8" height="70.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.37 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_19840"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_19840" result="shape"/>
                        </filter>
                    </defs>
                </svg> : theme === 'light-theme' && !isMenuOpened ? <svg width="40" height="40" viewBox="16 12 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}>
                    <g filter="url(#filter0_d_71_19849)">
                        <rect x="16" y="12" width="40" height="40" rx="12" fill="white"/>
                        <path d="M28 29H44" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M28 35H44" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="46.5" cy="22.5" r="3.5" fill="#0AC956"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_71_19849" x="0.6" y="0.6" width="70.8" height="70.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.745098 0 0 0 0 0.764706 0 0 0 0.37 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_19849"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_19849" result="shape"/>
                        </filter>
                    </defs>
                </svg> : theme === 'dark-theme' && isMenuOpened ? <svg width="40" height="40" viewBox="16 12 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}>
                    <g filter="url(#filter0_d_134_23594)">
                        <rect x="16" y="12" width="40" height="40" rx="12" fill="#191A1D"/>
                        <path d="M42 26L30 38M42 38L30 26" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_134_23594" x="0.6" y="0.6" width="70.8" height="70.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.37 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_23594"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_23594" result="shape"/>
                        </filter>
                    </defs>
                </svg> : <svg width="40" height="40" viewBox="16 12 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_134_23587)" onClick={toggleMenu}>
                        <rect x="16" y="12" width="40" height="40" rx="12" fill="#191A1D"/>
                        <path d="M28 29H44" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M28 35H44" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="46.5" cy="22.5" r="3.5" fill="#0AC956"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_134_23587" x="0.6" y="0.6" width="70.8" height="70.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="7.7"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.37 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_23587"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_23587" result="shape"/>
                        </filter>
                    </defs>
                </svg>}
            </div>            
            {isMenuOpened && <div className='menu-panel'>
                <div className='menu-header'>
                    <div className='menu-title'>Loader.fo</div>
                    <div className='theme-change'>
                        <div className='menu-toggle-label'>Theme</div>
                        <div className="menu-toggle">
                            <ToggleButton />
                        </div>
                    </div>
                </div>
                <div className='songs-info'>
                    <div>Songs: <span className='songs-info-value'>1230</span></div>
                    <div>Playlists: <span className='songs-info-value'>3</span></div>
                </div>
                <div className='menu-visit-site'>
                    <div className='menu-visit-site-label'>menu-Visit Our Website</div>
                    <Link to='/home' style={{ width: '100%' }}>
                        <button className='menu-visit-site-button'>
                            Loader.fo 
                            <span style={{ marginLeft: '20px' }}>
                                &rarr;
                            </span>
                        </button>
                    </Link>
                    <div className='menu-version'>Version - 305.9.1.1</div>
                </div>
            </div>}
        </div>
    )
}
