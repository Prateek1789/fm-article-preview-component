import Images from '../assets/images'

function Card() {
  return (
    <article className="w-full max-w-[23.4375rem] h-[32.5rem] bg-white rounded-xl grid grid-rows-[2fr_3fr]">
        <div className="h-full w-full min-h-0">
            <img src={Images.drawer} alt="Flower image" className='h-full w-full object-cover rounded-tl-xl rounded-tr-xl '/>
        </div>
        <div className="h-full w-full p-8 flex flex-col justify-between">
        <div>   
            <h1 className='text-md mb-4 text-Grayish-Blue-Dark font-bold'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p className='text-Grayish-Blue-Dark text-p'>
                Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
            </p>
            </div>
            <div className="author">
            <img src={Images.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
            </div>
        </div>
    </article>
  )
}

export default Card