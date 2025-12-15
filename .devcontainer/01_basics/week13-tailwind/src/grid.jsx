import './App.css'
function App() {

    return (
        <>
            {/* <div className='text-blue-200'>hi</div> */}
            <div className='grid grid-cols-12 gap-4'>
                <div className={"col-span-3 bg-green-300"}>This is the first grid element</div>
                <div className='col-span-7 bg-red-200'>This is the second grid element</div>
                <div className='col-span-6 bg-blue-200'>This is the third grid element</div>
                <div className='col-span-6 bg-blue-200'>This is the third grid element</div>
            </div>
        </>
    )
}

export default App

