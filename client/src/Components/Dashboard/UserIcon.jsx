import { useRef, useState } from 'react';
import defaultIcon from '/images/default-icon.png';
const UserIcon = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState('');

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };
    return (
        <div
            onClick={handleImageClick}
            className='flex flex-col absolute left-12 top-40 z-0 tablet:left-20 tablet:top-32 laptop:left-[23rem]'
        >
            {image ? (
                <img
                    src={URL.createObjectURL(image)}
                    className='border-4 border-solid border-black rounded-full w-32 h-32 tablet:w-52 tablet:h-52 bg-white'
                />
            ) : (
                <img
                    src={defaultIcon}
                    className='rounded-full w-32 h-32 tablet:w-52 tablet:h-52'
                />
            )}
            <input
                type='file'
                ref={inputRef}
                onChange={handleImageChange}
                className='hidden'
            />
            <button className='hidden absolute top-44 rounded-md bg-green-400 px-2 self-end laptop:block'>
                Upload
            </button>
        </div>
    );
};

export default UserIcon;
