import Discord from '/images/Discord.svg';
import Github from '/images/Github.svg';
import Instagram from '/images/Instagram.svg';
import Site from '/images/Www.svg';
import X from '/images/X.svg';

const UserInfo = () => {
    const socials = [
        { icon: Discord, url: null },
        { icon: Github, url: null },
        { icon: Instagram, url: null },
        { icon: X, url: null },
        { icon: Site, url: null },
    ];
    return (
        <div className='flex flex-col bg-white rounded-lg h-5/6 p-2 w-auto tablet:w-80 tablet:ml-10 laptop:max-w-[250px]'>
            <div className='pb-2'>
                <h3 className='font-bold'>Username</h3>
                <span>Date of account created</span>
            </div>
            <hr></hr>
            <div className='mt-4'>
                <h4 className='font-bold'>About</h4>
                <p className='whitespace-normal'>
                    Hello I am a software engineer and I be cool 😎
                </p>
                <span>Software Engineer @ #100Devs</span>
            </div>

            <div className='flex-col mt-auto'>
                <h4 className='font-bold pb-2'>Socials</h4>
                <div className='flex-row space-x-1'>
                    {socials.some((social) => social.url !== null) ? (
                        socials.map(
                            (social, index) =>
                                social.url !== null && (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img
                                            src={social.icon}
                                            className='w-5'
                                            alt={`Social Icon ${index + 1}`}
                                        />
                                    </a>
                                )
                        )
                    ) : (
                        <a href='/'>Please add socials</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
