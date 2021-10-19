import React from 'react'

type CardProps = {
    coverImage: string,
    title: string
}

function Card(props: CardProps) {
    const {coverImage, title} = props;
    return (
        <div className="w-full h-full object-cover">
            <img src={coverImage} alt="" className="object-cover"/>
            <div className="text-sm">
                {title}
            </div>
        </div>
    )
}

export default React.memo(Card);