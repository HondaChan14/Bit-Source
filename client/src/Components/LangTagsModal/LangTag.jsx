const LangTag = ({ tag, onSelect }) => {
    return (
        <button
            className='border-2 border-black rounded-md p-1 w-24 bg-blue-200 hover:bg-blue-300 font-bold hover:text-blue-800 tablet:p-3'
            onClick={onSelect}
        >
            {tag}
        </button>
    );
};

export default LangTag;
