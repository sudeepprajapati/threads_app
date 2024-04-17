"use client"
// import { useState } from 'react';
// import Image from 'next/image';
// // import { boolean } from 'zod';

// interface Props {
//     initialLikes: number;
// }

// const Like = ({ initialLikes, }: Props) => {
//     const [isLiked, setIsLiked] = useState(initialLikes);
//     const [likeCount, setLikeCount] = useState(0);

//     const handleLikeClick = () => {
//         setIsLiked(!isLiked);
//         setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
//     };
//     return (
//         <div className='flex gap-0'>
//             <Image
//                 src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
//                 alt={isLiked ? 'Liked' : 'Not Liked'}
//                 width={24}
//                 height={24}
//                 className='cursor-pointer object-contain'
//                 onClick={handleLikeClick}
//             />
//             {/* <p className='text-white'>{likeCount}</p> */}
//         </div>
//     )
// };

// export default Like;

import { useState } from 'react';

const Like = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className='flex gap-0 px-0'>
            <img
                src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
                alt={isLiked ? 'Liked' : 'Not Liked'}
                width={24}
                height={24}
                className='cursor-pointer object-contain'
                onClick={handleLikeClick}
            />
            {likeCount > 0 ? <span className='text-white'>{likeCount}</span> : null}
        </div>

    );
};

export default Like;
