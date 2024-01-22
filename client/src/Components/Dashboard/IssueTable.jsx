const IssueTable = () => {
    return (
        <div className='flex-col w-auto h-5/6 bg-white rounded-lg px-6 py-4 my-4 tablet:my-0 tablet:ml-4 tablet:h-full tablet:col-span-3'>
            <h4 className='font-bold'>Saved Issues</h4>
            <table className='min-w-full border border-gray-300'>
                <thead className='tablet:w-full'>
                    <tr>
                        <th className='border border-gray-300 p-2 tablet:p-0 tablet:w-1/6'>
                            Latest Saved
                        </th>
                        <th className='border border-gray-300 p-2 hidden tablet:table-cell tablet:p-0 tablet:w-3/6'>
                            Issue Title
                        </th>
                        <th className='border border-gray-300 p-2 hidden tablet:table-cell tablet:p-0 tablet:w-1/6'>
                            Creator Icon
                        </th>
                        <th className='border border-gray-300 p-2 tablet:p-0 tablet:w-1/6'>
                            Github Icon
                        </th>
                        {/* Add more cells as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-300 p-2'></td>
                        <td className='border border-gray-300 p-2 hidden tablet:table-cell'></td>
                        <td className='border border-gray-300 p-2 hidden tablet:table-cell'></td>
                        <td className='border border-gray-300 p-2'></td>
                        {/* Add more cells as needed */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default IssueTable;
