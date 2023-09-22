const LangTag = ({ tag, onSelect }) => {
    return (
        <button
            className='border-2 border-black rounded-md p-2 w-24 bg-blue-200 hover:bg-blue-300 font-bold hover:text-blue-800'
            onClick={onSelect}
        >
            {tag}
        </button>
    );
};

export default LangTag;
