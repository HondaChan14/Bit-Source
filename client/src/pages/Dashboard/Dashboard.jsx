import IssueTable from '../../Components/Dashboard/IssueTable';
import UserInfo from '../../Components/Dashboard/UserInfo';
import UserIcon from '../../Components/Dashboard/UserIcon';

const Dashboard = () => {
    return (
        <section className='bg-gray-200 rounded-xl shadow-md w-96 tablet:w-1/2 tablet:mx-auto'>
            <div>
                <div className='flex bg-gradient-to-r from-sky-400 to-blue-500 h-40 px-10 rounded-t-lg pt-4 justify-end'>
                    {/* Banner */}
                </div>
                <UserIcon />
            </div>
            <div className='flex flex-col tablet:flex-row mt-12 tablet:mt-28 h-[32rem] mx-10'>
                <UserInfo />
                <IssueTable />
            </div>
        </section>
    );
};

export default Dashboard;
