import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
// import Message from '../components/Message'
import Menu from '../components/Menu'
import Playlist from '../components/Playlist'
import Chartlist from '../components/Chartlist'
import LoadmoreButton from '../components/LoadmoreButton'
import AddToPlaylist from '../components/AddToPlaylist'
import BottomMenu from '../components/BottomMenu'
import CountrySelect from '../components/CountrySelect'
import CreatePlaylist from '../components/CreatePlaylist'
// import song from 'file:///C:/Users/Administrator/Downloads/MORAD & GIMS - SEYA (Official Video).mp3';
import '../styles/Home.css';
import { getPlaylists } from '../reducers/playlistsSlice'
import { getSongs } from '../reducers/songsSlice'

export default function Home() {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [displayAmount, setDisplayAmount] = useState(10);
  const [charts, setCharts] = useState([]);
  const [isShownAddToPlaylist, setIsShowsAddToPlaylist] = useState(false);
  const [chartToAddToPlaylist, setChartToAddToPlaylist] = useState({});
  const [isOpenedCreatePlaylistModal, setIsOpenedCreatePlaylistModal] = useState(false);
  const previousSelectedCountry = useRef();
  const openCreatePlaylistModal = () => {
    setIsOpenedCreatePlaylistModal(true);
  }
  const closeCreatePlaylistModal = () => {
    setIsOpenedCreatePlaylistModal(false);
  }
  const showAddToPlaylist = (chartinfo) => {
    setChartToAddToPlaylist(chartinfo);
    setIsShowsAddToPlaylist(true);
  }
  const closeAddToPlaylist = () => {
    setIsShowsAddToPlaylist(false);
  }
  const loadMore = () => {
    setDisplayAmount(displayAmount > 90 ? 100 : displayAmount+10);
  }
  const changeCountry = (country) => {
    setSelectedCountry(country);
  }
  const getCharts = async (videos) => {
    try {
      const temp = await Promise.all(
        videos.map(async (video) => {
          const response = await axios.get('https://loader.to/ajax/download.php?format=mp3&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D' + video.split('=')[1] + '&api=dfcb6d76f2f6a9894gjkege8a44563255');
          return {"id": response.data.id, "info": response.data.info};
        })
      );
      setCharts(temp);
    } catch (error) {
      console.error(error);
    }
  };
  const setPlaylists = (playlists) => {
    dispatch(getPlaylists(playlists));
  }
  useEffect(() => {
    dispatch(getPlaylists(JSON.parse(localStorage.getItem('playlists')) || []));
    dispatch(getSongs(JSON.parse(localStorage.getItem('songs')) || []));
  }, [dispatch]);
  useEffect(() => {
    if (selectedCountry !== previousSelectedCountry.current) {
      setDisplayAmount(10);
      previousSelectedCountry.current = selectedCountry;
    }
    axios.get('https://loader.to/ajax/api.php?function=charts&api=dfcb6d76f2f6a9894gjkege8a44563255&country='+selectedCountry)
      .then(response => {
        const videos = response.data.videos.slice(0, displayAmount);
        getCharts(videos);
      })
      .catch(error => {
        console.error(error);
      });
  }, [displayAmount, selectedCountry]);
  return (
    <div className='Home'>
      {/* <Message type="error" />
      <Message type="success" />
      <Message type="info" /> */}
      <div className='home-header'>
        <Menu />
        <div className='home-title'>Home</div>
        <div style={{ width: '40px' }}></div>
      </div>
      {/* <audio id="audio" controls>
          <source src={song} type="audio/mpeg" />
          Your browser does not support the audio element.
      </audio> */}
      <div className='home-search'>
        <input type="text" placeholder='Search' />
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div className='playlists'>
        <div className='playlists-label'>
          <div>Recent Playlists</div>
          <div className='playlists-view-all'>View All</div>
        </div>
        <div className='playlists-slider'>
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div>
      </div>
      <div className='music-charts'>
        <div className='music-charts-label'>Music Charts</div>
        <CountrySelect changeCountry={changeCountry} />
        <div className='music-charts-result-label'>Results <span>({displayAmount})</span></div>
        <div className='charts-list'>
          {charts.map(chart => (
            <Chartlist key={chart.id} chartinfo={chart} showAddToPlaylist={showAddToPlaylist} />
          ))}
        </div>
        <LoadmoreButton loadMore={loadMore} />
      </div>
      {isShownAddToPlaylist && <AddToPlaylist chartinfo={chartToAddToPlaylist} openCreatePlaylistModal={openCreatePlaylistModal} closeAddToPlaylist={closeAddToPlaylist} />}
      {isOpenedCreatePlaylistModal && <CreatePlaylist closeModal={closeCreatePlaylistModal} setPlaylists={setPlaylists} />}
      <BottomMenu />
    </div>
  )
}
 