import React from 'react'
import VideoPageCard from '../VideoPageCard/VideoPageCard'
import {useParams} from 'react-router-dom'

function VideoPage() {

    const { id } = useParams();

  return (
       <div className="videopage">
              <VideoPageCard videoId={id}/>
        </div>
  )
}

export default VideoPage





