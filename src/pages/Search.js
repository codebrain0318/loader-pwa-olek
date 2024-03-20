import React from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import BottomMenu from '../components/BottomMenu'
import DeleteButton from '../components/DeleteButton'
import '../styles/Search.css'

export default function Search() {
  const navigate = useNavigate();
  const go2SearchDetail = (searchContent) => {
    navigate(`/search/${searchContent}`)
  }
  return (
    <div className='Search'>
      <div className='search-header'>
        <Menu />
        <div className='search-title'>Search</div>
        <div style={{ width: '40px' }}></div>
      </div>
      <div className='search-input'>
        <input type="text" placeholder='Search for Music' />
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58335C17.5 5.2111 13.9556 1.66669 9.58332 1.66669C5.21107 1.66669 1.66666 5.2111 1.66666 9.58335C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 18.3334L16.6667 16.6667" stroke="#8391A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div className='search-history'>
        <div className='search-history-row'>
          <div className='search-history-item' onClick={() => go2SearchDetail('Dua Lipa')}>Imagine Dragons</div>
          <DeleteButton />
        </div>
        <div className='search-history-row'>
          <div className='search-history-item' onClick={() => go2SearchDetail('Dua Lipa')}>Dua Lipa</div>
          <DeleteButton />
        </div>
        <div className='search-history-row'>
          <div className='search-history-item' onClick={() => go2SearchDetail('Dua Lipa')}>David Guetta</div>
          <DeleteButton />
        </div>
        <div className='search-history-row'>
          <div className='search-history-item' onClick={() => go2SearchDetail('Dua Lipa')}>Benni Benassi</div>
          <DeleteButton />
        </div>
      </div>
      <BottomMenu />
    </div>
  )
}
