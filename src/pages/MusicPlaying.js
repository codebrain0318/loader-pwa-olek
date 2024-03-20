import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Theme'
import BackButton from '../components/BackButton'
import MusicPlayingActions from '../components/MusicPlayingActions'
import MusicPlayingSonglist from '../components/MusicPlayingSonglist'
import PlayingSonglist from '../components/PlayingSonglist'
import playingImage from '../assets/images/playing.png'
import playingImage1 from '../assets/images/playing1.png'
import '../styles/MusicPlaying.css'

export default function MusicPlaying() {
  const { theme } = useContext(ThemeContext);
  const [isShownSongs, setShowSongs] = useState(false);
  const showSongs = () => {
    setShowSongs(true);
  }
  const hideSongs = () => {
    setShowSongs(false);
  }
  return (
    <div className='MusicPlaying'>
      <div className='musicplaying-header'>
        <div className='musicplaying-title-container'>
          <BackButton />
          <div className='musicplaying-title'>Playing Now</div>
        </div>
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showSongs} stylep={{ cursor: 'pointer' }}>
          <path d="M17.25 14.375V1.25C17.25 1.25 21 2.5 21 6.25M12.25 2.5H1M12.25 7.5H1M6 12.5H1M17.25 15.5C17.25 17.125 15.625 18.5 13.5 18.5C11.375 18.5 9.75 17.25 9.75 15.5C9.75 13.875 11.375 12.5 13.5 12.5C15.625 12.5 17.25 13.75 17.25 15.5Z" stroke="#8391A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className='musicplaying-container'>
        <div className='musicplaying-playing'>
          <img className='musicplaying-image1' src={playingImage1} alt="playingImage1" />
          <img className='musicplaying-image1' src={playingImage1} alt="playingImage1" />
          <svg className='musicplaying-left-shadow' width="60" height="231" viewBox="0 0 60 231" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_43_18430)">
                <ellipse cx="30" cy="115.5" rx="14" ry="99.5" fill="#06070A"/>
            </g>
            <defs>
                <filter id="filter0_f_43_18430" x="0.6" y="0.6" width="58.8" height="229.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="7.7" result="effect1_foregroundBlur_43_18430"/>
                </filter>
            </defs>
          </svg>
          <svg className='musicplaying-right-shadow' width="60" height="231" viewBox="0 0 60 231" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_43_18430)">
                <ellipse cx="30" cy="115.5" rx="14" ry="99.5" fill="#06070A"/>
            </g>
            <defs>
                <filter id="filter0_f_43_18430" x="0.6" y="0.6" width="58.8" height="229.8" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="7.7" result="effect1_foregroundBlur_43_18430"/>
                </filter>
            </defs>
          </svg>
          {theme === 'light-theme' ? <svg className='music-playing-bottom-shadow1' width="375" height="92" viewBox="0 0 375 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_41_18424)">
                <path d="M188 29L355 63L188 55.6486L21 63L188 29Z" fill="#141819"/>
            </g>
            <defs>
                <filter id="filter0_f_41_18424" x="-8" y="0" width="392" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_41_18424"/>
                </filter>
            </defs>
          </svg> : <svg className='music-playing-bottom-shadow1' width="375" height="92" viewBox="0 0 375 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_171_35354)">
                  <path d="M188 29L355 63L188 55.6486L21 63L188 29Z" fill="black"/>
              </g>
              <defs>
                  <filter id="filter0_f_171_35354" x="-8" y="0" width="392" height="92" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_171_35354"/>
                  </filter>
              </defs>
          </svg>}
          {theme === 'light-theme' ? <svg className='music-playing-bottom-shadow2' width="350" height="32" viewBox="0 0 350 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_43_18470)">
                  <path d="M175 8L342 24L175 20.5405L8 24L175 8Z" fill="#141819" fillOpacity="0.17"/>
              </g>
              <defs>
                  <filter id="filter0_f_43_18470" x="0" y="0" width="350" height="32" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_43_18470"/>
                  </filter>
              </defs>
          </svg> : <svg className='music-playing-bottom-shadow2' width="375" height="64" viewBox="0 0 375 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_171_35355)">
                  <path d="M188 24L355 40L188 36.5405L21 40L188 24Z" fill="black"/>
              </g>
              <defs>
                  <filter id="filter0_f_171_35355" x="-3" y="0" width="382" height="64" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_171_35355"/>
                  </filter>
              </defs>
          </svg>}
          <img className='musicplaying-image' src={playingImage} alt="playingImage" />
        </div>
        <div className='musicplaying-songinfo'>
          <div className='musicplaying-title'>Imagine Dragons</div>
          <div className='musicplaying-name'>Believer</div>
          <div className='musicplaying-amount'>02 / 100</div>
        </div>
      </div>
      <MusicPlayingActions />
      {isShownSongs && <div className='musicplaying-songs'>
        <div className='musicplaying-songs-overlap' />
        <div className='musicplaying-songs-panel'>
          <div className='musicplaying-songs-title'>
            <div>Songs</div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={hideSongs}>
                <path d="M17 1L1 17M17 17L1 1" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className='musicplaying-songs-container'>
            <PlayingSonglist />
            <MusicPlayingSonglist />
            <MusicPlayingSonglist />
            <MusicPlayingSonglist />
            <MusicPlayingSonglist />
            <MusicPlayingSonglist />
          </div>
        </div>
      </div>}
    </div>
  )
}
