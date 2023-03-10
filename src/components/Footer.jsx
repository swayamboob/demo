import logo from '../../images/logo.png'
import innerve from '../../images/innerveLogo.png'
import binary from '../../images/binaryArmy.png'
const Footer = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-1 mt-5 w-full'>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>
                        <img src={binary} className="w-14 bg-white rounded mx-6" />
                         Binary Army
                    </p>
                    <p className='text-white  '>
                        <img src={logo} alt="logo" className='w-32' />
                        Blockchain wallet</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>
                        <img src={innerve} className="w-14" />
                        Innerve 7
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Footer;