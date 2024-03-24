import React, { useState } from 'react';
import SearchlistActions from './SearchlistActions';
import ToPlaylistActions from './ToPlaylistActions';
import '../styles/Search.css';

export default function Searchlist({chartinfo, showAddToPlaylist}) {
  const [isShownToPlaylist, setIsShownToPlaylist] = useState(false);
  const toggleToPlaylist = () => {
    setIsShownToPlaylist(!isShownToPlaylist);
  }
  return (
    <div className='search-list'>
        <div className='search-list-content'>
            <img src={chartinfo.info.image} className='search-list-image' alt="chart list" />
            {!isShownToPlaylist ? <div className='search-list-info'>
                <div className='search-list-header'>
                    <div className='search-list-name'>{chartinfo.info.name}</div>
                    <div className='search-list-title'>{chartinfo.info.title}</div>
                </div>
                <div className='search-list-time'>{chartinfo.info.duration} <span style={{ marginLeft: '12px' }}>{chartinfo.info.views} Views</span></div>
            </div> :
            <ToPlaylistActions chartinfo={chartinfo} showAddToPlaylist={showAddToPlaylist} />}
        </div>
        <SearchlistActions chartinfo={chartinfo} toggleDisplay={toggleToPlaylist} />
    </div>
  )
}
