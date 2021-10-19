import React from 'react'
import List from '../components/list'
import TopBar from '../components/TopBar'

export default function ContentListing() {
    return (
        <div className="flex-1 h-screen">
            <TopBar onSearch={(value)=>{console.log(value)}} />
            <List />
        </div>
    )
}
