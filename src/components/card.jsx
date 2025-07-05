import { useState } from 'react'
import Images from '../assets/images'
import './card.css'

const Card = () => {

    const [isShareVisible, toggleSahreVisible] = useState(false);

    const toggleShare = () => {
        toggleSahreVisible(!isShareVisible);
    }

  return (
    <article className="card w-full max-w-[21.4375rem] h-[32.5rem] bg-white rounded-xl grid grid-rows-[12.92rem_1fr_4.5rem] shadow-xl lg:max-w-[59rem] lg:h-[22rem] lg:grid-cols-[2.45fr_4fr] lg:grid-rows-[2fr_1fr]">
        <header className="h-full w-full rounded-tl-xl rounded-tr-xl xl:rounded-tl-xl xl:rounded-bl-xl">
            <img src={Images.drawer} 
                 alt="Flower image" 
                 className='h-full w-full object-cover object-[0rem_-1.125rem] rounded-tl-xl rounded-tr-xl lg:object-left-top lg:rounded-tr-[0] lg:rounded-bl-xl'/>
        </header>
        <section className="h-full w-full px-8 pt-4 flex flex-col justify-center gap-3 lg:px-12 lg:pt-10">  
            <h1 className='text-[1.1rem] text-Grayish-Blue-Dark font-bold lg:text-[1.7rem] lg:leading-tight'>
                Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h1>
            <p className='text-Dark-Blue-Pale text-[0.865rem] font-medium lg:text-[1.05rem] lg:max-w-[44ch]'>
                Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
            </p>
        </section>
        <footer className="w-full h-auto flex items-center justify-between px-8 pb-1 relative lg:px-12">
            <div className="author h-full flex items-center gap-3 lg:gap-6">
                <img src={Images.avatar} alt="Author's Avatar" className="w-10 h-10 rounded-full lg:h-12 lg:w-12" />
                <div className='flex flex-col gap-0'>   
                    <h2 className='text-sm font-bold text-Grayish-Blue-Dark lg:text-lg'>Michelle Appleton</h2>
                    <time dateTime="28-6-2020" className='text-[0.8rem] text-Dark-Blue-Pale lg:text-[0.9rem]'>28 June 2020</time>
                </div>
            </div>
            <button 
                type="button"
                className={`w-8 h-8 rounded-full bg-Grayish-Blue-Light flex items-center justify-center lg:cursor-pointer z-[2] lg:w-12 lg:h-12`} 
                aria-label='Share Button' 
                aria-pressed={`${isShareVisible ? 'true' : 'false'}`}
                onClick={toggleShare}>
                <img src={Images.share} alt="Share icon" fill='var(--color-white)' aria-hidden='true' className='lg:w-4 lg:h-4' />
            </button>
            <div className={`share-tab w-full h-full left-0 bottom-0 bg-Grayish-Blue-Dark absolute ${isShareVisible ? 'flex' : 'hidden'} items-center pl-8 rounded-bl-xl rounded-br-xl lg:w-[21.25rem] lg:h-[4.75rem] lg:justify-center lg:p-[1rem_2rem] lg:-top-21 lg:left-84 lg:rounded-tl-xl lg:rounded-tr-xl`}>
                <ul className='list-none flex gap-4 lg:gap-6'>
                    <li className='text-Grayish-Blue mr-1 text-sm tracking-[0.25rem] lg:text-lg'>SHARE</li>
                    <li>
                        <a href="#" rel="noopener noreferrer" aria-label='Share on Facebook'><img src={Images.facebook} alt="Facebook Icon" className='lg:w-6 lg:h-6' /></a>
                    </li>
                    <li>
                        <a href="#" rel="noopener noreferrer" aria-label='Share on Twitter'><img src={Images.twitter} alt="Twitter Icon" className='translate-y-0.5 lg:w-6 lg:h-6' /></a>
                    </li>
                    <li>
                        <a href="#" rel="noopener noreferrer" aria-label='Share on Pinterest'><img src={Images.pinterest} alt="Pinterest Icon" className='lg:w-6 lg:h-6' /></a>
                    </li>
                </ul>
            </div>
        </footer>
    </article>
  )
}

export default Card