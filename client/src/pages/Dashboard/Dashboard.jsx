import IssueTable from '../../Components/Dashboard/IssueTable';
import UserInfo from '../../Components/Dashboard/UserInfo';
import UserIcon from '../../Components/Dashboard/UserIcon';

const Dashboard = () => {
    return (
        <section className='grid bg-gray-200 rounded-xl shadow-md pb-4 tablet:grid-cols-1'>
            <div>
                <div className='flex bg-gradient-to-r from-sky-400 to-blue-500 h-40 px-10 rounded-t-lg pt-4 justify-end'>
                    {/* Banner */}
                </div>
                <UserIcon />
            </div>
            <div className='grid mt-12 h-[32rem] tablet:h-fit mx-10 tablet:mt-24 tablet:grid-cols-4 tablet:mx-4'>
                <UserInfo />
                <IssueTable />
            </div>
        </section>
    );
};

export default Dashboard;
