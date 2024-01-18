const IssueTable = () => {
    return (
        <div className='tablet:flex-grow flex-col w-auto h-5/6 tablet:w-[48rem] bg-white tablet:mx-20 rounded-lg px-6 py-4 my-4 tablet:my-0'>
            <h4 className='font-bold'>Saved Issues</h4>
            <table className='min-w-full border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border border-gray-300 p-2'>
                            Latest Saved
                        </th>
                        <th className='border border-gray-300 p-2 hidden tablet:block'>
                            Issue Title
                        </th>
                        <th className='border border-gray-300 p-2 hidden tablet:block'>
                            Creator Icon
                        </th>
                        <th className='border border-gray-300 p-2'>
                            Github Icon
                        </th>
                        {/* Add more cells as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-300 p-2'></td>
                        <td className='border border-gray-300 p-2 hidden tablet:block'></td>
                        <td className='border border-gray-300 p-2 hidden tablet:block'></td>
                        <td className='border border-gray-300 p-2'></td>
                        {/* Add more cells as needed */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default IssueTable;
