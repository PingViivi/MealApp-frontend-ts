import React from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

interface LikeButtonProps {
    isLiked: boolean;
    visibility: boolean;
    onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, visibility, onClick }) => {
    if (!visibility) {
        return null; // Return null if visibility is false
    }

    const buttonText: string = isLiked ? "Suosikki" : "Lisää suosikkeihin";
    const icon: JSX.Element = isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />;

    return (
        <button className='like' onClick={onClick}>
            {buttonText}
            {icon}
        </button>
    );
};

export default LikeButton;
