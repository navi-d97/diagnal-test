import React from 'react'
import PlaceHolderImage from '../assets/placeholder_for_missing_posters.png'

type CardProps = {
    coverImage?: string,
    title: string
}

function Card(props: CardProps) {
    const {coverImage, title} = props;
    return (
        <div className="h-full object-contain flex-col align-middle justify-center ml-3 mr-3">
            <img
                src={coverImage||PlaceHolderImage}
                alt=""
                className="object-contain"
                onError={(e:any)=>{
                    e.target.src=PlaceHolderImage
                }}
            />
            <div className="text-sm text-white">
                {title}
            </div>
        </div>
    )
}

export default React.memo(Card);