import React, { useState } from 'react';
import ChartlistActions from './ChartlistActions';
import ToPlaylistActions from './ToPlaylistActions';
import '../styles/Home.css';

export default function Chartlist({chartinfo, showAddToPlaylist}) {
  const [isShownToPlaylist, setIsShownToPlaylist] = useState(false);
  const toggleToPlaylist = () => {
    setIsShownToPlaylist(!isShownToPlaylist);
  }
  const chartlistname = chartinfo.info.title.split(' - ')[0];
  const chartlisttitle = chartinfo.info.title.split(' - ')[1];
  return (
    <div className='chart-list'>
        <div className='chart-list-content'>
            <img src={chartinfo.info.image} className='chart-list-image' alt="chart list" />
            {!isShownToPlaylist ? <div className='chart-list-info'>
                <div className='chart-list-header'>
                    <div className='chart-list-name'>{chartlistname}</div>
                    <div className='chart-list-title'>{chartlisttitle}</div>
                </div>
                <div className='chart-list-time'>04 : 15 <span style={{ marginLeft: '12px' }}>12,090 Views</span></div>
            </div> :
            <ToPlaylistActions chartinfo={chartinfo} showAddToPlaylist={showAddToPlaylist} />}
        </div>
        <ChartlistActions chartinfo={chartinfo} toggleDisplay={toggleToPlaylist} />
    </div>
  )
}
