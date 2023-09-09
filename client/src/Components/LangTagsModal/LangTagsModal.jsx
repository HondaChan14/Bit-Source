import React, { useState } from 'react';
import LangTag from './LangTag';
import Modal from 'react-modal';

const getProgrammingLanguages = () => {
    return [
        { name: 'JavaScript', keyword: 'javascript' },
        { name: 'Python', keyword: 'python' },
        { name: 'Java', keyword: 'java' },
        { name: 'Ruby', keyword: 'ruby' },
        { name: 'C#', keyword: 'csharp' },
        { name: 'C++', keyword: 'cpp' },
        { name: 'C', keyword: 'c' },
        { name: 'PHP', keyword: 'php' },
        { name: 'Swift', keyword: 'swift' },
        { name: 'TypeScript', keyword: 'typescript' },
        { name: 'HTML', keyword: 'html' },
        { name: 'CSS', keyword: 'css' },
        { name: 'Go', keyword: 'go' },
        { name: 'Kotlin', keyword: 'kotlin' },
        { name: 'Rust', keyword: 'rust' },
        { name: 'Vue.js', keyword: 'vue' },
        { name: 'React', keyword: 'react' },
        { name: 'Angular', keyword: 'angular' },
    ];
};

const LangTagsModal = ({ updateIssues }) => {
    const programmingLanguages = getProgrammingLanguages();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleLanguageClick(language) {
        //Make an API request to your backend using fetch
        fetch(`/${language.keyword}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response;
            })
            .then((data) => {
                // Handle the response if needed
                console.log('API Response:', data);

                // Update the issues state using the callback from props
                updateIssues(data);
                closeModal(); // Close the modal
            })
            .catch((error) => {
                // Handle errors if the request fails
                console.error('API Error:', error);
            });
    }
    return (
        <div className='flex justify-center py-4'>
            <div className='inline-flex text-white border-slate-500 border-4 rounded-3xl p-4 items-center h-1 bg-[#0d1117]'>
                <button className='hover:animate-pulse' onClick={openModal}>
                    Filter programming language
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-gradient-to-r from-sky-400 to-blue-500 p-2 rounded-lg shadow-lg max-w-3xl z-50'
                overlayClassName='fixed inset-0 z-40'
                contentLabel='Programming Languages Selection Modal'
            >
                <div className='bg-[#0d1117] rounded-lg p-4'>
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold text-white'>
                            Please select a programming language 😊
                        </div>
                        <button
                            className='text-xl font-bold text-white hover:text-blue-500'
                            onClick={closeModal}
                        >
                            close
                        </button>
                    </div>
                    <div className='flex flex-wrap gap-4 justify-center p-4 '>
                        {programmingLanguages.map((language) => (
                            <LangTag
                                key={language.keyword}
                                tag={language.name}
                                onSelect={() => handleLanguageClick(language)}
                            />
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default LangTagsModal;
