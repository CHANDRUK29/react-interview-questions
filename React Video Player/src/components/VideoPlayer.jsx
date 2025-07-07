import React from 'react'

const BasicVideoPlayer = () => {
    return (
        <div>
            <video
                // src="https://ik.imagekit.io/roadsidecoder/yt/example.mp4"
                src="https://ik.imagekit.io/roadsidecoder/yt/example.mp4?tr=l-subtitles,i-yt/english.srt,l-end" // this will embed subtitles within the video itself
                //  src='https://ik.imagekit.io/5u2yd8bjj/DEV/test_video.mp4?updatedAt=1751884643024' 
                width={'800px'}
                height={'450px'}
                controls
                //  autoPlay
                //  muted
                loop
                // poster='https://ik.imagekit.io/5u2yd8bjj/DEV/test_video.mp4/ik-thumbnail.jpg?tr=so-15' // for thumbnail
                poster="https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-thumbnail.jpg"
            >
                {/* for subtitles */}
                <track
                    kind='subtitles'
                    src='../public/english.vtt'
                    srcLang='en'
                    label='English'
                    default
                />
                <track
                    kind='subtitles'
                    src='../public/hindi.vtt'
                    srcLang='hi'
                    label='Hindi'
                />
            </video > </div>
    )
}

export default BasicVideoPlayer