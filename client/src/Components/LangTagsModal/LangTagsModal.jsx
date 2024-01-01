import React, { useState } from 'react';
import LangTag from './LangTag';
import Modal from 'react-modal';
const backendUrl = import.meta.env.VITE_BACK_END_URL;

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

    async function handleLanguageClick(language) {
        try {
            // Construct the URL with query parameters
            const apiUrl = `${backendUrl}/issues/${language.keyword}`;

            // Make the API request using the constructed URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('GitHub API request failed');
            }

            // Parse the response as JSON
            const data = await response.json();

            // Update the issues state with the new data
            updateIssues(data);
        } catch (error) {
            console.error('API Error:', error);
        }
    }
    return (
        <div className='flex justify-center py-4'>
            <div className='inline-flex text-text bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl px-1 py-4 items-center h-1 font-semibold'>
                <div className='bg-background rounded-3xl hover:bg-blue-100'>
                    <button
                        className='hover:animate-pulse px-8'
                        onClick={openModal}
                    >
                        Filter programming language
                    </button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-gradient-to-r from-sky-400 to-blue-500 p-2 rounded-lg shadow-lg max-w-3xl z-50'
                overlayClassName='fixed inset-0 z-40'
                contentLabel='Programming Languages Selection Modal'
            >
                <div className='bg-background rounded-lg p-4'>
                    <div className='flex justify-between'>
                        <div className='text-xl font-bold text-text'>
                            Please select a programming language 😊
                        </div>
                        <button
                            className='text-xl font-bold text-text hover:text-primary'
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
