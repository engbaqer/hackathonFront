import Data from './fakedata/bodyData'

export default function body() {
  return (


    <div className="bg-slate-800 flex-grow flex items-center justify-center gap-20 flex-wrap    ">
      {Data.map((item,indx) => 
      <div className='border border-cyan-50 rounded-s-md p-2 bg-slate-300' key={indx}>
        <img className='w-52 h-52' src={item.image} alt="" />
        <h1>{item.name}</h1>
        <p>{item.age}</p>
          </div>
      )}
    </div>
    

    
  )
}
